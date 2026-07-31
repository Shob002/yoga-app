import { Resend } from "resend";

type BookingConfirmationData = {
  name: string;
  email: string;
  service: string;
  date: string;
  time: string;
  zoomLink?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendBookingConfirmation(
  data: BookingConfirmationData,
) {
  const apiKey = process.env.RESEND_API_KEY;
  const emailFrom = process.env.EMAIL_FROM;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  if (!emailFrom) {
    throw new Error("EMAIL_FROM is not configured.");
  }

  const resend = new Resend(apiKey);

  const name = escapeHtml(data.name);
  const service = escapeHtml(data.service);
  const date = escapeHtml(data.date);
  const time = escapeHtml(data.time);
  const email = data.email.trim();

  console.log("=================================");
  console.log("RESEND EMAIL START");
  console.log("=================================");
  console.log("TO:", email);
  console.log("FROM:", emailFrom);
  console.log("SERVICE:", service);
  console.log("DATE:", date);
  console.log("TIME:", time);
  console.log("ZOOM:", Boolean(data.zoomLink));
  console.log("=================================");

  const response = await resend.emails.send({
    from: emailFrom,

    replyTo: "info@hayagrivayoga.com",

    to: [email],

    subject: "Your Hayagriva Yoga Session is Confirmed",

    html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Hayagriva Yoga Confirmation</title>
</head>

<body style="
margin:0;
padding:0;
background:#050706;
font-family:Arial,Helvetica,sans-serif;
color:#f7efe0;
">

<div style="
max-width:600px;
margin:40px auto;
padding:40px 30px;
background:#0d100e;
border:1px solid #3b3323;
border-radius:16px;
">

<div style="text-align:center">

<h1 style="
color:#d6b36a;
font-size:28px;
letter-spacing:3px;
margin:0;
">
HAYAGRIVA YOGA
</h1>

<p style="
color:#aaa;
font-size:12px;
letter-spacing:2px;
">
YOGA THERAPY & WELLNESS
</p>

</div>


<h2 style="
text-align:center;
color:#f2d89a;
">
Your Session is Confirmed
</h2>


<p>
Dear ${name},
</p>


<p style="
color:#d8d4ca;
line-height:1.7;
">

Thank you for choosing Hayagriva Yoga.
Your yoga therapy session has been successfully confirmed.

</p>


<div style="
margin:30px 0;
padding:24px;
background:#151914;
border:1px solid #3b3323;
border-radius:12px;
">

<h3 style="
color:#d6b36a;
">
Booking Details
</h3>


<p>
<strong>Service:</strong> ${service}
</p>

<p>
<strong>Date:</strong> ${date}
</p>

<p>
<strong>Time:</strong> ${time}
</p>

<p>
<strong>Mode:</strong> Online Zoom Session
</p>


</div>


${
  data.zoomLink
    ? `
<div style="
text-align:center;
margin:35px 0;
">

<a href="${data.zoomLink}"
style="
display:inline-block;
padding:16px 30px;
background:#d6b36a;
color:#050706;
text-decoration:none;
font-weight:bold;
border-radius:8px;
">

JOIN YOUR ZOOM SESSION

</a>

</div>

`
    : `
<div style="
padding:18px;
background:#151914;
text-align:center;
border-radius:10px;
">

Your online session link will be shared separately.

</div>
`
}


<hr style="
border:0;
border-top:1px solid #292c28;
margin:35px 0;
">


<p style="
text-align:center;
color:#999;
font-size:13px;
">

If you have questions, please contact Hayagriva Yoga.

</p>


<p style="
text-align:center;
color:#d6b36a;
">

Hayagriva Yoga

</p>


</div>

</body>
</html>
`,
  });


  console.log("=================================");
  console.log("RESEND RESPONSE");
  console.log(response);
  console.log("=================================");


  if (response.error) {
    console.error("RESEND ERROR");
    console.error(response.error);

    throw new Error(
      response.error.message ||
      "Failed to send confirmation email.",
    );
  }


  console.log("=================================");
  console.log("RESEND EMAIL SENT SUCCESSFULLY");
  console.log("ID:", response.data?.id);
  console.log("TO:", email);
  console.log("=================================");


  return response.data;
}