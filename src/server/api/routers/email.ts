import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

import { sendBookingConfirmation } from "~/server/services/email";

export const emailRouter = createTRPCRouter({
  test: protectedProcedure
    .input(
      z.object({
        email: z.string().email(),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        await sendBookingConfirmation({
          name: "Test User",
          email: input.email,
          service: "Stress & Anxiety",
          date: new Date().toLocaleDateString("en-IN"),
          time: "10:00 AM",
          zoomLink: "https://zoom.us/j/123456789",
        });

        return {
          success: true,
          message: "Test email sent successfully.",
        };
      } catch (error) {
        console.error("Email Error:", error);

        throw new Error("Failed to send email.");
      }
    }),
});