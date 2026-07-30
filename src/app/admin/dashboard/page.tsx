import Link from "next/link";
import { ArrowUpRight, CalendarCheck, Clock3 } from "lucide-react";

import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";
import AdminStats from "../components/AdminStats";
import AdminCard from "../components/AdminCard";
import RecentActivity from "../components/RecentActivity";
import QuickActions from "../components/QuickActions";

const upcomingBookings = [
  {
    id: "HY-1028",
    customer: "Priya Sharma",
    program: "Yoga Therapy",
    date: "30 Jul 2026",
    time: "10:00 AM",
    status: "Pending",
  },
  {
    id: "HY-1027",
    customer: "Rahul Kumar",
    program: "Stress Management",
    date: "30 Jul 2026",
    time: "04:00 PM",
    status: "Confirmed",
  },
  {
    id: "HY-1026",
    customer: "Ananya Rao",
    program: "Back Pain Relief",
    date: "31 Jul 2026",
    time: "11:30 AM",
    status: "Confirmed",
  },
  {
    id: "HY-1025",
    customer: "Meera Nair",
    program: "Sleep Wellness",
    date: "01 Aug 2026",
    time: "06:00 PM",
    status: "Pending",
  },
];

function statusClasses(status: string) {
  if (status === "Confirmed") {
    return "bg-[#7bae8a]/10 text-[#7bae8a]";
  }

  return "bg-[#d6b36a]/10 text-[#d6b36a]";
}

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-[#050706] text-[#f7efe0]">
      <AdminSidebar />

      <div className="min-h-screen lg:pl-72">
        <AdminHeader />

        <main className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1600px]">
            {/* Welcome */}
            <section className="mb-7">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7bae8a]">
                    Overview
                  </p>

                  <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                    Good evening, Administrator
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[#66746b]">
                    Here's what's happening across your yoga therapy platform
                    today.
                  </p>
                </div>

                <Link
                  href="/admin/bookings"
                  className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#d6b36a] px-4 py-3 text-sm font-bold text-[#050706] transition hover:-translate-y-0.5 hover:bg-[#e1c27d]"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Review Bookings
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </section>

            {/* Statistics */}
            <AdminStats />

            {/* Quick Actions */}
            <section className="mt-6">
              <AdminCard
                title="Quick Actions"
                description="Frequently used administration tools"
              >
                <QuickActions />
              </AdminCard>
            </section>

            {/* Main Dashboard Grid */}
            <section className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
              {/* Upcoming Bookings */}
              <AdminCard
                title="Upcoming Bookings"
                description="Latest scheduled customer sessions"
                action={
                  <Link
                    href="/admin/bookings"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#d6b36a] transition hover:text-[#e1c27d]"
                  >
                    View all
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                }
              >
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[680px] border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 text-left">
                        <th className="pb-3 pr-4 text-[10px] font-bold uppercase tracking-wider text-[#526057]">
                          Booking
                        </th>

                        <th className="pb-3 pr-4 text-[10px] font-bold uppercase tracking-wider text-[#526057]">
                          Customer
                        </th>

                        <th className="pb-3 pr-4 text-[10px] font-bold uppercase tracking-wider text-[#526057]">
                          Program
                        </th>

                        <th className="pb-3 pr-4 text-[10px] font-bold uppercase tracking-wider text-[#526057]">
                          Schedule
                        </th>

                        <th className="pb-3 text-[10px] font-bold uppercase tracking-wider text-[#526057]">
                          Status
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {upcomingBookings.map((booking) => (
                        <tr
                          key={booking.id}
                          className="border-b border-white/5 last:border-0"
                        >
                          <td className="py-4 pr-4">
                            <span className="font-mono text-xs text-[#9aa89f]">
                              {booking.id}
                            </span>
                          </td>

                          <td className="py-4 pr-4">
                            <p className="text-sm font-semibold text-[#e8e1d5]">
                              {booking.customer}
                            </p>
                          </td>

                          <td className="py-4 pr-4">
                            <p className="text-xs text-[#7f8f84]">
                              {booking.program}
                            </p>
                          </td>

                          <td className="py-4 pr-4">
                            <div className="flex items-center gap-2">
                              <Clock3 className="h-3.5 w-3.5 text-[#526057]" />

                              <div>
                                <p className="text-xs text-[#b8c4ba]">
                                  {booking.date}
                                </p>

                                <p className="mt-0.5 text-[10px] text-[#526057]">
                                  {booking.time}
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className="py-4">
                            <span
                              className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold ${statusClasses(
                                booking.status,
                              )}`}
                            >
                              {booking.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </AdminCard>

              {/* Recent Activity */}
              <AdminCard
                title="Recent Activity"
                description="Latest changes across your platform"
                action={
                  <Link
                    href="/admin/notifications"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#d6b36a] transition hover:text-[#e1c27d]"
                  >
                    All activity
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                }
              >
                <RecentActivity />
              </AdminCard>
            </section>

            {/* Bottom Summary */}
            <section className="mt-6 grid gap-6 md:grid-cols-3">
              <AdminCard
                title="Booking Pipeline"
                description="Current booking distribution"
              >
                <div className="space-y-4">
                  <PipelineRow
                    label="Pending Review"
                    value="14"
                    percentage="11%"
                  />

                  <PipelineRow
                    label="Validated"
                    value="8"
                    percentage="6%"
                  />

                  <PipelineRow
                    label="Payment Pending"
                    value="7"
                    percentage="5%"
                  />

                  <PipelineRow
                    label="Confirmed"
                    value="86"
                    percentage="67%"
                  />

                  <PipelineRow
                    label="Completed"
                    value="13"
                    percentage="11%"
                  />
                </div>
              </AdminCard>

              <AdminCard
                title="Today's Schedule"
                description="Sessions scheduled for today"
              >
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-4xl font-black text-[#f7efe0]">08</p>
                    <p className="mt-1 text-xs text-[#66746b]">
                      sessions today
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#7bae8a]/10 px-4 py-3 text-right">
                    <p className="text-lg font-black text-[#7bae8a]">06</p>
                    <p className="text-[10px] text-[#66746b]">confirmed</p>
                  </div>
                </div>

                <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-[75%] rounded-full bg-[#7bae8a]" />
                </div>

                <p className="mt-2 text-[10px] text-[#526057]">
                  75% of today's sessions confirmed
                </p>
              </AdminCard>

              <AdminCard
                title="Customer Growth"
                description="Current customer overview"
              >
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-4xl font-black text-[#f7efe0]">96</p>
                    <p className="mt-1 text-xs text-[#66746b]">
                      active customers
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#d6b36a]/10 px-4 py-3 text-right">
                    <p className="text-lg font-black text-[#d6b36a]">+8.4%</p>
                    <p className="text-[10px] text-[#66746b]">
                      this month
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-end gap-1">
                  {[35, 48, 42, 58, 54, 72, 65, 82, 76, 90, 84, 96].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t bg-[#d6b36a]/40 transition hover:bg-[#d6b36a]"
                        style={{ height: `${height}px` }}
                      />
                    ),
                  )}
                </div>

                <div className="mt-2 flex justify-between text-[10px] text-[#526057]">
                  <span>Jan</span>
                  <span>Jun</span>
                  <span>Jul</span>
                </div>
              </AdminCard>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

function PipelineRow({
  label,
  value,
  percentage,
}: {
  label: string;
  value: string;
  percentage: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs text-[#9aa89f]">{label}</span>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#f7efe0]">{value}</span>
          <span className="text-[10px] text-[#526057]">{percentage}</span>
        </div>
      </div>

      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-[#d6b36a]"
          style={{ width: percentage }}
        />
      </div>
    </div>
  );
}