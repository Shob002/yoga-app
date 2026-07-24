import { resend } from "./client";
import { env } from "~/env";

interface BookingEmailProps {
  name: string;
  email: string;
  service: string;
  date: string;
  time: string;
  zoomLink: string;
}

export async function sendBookingConfirmation(
  data: BookingEmailProps,
) {
  return resend.emails.send({
    from: env.EMAIL_FROM,
    to: data.email,
    subject: "Yoga Therapy Booking Confirmed",

    html: `
      <h2>Hello ${data.name},</h2>

      <p>Your booking has been confirmed.</p>

      <p><strong>Service:</strong> ${data.service}</p>

      <p><strong>Date:</strong> ${data.date}</p>

      <p><strong>Time:</strong> ${data.time}</p>

      <br/>

      <a href="${data.zoomLink}">
        Join Zoom Meeting
      </a>

      <br/><br/>

      <p>Regards,</p>

      <h3>Hayagriva Yoga</h3>
    `,
  });
}