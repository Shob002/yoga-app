import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const contactRouter = createTRPCRouter({
  send: publicProcedure
    .input(
      z.object({
        name: z.string().min(2, "Name is required"),
        email: z.string().email("Invalid email address"),
        phone: z.string().optional(),
        subject: z.string().min(2, "Subject is required"),
        message: z.string().min(5, "Message is required"),
      }),
    )
    .mutation(async ({ input }) => {
      /*
       * Add your email service here later if required.
       */

      console.log("Contact form:", input);

      return {
        success: true,
        message: "Message sent successfully",
      };
    }),
});