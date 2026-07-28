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
    subject: "Your Hayagriva Yoga Session is Confirmed",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Hayagriva Yoga Booking Confirmation</title>
        </head>

        <body
          style="
            margin: 0;
            padding: 0;
            background-color: #050706;
            font-family: Arial, Helvetica, sans-serif;
            color: #f7efe0;
          "
        >
          <div
            style="
              max-width: 600px;
              margin: 40px auto;
              padding: 40px 30px;
              background-color: #0d100e;
              border: 1px solid #3b3323;
              border-radius: 16px;
            "
          >

            <!-- BRAND -->
            <div style="text-align: center; margin-bottom: 30px;">
              <h1
                style="
                  margin: 0;
                  color: #d6b36a;
                  font-size: 28px;
                  letter-spacing: 3px;
                "
              >
                HAYAGRIVA YOGA
              </h1>

              <p
                style="
                  margin: 8px 0 0;
                  color: #aaa;
                  font-size: 12px;
                  letter-spacing: 2px;
                "
              >
                YOGA THERAPY & WELLNESS
              </p>
            </div>

            <!-- TITLE -->
            <h2
              style="
                text-align: center;
                color: #f2d89a;
                font-size: 24px;
                margin-bottom: 25px;
              "
            >
              Your Session is Confirmed
            </h2>

            <p style="font-size: 16px; line-height: 1.7;">
              Dear ${name},
            </p>

            <p
              style="
                color: #d8d4ca;
                font-size: 15px;
                line-height: 1.7;
              "
            >
              Thank you for choosing Hayagriva Yoga.
              Your yoga therapy session has been successfully scheduled.
            </p>

            <!-- BOOKING DETAILS -->
            <div
              style="
                margin: 30px 0;
                padding: 24px;
                background-color: #151914;
                border: 1px solid #3b3323;
                border-radius: 12px;
              "
            >
              <h3
                style="
                  margin-top: 0;
                  color: #d6b36a;
                  font-size: 17px;
                "
              >
                Booking Details
              </h3>

              <p style="margin: 10px 0; color: #ddd;">
                <strong>Service:</strong> ${service}
              </p>

              <p style="margin: 10px 0; color: #ddd;">
                <strong>Date:</strong> ${date}
              </p>

              <p style="margin: 10px 0; color: #ddd;">
                <strong>Time:</strong> ${time}
              </p>

              <p style="margin: 10px 0; color: #ddd;">
                <strong>Mode:</strong> Online Zoom Session
              </p>
            </div>

            ${
              zoomLink
                ? `
                  <!-- ZOOM BUTTON -->
                  <div style="text-align: center; margin: 35px 0;">
                    <a
                      href="${zoomLink}"
                      style="
                        display: inline-block;
                        padding: 16px 30px;
                        background-color: #d6b36a;
                        color: #050706;
                        text-decoration: none;
                        font-weight: bold;
                        font-size: 15px;
                        border-radius: 8px;
                      "
                    >
                      JOIN YOUR ZOOM SESSION
                    </a>
                  </div>

                  <p
                    style="
                      text-align: center;
                      color: #aaa;
                      font-size: 13px;
                      line-height: 1.6;
                    "
                  >
                    Please join 5 minutes before your scheduled time.
                  </p>
                `
                : `
                  <div
                    style="
                      margin: 25px 0;
                      padding: 18px;
                      background-color: #151914;
                      border-radius: 10px;
                      text-align: center;
                    "
                  >
                    <p style="margin: 0; color: #aaa;">
                      Your online session link will be shared separately.
                    </p>
                  </div>
                `
            }

            <hr
              style="
                border: 0;
                border-top: 1px solid #292c28;
                margin: 35px 0;
              "
            />

            <p
              style="
                text-align: center;
                color: #999;
                font-size: 13px;
                line-height: 1.6;
              "
            >
              If you have any questions about your appointment,
              please contact Hayagriva Yoga.
            </p>

            <p
              style="
                text-align: center;
                color: #d6b36a;
                font-size: 14px;
                margin-top: 25px;
              "
            >
              Hayagriva Yoga
            </p>

          </div>
        </body>
      </html>
    `,
  });

  if (error) {
    console.error("Resend Error:", error);

    throw new Error("Failed to send booking confirmation email.");
  }

  return result;
}