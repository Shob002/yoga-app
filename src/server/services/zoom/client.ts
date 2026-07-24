import axios from "axios";

const ACCOUNT_ID = process.env.ZOOM_ACCOUNT_ID!;
const CLIENT_ID = process.env.ZOOM_CLIENT_ID!;
const CLIENT_SECRET = process.env.ZOOM_CLIENT_SECRET!;

export async function getZoomAccessToken() {
  const response = await axios.post(
    `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${ACCOUNT_ID}`,
    {},
    {
      auth: {
        username: CLIENT_ID,
        password: CLIENT_SECRET,
      },
    }
  );

  return response.data.access_token as string;
}

export interface CreateMeetingInput {
  name: string;
  therapy: string;
  date: string;
  time: string;
  duration: number;
}

export async function createZoomMeeting(input: CreateMeetingInput) {
  const token = await getZoomAccessToken();

  const response = await axios.post(
    "https://api.zoom.us/v2/users/me/meetings",
    {
      topic: `Yoga Therapy - ${input.therapy}`,
      type: 2,
      start_time: `${input.date}T${input.time}:00`,
      duration: input.duration,
      timezone: "Asia/Kolkata",

      agenda: `Client: ${input.name}
Therapy: ${input.therapy}`,

      settings: {
        waiting_room: true,
        join_before_host: false,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return {
    meetingId: response.data.id,
    joinUrl: response.data.join_url,
    startUrl: response.data.start_url,
  };
}