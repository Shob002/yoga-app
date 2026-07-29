import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { createZoomMeeting } from "~/server/services/zoom/client";
import { sendBookingConfirmation } from "~/server/services/email/sendEmail";

export const bookingRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string().trim().min(2, "Name must be at least 2 characters"),

        phone: z
          .string()
          .trim()
          .min(10, "Phone number must be at least 10 digits"),

        email: z
          .string()
          .trim()
          .email("Invalid email address")
          .optional()
          .or(z.literal("")),

        service: z.string().trim().min(2, "Please select a therapy service"),

        date: z.string().trim().min(1, "Date is required"),

        time: z.string().trim().min(1, "Time is required"),

        message: z.string().trim().optional(),
      }),
    )

    .mutation(async ({ input, ctx }) => {
      /*
       * --------------------------------------------------
       * 1. Clean incoming data
       * --------------------------------------------------
       */

      const name = input.name.trim();
      const phone = input.phone.trim();
      const email = input.email?.trim() || null;
      const service = input.service.trim();
      const date = input.date.trim();
      const time = input.time.trim();
      const message = input.message?.trim() || null;

      /*
       * --------------------------------------------------
       * 2. Create Zoom Yoga Therapy meeting
       * --------------------------------------------------
       */

      const zoomMeeting = await createZoomMeeting({
        name,
        therapy: service,
        date,
        time,
        duration: 60,
      });

      /*
       * --------------------------------------------------
       * 3. Save booking in PostgreSQL / Neon
       * --------------------------------------------------
       */

      const booking = await ctx.db.booking.create({
        data: {
          name,
          phone,
          email,
          service,
          date,
          time,
          message,

          status: "CONFIRMED",

          zoomMeetingId: String(zoomMeeting.meetingId),
          zoomJoinUrl: zoomMeeting.joinUrl,
          zoomStartUrl: zoomMeeting.startUrl,
        },
      });

      /*
       * --------------------------------------------------
       * 4. Send confirmation email
       * --------------------------------------------------
       *
       * Email failure should NOT delete a successful
       * booking or Zoom meeting.
       */

      if (email) {
        try {
          await sendBookingConfirmation({
            name: booking.name,
            email,
            service: booking.service,
            date: booking.date,
            time: booking.time,
            zoomLink: booking.zoomJoinUrl ?? undefined,
          });
        } catch (error) {
          console.error("Booking confirmation email failed:", error);
        }
      }

      /*
       * --------------------------------------------------
       * 5. Return booking information to frontend
       * --------------------------------------------------
       */

      return {
        success: true,

        message: "Booking confirmed successfully",

        bookingId: booking.id,

        zoomJoinUrl: booking.zoomJoinUrl,

        date: booking.date,

        time: booking.time,

        service: booking.service,
      };
    }),
});
