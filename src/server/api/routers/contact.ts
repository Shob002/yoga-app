import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const contactRouter = createTRPCRouter({
  send: publicProcedure
    .input(
      z.object({
        name: z.string().min(2),
        email: z.string().email().optional(),
        phone: z.string().optional(),
        message: z.string().min(5),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.contactMessage.create({
        data: {
          name: input.name,
          email: input.email || null,
          phone: input.phone || null,
          message: input.message,
        },
      });
    }),

  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.contactMessage.delete({
        where: { id: input.id },
      });
    }),
});