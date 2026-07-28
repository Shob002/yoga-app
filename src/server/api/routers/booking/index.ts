import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

import { createZoomMeeting } from "~/server/services/zoom/client";
import { sendBookingConfirmation } from "~/server/services/email/sendEmail";

export const bookingRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(2, "Name is required"),

        email: z
          .string()
          .email("Invalid email address"),

        phone: z
          .string()
          .min(10, "Phone number must be at least 10 digits"),

        date: z
          .string()
          .min(1, "Date is required"),

        time: z
          .string()
          .min(1, "Time is required"),

        message: z
          .string()
          .optional(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      /*
       * 1. Determine service / therapy
       */
      const therapy =
        input.message?.trim() || "Yoga Therapy Session";

      /*
       * 2. Create Zoom meeting
       */
      const zoomMeeting = await createZoomMeeting({
        name: input.name,
        therapy,
        date: input.date,
        time: input.time,
        duration: 60,
      });

      /*
       * 3. Save booking + Zoom details
       */
      const booking = await ctx.db.booking.create({
        data: {
          name: input.name,
          email: input.email,
          phone: input.phone,
          service: therapy,
          message: input.message ?? null,

          status: "CONFIRMED",

          zoomMeetingId: String(zoomMeeting.meetingId),
          zoomJoinUrl: zoomMeeting.joinUrl,
          zoomStartUrl: zoomMeeting.startUrl,
        },
      });

      /*
       * 4. Send confirmation email to customer
       */
      try {
        await sendBookingConfirmation({
          name: booking.name,
          email: booking.email!,
          service: booking.service,
          date: input.date,
          time: input.time,
          zoomLink: booking.zoomJoinUrl ?? undefined,
        });
      } catch (error) {
        /*
         * Booking is already saved successfully.
         * Email failure should not erase the booking.
         */
        console.error(
          "Booking confirmation email failed:",
          error,
        );
      }

      /*
       * 5. Return booking information to frontend
       */
      return {
        success: true,
        message: "Booking confirmed successfully",
        bookingId: booking.id,
        zoomJoinUrl: booking.zoomJoinUrl,
        date: input.date,
        time: input.time,
      };
    }),
});