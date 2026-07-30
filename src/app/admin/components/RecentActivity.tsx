import {
  CalendarCheck,
  CreditCard,
  UserPlus,
  CheckCircle2,
  XCircle,
  Clock3,
} from "lucide-react";

type ActivityType =
  | "booking"
  | "payment"
  | "user"
  | "confirmed"
  | "rejected"
  | "pending";

type Activity = {
  id: number;
  type: ActivityType;
  title: string;
  description: string;
  time: string;
};

const activities: Activity[] = [
  {
    id: 1,
    type: "booking",
    title: "New booking request",
    description: "Priya Sharma requested a Yoga Therapy session",
    time: "8 min ago",
  },
  {
    id: 2,
    type: "payment",
    title: "Payment received",
    description: "₹1,500 payment received from Rahul Kumar",
    time: "24 min ago",
  },
  {
    id: 3,
    type: "confirmed",
    title: "Booking confirmed",
    description: "Ananya Rao's session was confirmed",
    time: "42 min ago",
  },
  {
    id: 4,
    type: "user",
    title: "New customer registered",
    description: "Meera Nair created a new account",
    time: "1 hr ago",
  },
  {
    id: 5,
    type: "pending",
    title: "Booking awaiting review",
    description: "A new therapy consultation needs validation",
    time: "2 hrs ago",
  },
  {
    id: 6,
    type: "rejected",
    title: "Booking rejected",
    description: "Requested time slot was unavailable",
    time: "3 hrs ago",
  },
];

const activityStyles: Record<
  ActivityType,
  {
    icon: typeof CalendarCheck;
    className: string;
  }
> = {
  booking: {
    icon: CalendarCheck,
    className: "bg-[#d6b36a]/10 text-[#d6b36a]",
  },
  payment: {
    icon: CreditCard,
    className: "bg-[#7bae8a]/10 text-[#7bae8a]",
  },
  user: {
    icon: UserPlus,
    className: "bg-blue-400/10 text-blue-300",
  },
  confirmed: {
    icon: CheckCircle2,
    className: "bg-[#7bae8a]/10 text-[#7bae8a]",
  },
  rejected: {
    icon: XCircle,
    className: "bg-red-400/10 text-red-300",
  },
  pending: {
    icon: Clock3,
    className: "bg-orange-400/10 text-orange-300",
  },
};

export default function RecentActivity() {
  return (
    <div className="space-y-1">
      {activities.map((activity) => {
        const config = activityStyles[activity.type];
        const Icon = config.icon;

        return (
          <div
            key={activity.id}
            className="group flex gap-3 rounded-xl p-3 transition hover:bg-white/[0.03]"
          >
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${config.className}`}
            >
              <Icon className="h-4 w-4" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-semibold text-[#e8e1d5]">
                  {activity.title}
                </p>

                <span className="shrink-0 text-[10px] text-[#526057]">
                  {activity.time}
                </span>
              </div>

              <p className="mt-1 text-xs leading-5 text-[#66746b]">
                {activity.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}