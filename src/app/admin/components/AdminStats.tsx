import {
  CalendarCheck,
  Clock3,
  IndianRupee,
  Users,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

type Stat = {
  title: string;
  value: string;
  change: string;
  description: string;
  icon: typeof CalendarCheck;
  trend: "up" | "down";
};

const stats: Stat[] = [
  {
    title: "Total Bookings",
    value: "128",
    change: "+12.5%",
    description: "vs. last month",
    icon: CalendarCheck,
    trend: "up",
  },
  {
    title: "Pending Bookings",
    value: "14",
    change: "+4",
    description: "awaiting review",
    icon: Clock3,
    trend: "up",
  },
  {
    title: "Total Revenue",
    value: "₹1,84,500",
    change: "+18.2%",
    description: "vs. last month",
    icon: IndianRupee,
    trend: "up",
  },
  {
    title: "Active Customers",
    value: "96",
    change: "+8.4%",
    description: "vs. last month",
    icon: Users,
    trend: "up",
  },
];

export default function AdminStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const isPositive = stat.trend === "up";

        return (
          <div
            key={stat.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b100d] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#d6b36a]/30 hover:shadow-2xl hover:shadow-black/20"
          >
            {/* Decorative Glow */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#d6b36a]/5 blur-2xl transition group-hover:bg-[#d6b36a]/10" />

            <div className="relative">
              {/* Top */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-[#7f8f84]">
                    {stat.title}
                  </p>

                  <p className="mt-2 text-2xl font-black tracking-tight text-[#f7efe0]">
                    {stat.value}
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d6b36a]/10 bg-[#d6b36a]/5">
                  <Icon className="h-5 w-5 text-[#d6b36a]" />
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-5 flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-bold ${
                    isPositive
                      ? "bg-[#7bae8a]/10 text-[#7bae8a]"
                      : "bg-red-400/10 text-red-300"
                  }`}
                >
                  {isPositive ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}

                  {stat.change}
                </span>

                <span className="text-[10px] text-[#526057]">
                  {stat.description}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}