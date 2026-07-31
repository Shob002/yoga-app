import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { sendBookingConfirmation } from "~/server/services/email/sendEmail";
import { createZoomMeeting } from "~/server/services/zoom/client";

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

        service: z
          .string()
          .trim()
          .min(2, "Please select a therapy service"),

        date: z.string().trim().min(1, "Date is required"),

        time: z.string().trim().min(1, "Time is required"),

        message: z.string().trim().optional(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const booking = await ctx.db.booking.create({
        data: {
          name: input.name.trim(),
          phone: input.phone.trim(),
          email: input.email?.trim() || null,
          service: input.service.trim(),
          date: input.date.trim(),
          time: input.time.trim(),
          message: input.message?.trim() || null,
          status: "PENDING",
        },
      });

      return {
        success: true,
        message: "Your booking request has been submitted successfully.",
        bookingId: booking.id,
        status: booking.status,
        date: booking.date,
        time: booking.time,
        service: booking.service,
      };
    }),

  list: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.booking.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }),

  confirm: publicProcedure
    .input(
      z.object({
        bookingId: z.string().min(1),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const booking = await ctx.db.booking.findUnique({
        where: {
          id: input.bookingId,
        },
      });

      if (!booking) {
        throw new Error("Booking not found.");
      }

      if (booking.status !== "PENDING") {
        throw new Error(
          `This booking cannot be confirmed because its current status is ${booking.status}.`,
        );
      }

      /*
       * STEP 1
       * Create Zoom meeting
       */
      const zoomMeeting = await createZoomMeeting({
        name: booking.name,
        therapy: booking.service,
        date: booking.date,
        time: booking.time,
        duration: 60,
      });

      /*
       * STEP 2
       * Update booking with Zoom information
       */
      const confirmedBooking = await ctx.db.booking.update({
        where: {
          id: booking.id,
        },
        data: {
          status: "CONFIRMED",
          zoomMeetingId: String(zoomMeeting.meetingId),
          zoomJoinUrl: zoomMeeting.joinUrl,
          zoomStartUrl: zoomMeeting.startUrl,
        },
      });

      /*
       * STEP 3
       * Send confirmation email
       */
      if (!confirmedBooking.email) {
        return {
          success: true,
          emailSent: false,
          message:
            "Booking confirmed successfully, but no customer email address was provided.",
          bookingId: confirmedBooking.id,
          status: confirmedBooking.status,
          zoomJoinUrl: confirmedBooking.zoomJoinUrl,
          date: confirmedBooking.date,
          time: confirmedBooking.time,
          service: confirmedBooking.service,
        };
      }

      try {
        const emailResult = await sendBookingConfirmation({
          name: confirmedBooking.name,
          email: confirmedBooking.email,
          service: confirmedBooking.service,
          date: confirmedBooking.date,
          time: confirmedBooking.time,
          zoomLink: confirmedBooking.zoomJoinUrl ?? undefined,
        });

        console.log("=================================");
        console.log("BOOKING CONFIRMED");
        console.log("Booking ID:", confirmedBooking.id);
        console.log("Customer:", confirmedBooking.email);
        console.log("Zoom:", confirmedBooking.zoomJoinUrl);
        console.log("Email sent:", emailResult?.id);
        console.log("=================================");

        return {
          success: true,
          emailSent: true,
          message:
            "Booking confirmed and confirmation email sent successfully.",
          bookingId: confirmedBooking.id,
          status: confirmedBooking.status,
          zoomJoinUrl: confirmedBooking.zoomJoinUrl,
          date: confirmedBooking.date,
          time: confirmedBooking.time,
          service: confirmedBooking.service,
        };
      } catch (error) {
        console.error("=================================");
        console.error("BOOKING CONFIRMED BUT EMAIL FAILED");
        console.error("=================================");
        console.error("Booking ID:", confirmedBooking.id);
        console.error("Customer email:", confirmedBooking.email);
        console.error("Email error:", error);
        console.error("=================================");

        return {
          success: true,
          emailSent: false,
          message:
            "Booking was confirmed, but the confirmation email could not be sent. Please check your Resend configuration.",
          bookingId: confirmedBooking.id,
          status: confirmedBooking.status,
          zoomJoinUrl: confirmedBooking.zoomJoinUrl,
          date: confirmedBooking.date,
          time: confirmedBooking.time,
          service: confirmedBooking.service,
        };
      }
    }),

  reject: publicProcedure
    .input(
      z.object({
        bookingId: z.string().min(1),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const booking = await ctx.db.booking.findUnique({
        where: {
          id: input.bookingId,
        },
      });

      if (!booking) {
        throw new Error("Booking not found.");
      }

      if (booking.status !== "PENDING") {
        throw new Error(
          `This booking cannot be rejected because its current status is ${booking.status}.`,
        );
      }

      const cancelledBooking = await ctx.db.booking.update({
        where: {
          id: booking.id,
        },
        data: {
          status: "CANCELLED",
        },
      });

      return {
        success: true,
        message: "Booking cancelled successfully.",
        bookingId: cancelledBooking.id,
        status: cancelledBooking.status,
      };
    }),
});