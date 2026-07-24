import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";

import {
  getZoomAccessToken,
  createZoomMeeting,
} from "~/server/services/zoom/client";

export const zoomRouter = createTRPCRouter({
  test: protectedProcedure.query(async () => {
    const token = await getZoomAccessToken();

    return {
      success: true,
      message: "Zoom connected successfully",
      token: token.substring(0, 10) + "******",
    };
  }),

  createMeeting: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        therapy: z.string(),
        date: z.string(),
        time: z.string(),
        duration: z.number().default(60),
      })
    )
    .mutation(async ({ input }) => {
      const meeting = await createZoomMeeting(input);

      return {
        success: true,
        ...meeting,
      };
    }),
});