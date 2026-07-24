import { postRouter } from "~/server/api/routers/post";
import { bookingRouter } from "~/server/api/routers/booking";
import { contactRouter } from "~/server/api/routers/contact";
import { zoomRouter } from "~/server/api/routers/zoom";
import { emailRouter } from "~/server/api/routers/email";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * Primary router
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  booking: bookingRouter,
  contact: contactRouter,
  zoom: zoomRouter,
  email: emailRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Server-side caller
 */
export const createCaller = createCallerFactory(appRouter);