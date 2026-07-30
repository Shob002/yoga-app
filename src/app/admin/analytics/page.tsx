"use client";

import {
  Activity,
  CalendarCheck,
  CalendarDays,
  CheckCircle2,
  Clock3,
  TrendingUp,
  UsersRound,
  XCircle,
} from "lucide-react";
import { useMemo } from "react";

import { api } from "~/trpc/react";

type BookingStatus =
  | "PENDING"
  | "CONFIRMED"
  | "COMPLETED"
  | "CANCELLED";

type Booking = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  service: string;
  date: string;
  time: string;
  message: string | null;
  createdAt: Date | string;
  status: BookingStatus;
  zoomJoinUrl: string | null;
  zoomMeetingId: string | null;
  zoomStartUrl: string | null;
};

export default function AnalyticsPage() {
  const bookingsQuery = api.booking.list.useQuery(undefined, {
    refetchOnWindowFocus: true,
  });

  const bookings = (bookingsQuery.data ?? []) as Booking[];

  const analytics = useMemo(() => {
    const total = bookings.length;

    const pending = bookings.filter(
      (booking) => booking.status === "PENDING",
    ).length;

    const confirmed = bookings.filter(
      (booking) => booking.status === "CONFIRMED",
    ).length;

    const completed = bookings.filter(
      (booking) => booking.status === "COMPLETED",
    ).length;

    const cancelled = bookings.filter(
      (booking) => booking.status === "CANCELLED",
    ).length;

    const uniqueCustomers = new Set(
      bookings
        .map((booking) => booking.email || booking.phone)
        .filter(Boolean),
    ).size;

    const today = new Date();

    const todayBookings = bookings.filter((booking) => {
      const bookingDate = parseBookingDate(booking.date);

      if (!bookingDate) {
        return false;
      }

      return (
        bookingDate.getFullYear() === today.getFullYear() &&
        bookingDate.getMonth() === today.getMonth() &&
        bookingDate.getDate() === today.getDate()
      );
    }).length;

    const upcomingBookings = bookings.filter((booking) => {
      const bookingDate = parseBookingDate(booking.date);

      if (!bookingDate) {
        return false;
      }

      const startOfToday = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
      );

      return (
        bookingDate >= startOfToday &&
        booking.status !== "CANCELLED"
      );
    }).length;

    const confirmationRate =
      total > 0 ? Math.round((confirmed / total) * 100) : 0;

    const cancellationRate =
      total > 0 ? Math.round((cancelled / total) * 100) : 0;

    const serviceCounts = bookings.reduce<Record<string, number>>(
      (result, booking) => {
        result[booking.service] =
          (result[booking.service] ?? 0) + 1;

        return result;
      },
      {},
    );

    const popularServices = Object.entries(serviceCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5);

    const recentBookings = [...bookings]
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime(),
      )
      .slice(0, 6);

    return {
      total,
      pending,
      confirmed,
      completed,
      cancelled,
      uniqueCustomers,
      todayBookings,
      upcomingBookings,
      confirmationRate,
      cancellationRate,
      popularServices,
      recentBookings,
    };
  }, [bookings]);

  if (bookingsQuery.isLoading) {
    return (
      <main className="min-h-screen bg-[#050706] px-4 py-6 text-[#f7efe0] sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[500px] max-w-[1600px] items-center justify-center">
          <div className="text-center">
            <Activity className="mx-auto h-8 w-8 animate-pulse text-[#d6b36a]" />

            <p className="mt-4 text-sm font-semibold text-[#b8c4ba]">
              Loading analytics...
            </p>

            <p className="mt-1 text-xs text-[#526057]">
              Reading booking data from PostgreSQL.
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (bookingsQuery.isError) {
    return (
      <main className="min-h-screen bg-[#050706] px-4 py-6 text-[#f7efe0] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="rounded-3xl border border-red-400/20 bg-[#0b100d] p-8 text-center">
            <XCircle className="mx-auto h-9 w-9 text-red-300" />

            <h1 className="mt-4 text-lg font-black text-red-200">
              Unable to load analytics
            </h1>

            <p className="mt-2 text-sm text-red-300/70">
              {bookingsQuery.error.message}
            </p>

            <button
              type="button"
              onClick={() => bookingsQuery.refetch()}
              className="mt-5 rounded-xl bg-[#d6b36a] px-5 py-3 text-xs font-bold text-[#050706]"
            >
              Try Again
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050706] px-4 py-6 text-[#f7efe0] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1600px]">
        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#7bae8a]">
              Administration
            </p>

            <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Analytics
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#66746b]">
              Monitor booking activity, customer demand and
              therapy performance using your live booking data.
            </p>
          </div>

          <button
            type="button"
            onClick={() => bookingsQuery.refetch()}
            disabled={bookingsQuery.isFetching}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-bold text-[#b8c4ba] transition hover:border-[#d6b36a]/30 hover:text-[#d6b36a] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Activity
              className={`h-4 w-4 ${
                bookingsQuery.isFetching ? "animate-spin" : ""
              }`}
            />

            Refresh Data
          </button>
        </div>

        {/* PRIMARY METRICS */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            title="Total Bookings"
            value={analytics.total}
            description="All booking requests"
            icon={CalendarCheck}
            iconClass="bg-[#d6b36a]/10 text-[#d6b36a]"
          />

          <MetricCard
            title="Pending"
            value={analytics.pending}
            description="Awaiting review"
            icon={Clock3}
            iconClass="bg-[#d6b36a]/10 text-[#d6b36a]"
          />

          <MetricCard
            title="Confirmed"
            value={analytics.confirmed}
            description={`${analytics.confirmationRate}% confirmation rate`}
            icon={CheckCircle2}
            iconClass="bg-[#7bae8a]/10 text-[#7bae8a]"
          />

          <MetricCard
            title="Customers"
            value={analytics.uniqueCustomers}
            description="Unique customers"
            icon={UsersRound}
            iconClass="bg-blue-400/10 text-blue-300"
          />
        </div>

        {/* SECONDARY METRICS */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <SmallMetric
            title="Today's Bookings"
            value={analytics.todayBookings}
            icon={CalendarDays}
          />

          <SmallMetric
            title="Upcoming"
            value={analytics.upcomingBookings}
            icon={TrendingUp}
          />

          <SmallMetric
            title="Completed"
            value={analytics.completed}
            icon={CheckCircle2}
          />

          <SmallMetric
            title="Cancelled"
            value={analytics.cancelled}
            icon={XCircle}
          />
        </div>

        {/* MAIN ANALYTICS */}
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          {/* BOOKING STATUS */}
          <section className="rounded-3xl border border-white/10 bg-[#0b100d] p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#526057]">
                  Booking Overview
                </p>

                <h2 className="mt-2 text-xl font-black text-[#f7efe0]">
                  Booking status
                </h2>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d6b36a]/10">
                <Activity className="h-5 w-5 text-[#d6b36a]" />
              </div>
            </div>

            <div className="mt-7 space-y-5">
              <StatusBar
                label="Pending"
                value={analytics.pending}
                total={analytics.total}
                description="Awaiting admin review"
                barClass="bg-[#d6b36a]"
              />

              <StatusBar
                label="Confirmed"
                value={analytics.confirmed}
                total={analytics.total}
                description="Sessions approved"
                barClass="bg-[#7bae8a]"
              />

              <StatusBar
                label="Completed"
                value={analytics.completed}
                total={analytics.total}
                description="Sessions completed"
                barClass="bg-blue-400"
              />

              <StatusBar
                label="Cancelled"
                value={analytics.cancelled}
                total={analytics.total}
                description="Cancelled requests"
                barClass="bg-red-400"
              />
            </div>

            <div className="mt-7 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <p className="text-xs text-[#66746b]">
                  Confirmation Rate
                </p>

                <p className="mt-2 text-2xl font-black text-[#7bae8a]">
                  {analytics.confirmationRate}%
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <p className="text-xs text-[#66746b]">
                  Cancellation Rate
                </p>

                <p className="mt-2 text-2xl font-black text-red-300">
                  {analytics.cancellationRate}%
                </p>
              </div>
            </div>
          </section>

          {/* POPULAR SERVICES */}
          <section className="rounded-3xl border border-white/10 bg-[#0b100d] p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#526057]">
                  Customer Demand
                </p>

                <h2 className="mt-2 text-xl font-black text-[#f7efe0]">
                  Popular therapies
                </h2>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7bae8a]/10">
                <TrendingUp className="h-5 w-5 text-[#7bae8a]" />
              </div>
            </div>

            {analytics.popularServices.length === 0 ? (
              <div className="flex min-h-[250px] items-center justify-center text-center">
                <div>
                  <CalendarCheck className="mx-auto h-8 w-8 text-[#526057]" />

                  <p className="mt-3 text-sm font-semibold text-[#9aa89f]">
                    No therapy data yet
                  </p>

                  <p className="mt-1 text-xs text-[#526057]">
                    Services will appear here after bookings are
                    submitted.
                  </p>
                </div>
              </div>
            ) : (
              <div className="mt-7 space-y-5">
                {analytics.popularServices.map(
                  ([service, count], index) => {
                    const percentage =
                      analytics.total > 0
                        ? Math.round(
                            (count / analytics.total) * 100,
                          )
                        : 0;

                    return (
                      <div key={service}>
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex min-w-0 items-center gap-3">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] font-mono text-[10px] font-bold text-[#d6b36a]">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="truncate text-xs font-semibold text-[#b8c4ba]">
                              {service}
                            </span>
                          </div>

                          <span className="shrink-0 text-xs font-bold text-[#f7efe0]">
                            {count}
                          </span>
                        </div>

                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                          <div
                            className="h-full rounded-full bg-[#7bae8a] transition-all"
                            style={{
                              width: `${percentage}%`,
                            }}
                          />
                        </div>

                        <p className="mt-1 text-right text-[10px] text-[#526057]">
                          {percentage}% of bookings
                        </p>
                      </div>
                    );
                  },
                )}
              </div>
            )}
          </section>
        </div>

        {/* RECENT BOOKINGS */}
        <section className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-[#0b100d] shadow-2xl">
          <div className="flex flex-col gap-3 border-b border-white/10 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#526057]">
                Live Data
              </p>

              <h2 className="mt-2 text-xl font-black text-[#f7efe0]">
                Recent bookings
              </h2>
            </div>

            <p className="text-xs text-[#526057]">
              Latest customer requests
            </p>
          </div>

          {analytics.recentBookings.length === 0 ? (
            <div className="px-6 py-20 text-center">
              <CalendarCheck className="mx-auto h-9 w-9 text-[#526057]" />

              <p className="mt-4 text-sm font-semibold text-[#9aa89f]">
                No bookings yet
              </p>

              <p className="mt-1 text-xs text-[#526057]">
                New customer booking requests will appear here.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px] border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-left">
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[#526057]">
                      Customer
                    </th>

                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[#526057]">
                      Therapy
                    </th>

                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[#526057]">
                      Date
                    </th>

                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[#526057]">
                      Time
                    </th>

                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[#526057]">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {analytics.recentBookings.map((booking) => (
                    <tr
                      key={booking.id}
                      className="border-b border-white/5 transition hover:bg-white/[0.02]"
                    >
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-[#e8e1d5]">
                          {booking.name}
                        </p>

                        <p className="mt-1 text-[10px] text-[#526057]">
                          {booking.email ?? booking.phone}
                        </p>
                      </td>

                      <td className="px-6 py-4">
                        <span className="text-xs text-[#b8c4ba]">
                          {booking.service}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <span className="text-xs font-semibold text-[#b8c4ba]">
                          {booking.date}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <span className="text-xs text-[#66746b]">
                          {booking.time}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <StatusBadge status={booking.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* DATABASE FOOTER */}
        <div className="mt-5 flex flex-col gap-2 text-[10px] text-[#526057] sm:flex-row sm:items-center sm:justify-between">
          <p>
            Analytics calculated from live booking records.
          </p>

          <p>Data source: PostgreSQL via tRPC + Prisma</p>
        </div>
      </div>
    </main>
  );
}

function MetricCard({
  title,
  value,
  description,
  icon: Icon,
  iconClass,
}: {
  title: string;
  value: number;
  description: string;
  icon: typeof CalendarCheck;
  iconClass: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0b100d] p-5 shadow-xl transition hover:border-[#d6b36a]/20">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium text-[#66746b]">
            {title}
          </p>

          <p className="mt-2 text-3xl font-black text-[#f7efe0]">
            {value}
          </p>

          <p className="mt-2 text-[10px] text-[#526057]">
            {description}
          </p>
        </div>

        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconClass}`}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

function SmallMetric({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: number;
  icon: typeof CalendarDays;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0b100d] p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.03] text-[#d6b36a]">
        <Icon className="h-4 w-4" />
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-wider text-[#526057]">
          {title}
        </p>

        <p className="mt-1 text-xl font-black text-[#f7efe0]">
          {value}
        </p>
      </div>
    </div>
  );
}

function StatusBar({
  label,
  value,
  total,
  description,
  barClass,
}: {
  label: string;
  value: number;
  total: number;
  description: string;
  barClass: string;
}) {
  const percentage =
    total > 0 ? Math.round((value / total) * 100) : 0;

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold text-[#b8c4ba]">
            {label}
          </p>

          <p className="mt-1 text-[10px] text-[#526057]">
            {description}
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm font-black text-[#f7efe0]">
            {value}
          </p>

          <p className="text-[10px] text-[#526057]">
            {percentage}%
          </p>
        </div>
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
        <div
          className={`h-full rounded-full transition-all ${barClass}`}
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: BookingStatus;
}) {
  const styles: Record<BookingStatus, string> = {
    PENDING:
      "border-[#d6b36a]/20 bg-[#d6b36a]/10 text-[#d6b36a]",
    CONFIRMED:
      "border-[#7bae8a]/20 bg-[#7bae8a]/10 text-[#7bae8a]",
    COMPLETED:
      "border-blue-400/20 bg-blue-400/10 text-blue-300",
    CANCELLED:
      "border-red-400/20 bg-red-400/10 text-red-300",
  };

  const labels: Record<BookingStatus, string> = {
    PENDING: "Pending",
    CONFIRMED: "Confirmed",
    COMPLETED: "Completed",
    CANCELLED: "Cancelled",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}

function parseBookingDate(
  value: string,
): Date | null {
  const parsed = new Date(value);

  if (!Number.isNaN(parsed.getTime())) {
    return parsed;
  }

  const match = value.match(
    /^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/,
  );

  if (!match) {
    return null;
  }

  const day = Number(match[1]);
  const month = Number(match[2]) - 1;
  const year = Number(match[3]);

  const result = new Date(year, month, day);

  if (
    result.getFullYear() !== year ||
    result.getMonth() !== month ||
    result.getDate() !== day
  ) {
    return null;
  }

  return result;
}