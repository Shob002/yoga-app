import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type BookingConfirmationData = {
  name: string;
  email: string;
  service: string;
  date: string;
  time: string;
  zoomLink?: string;
};

export async function sendBookingConfirmation(
  data: BookingConfirmationData,
) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  if (!process.env.EMAIL_FROM) {
    throw new Error("EMAIL_FROM is not configured.");
  }

  const { name, email, service, date, time, zoomLink } = data;

  const { data: result, error } = await resend.emails.send({
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "Yoga Therapy Booking Confirmation",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Booking Confirmed</h2>

        <p>Dear ${name},</p>

        <p>
          Your yoga therapy booking has been successfully confirmed.
        </p>

        <h3>Booking Details</h3>

        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>

        ${
          zoomLink
            ? `
              <p>
                <strong>Online Session:</strong>
                <a href="${zoomLink}">Join Zoom Meeting</a>
              </p>
            `
            : ""
        }

        <p>
          Please join the session a few minutes before the scheduled time.
        </p>

        <p>
          Regards,<br />
          Hayagriva Yoga
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend Error:", error);
    throw new Error("Failed to send booking confirmation email.");
  }

  return result;
}