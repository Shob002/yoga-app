import { createTRPCRouter } from "~/server/api/trpc";

import { bookingRouter } from "~/server/api/routers/booking";
import { contactRouter } from "~/server/api/routers/contact";
import { emailRouter } from "~/server/api/routers/email";
import { zoomRouter } from "~/server/api/routers/zoom";

export const appRouter = createTRPCRouter({
  booking: bookingRouter,
  contact: contactRouter,
  email: emailRouter,
  zoom: zoomRouter,
});

export type AppRouter = typeof appRouter;