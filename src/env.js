import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    AUTH_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string()
        : z.string().optional(),

    AUTH_DISCORD_ID: z.string(),
    AUTH_DISCORD_SECRET: z.string(),

    DATABASE_URL: z.string().url(),

    // =========================
    // Zoom
    // =========================
    ZOOM_ACCOUNT_ID: z.string(),
    ZOOM_CLIENT_ID: z.string(),
    ZOOM_CLIENT_SECRET: z.string(),

    // =========================
    // Resend
    // =========================
    RESEND_API_KEY: z.string(),
    EMAIL_FROM: z.string(), // Supports: "Hayagriva Yoga <info@hayagrivayoga.com>"

    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },

  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },

  runtimeEnv: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_DISCORD_ID: process.env.AUTH_DISCORD_ID,
    AUTH_DISCORD_SECRET: process.env.AUTH_DISCORD_SECRET,

    DATABASE_URL: process.env.DATABASE_URL,

    // =========================
    // Zoom
    // =========================
    ZOOM_ACCOUNT_ID: process.env.ZOOM_ACCOUNT_ID,
    ZOOM_CLIENT_ID: process.env.ZOOM_CLIENT_ID,
    ZOOM_CLIENT_SECRET: process.env.ZOOM_CLIENT_SECRET,

    // =========================
    // Resend
    // =========================
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    EMAIL_FROM: process.env.EMAIL_FROM,

    NODE_ENV: process.env.NODE_ENV,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  emptyStringAsUndefined: true,
});