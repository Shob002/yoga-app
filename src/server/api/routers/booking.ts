import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import { createZoomMeeting } from "~/server/services/zoom/client";
import { sendBookingConfirmation } from "~/server/services/email";

const statusSchema = z.enum([
  "PENDING",
  "CONFIRMED",
  "COMPLETED",
  "CANCELLED",
]);

const bookingInput = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email().optional().or(z.literal("")),
  service: z.string().min(1),
  message: z.string().optional(),
  date: z.string(),
  time: z.string(),
});

export const bookingRouter = createTRPCRouter({
  create: publicProcedure
    .input(bookingInput)
    .mutation(async ({ ctx, input }) => {
      // 1. Create Zoom Meeting
      const zoom = await createZoomMeeting({
        name: input.name,
        therapy: input.service,
        date: input.date,
        time: input.time,
        duration: 60,
      });

      // 2. Save Booking
      const booking = await ctx.db.booking.create({
        data: {
          name: input.name,
          phone: input.phone,
          email: input.email || null,
          service: input.service,
          message: input.message || null,

          zoomMeetingId: String(zoom.meetingId),
          zoomJoinUrl: zoom.joinUrl,
          zoomStartUrl: zoom.startUrl,
        },
      });

      // 3. Send Email (only if email exists)
      if (input.email) {
        try {
          await sendBookingConfirmation({
            name: input.name,
            email: input.email,
            service: input.service,
            date: input.date,
            time: input.time,
            zoomLink: zoom.joinUrl,
          });
        } catch (error) {
          console.error("Email sending failed:", error);
          // Don't fail the booking if email sending fails.
        }
      }

      // 4. Return Response
      return {
        success: true,
        booking,
        zoomJoinUrl: zoom.joinUrl,
      };
    }),

  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.booking.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }),

  updateStatus: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        status: statusSchema,
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.booking.update({
        where: {
          id: input.id,
        },
        data: {
          status: input.status,
        },
      });
    }),

  delete: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.booking.delete({
        where: {
          id: input.id,
        },
      });
    }),
});