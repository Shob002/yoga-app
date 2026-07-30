import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const contactRouter = createTRPCRouter({
  /**
   * PUBLIC
   * Submit contact form.
   */
  send: publicProcedure
    .input(
      z.object({
        name: z
          .string()
          .trim()
          .min(2, "Name is required"),

        email: z
          .string()
          .trim()
          .email("Invalid email address")
          .optional()
          .or(z.literal("")),

        phone: z
          .string()
          .trim()
          .optional(),

        subject: z
          .string()
          .trim()
          .min(2, "Subject is required"),

        message: z
          .string()
          .trim()
          .min(5, "Message is required"),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const name = input.name.trim();

      const email =
        input.email?.trim() || null;

      const phone =
        input.phone?.trim() || null;

      const subject = input.subject.trim();

      const message = input.message.trim();

      const finalMessage = `Subject: ${subject}\n\n${message}`;

      const contact = await ctx.db.contactMessage.create({
        data: {
          name,
          email,
          phone,
          message: finalMessage,
        },
      });

      console.log("Contact message created:", contact.id);

      return {
        success: true,
        message: "Message sent successfully.",
        contactId: contact.id,
      };
    }),

  /**
   * ADMIN
   * Get all contact messages.
   */
  list: publicProcedure.query(async ({ ctx }) => {
    const messages =
      await ctx.db.contactMessage.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });

    return messages;
  }),
});