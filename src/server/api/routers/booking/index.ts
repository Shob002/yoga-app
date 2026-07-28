import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const bookingRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(2, "Name is required"),
        email: z.string().email("Invalid email address"),
        phone: z
          .string()
          .min(10, "Phone number must be at least 10 digits"),
        date: z.string().min(1, "Date is required"),
        time: z.string().min(1, "Time is required"),
        message: z.string().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      /*
       * Add your Prisma booking creation here if your
       * Prisma Booking model is already configured.
       */

      console.log("New booking:", input);

      return {
        success: true,
        message: "Booking submitted successfully",
      };
    }),
});