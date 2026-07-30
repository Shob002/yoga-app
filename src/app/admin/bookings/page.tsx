"use client";

import {
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Eye,
  Filter,
  Loader2,
  Mail,
  Phone,
  RefreshCw,
  Search,
  UserRound,
  XCircle,
} from "lucide-react";
import { useMemo, useState } from "react";

import { api } from "~/trpc/react";

type BookingStatus =
  | "PENDING"
  | "CONFIRMED"
  | "COMPLETED"
  | "CANCELLED";

type FilterStatus = "ALL" | BookingStatus;

type Booking = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  service: string;
  date: string;
  time: string;
  message: string | null;
  createdAt: Date;
  status: BookingStatus;
  zoomJoinUrl: string | null;
  zoomMeetingId: string | null;
  zoomStartUrl: string | null;
};

const statusStyles: Record<BookingStatus, string> = {
  PENDING:
    "border-[#d6b36a]/20 bg-[#d6b36a]/10 text-[#d6b36a]",

  CONFIRMED:
    "border-[#7bae8a]/20 bg-[#7bae8a]/10 text-[#7bae8a]",

  COMPLETED:
    "border-blue-400/20 bg-blue-400/10 text-blue-300",

  CANCELLED:
    "border-red-400/20 bg-red-400/10 text-red-300",
};

const statusLabels: Record<BookingStatus, string> = {
  PENDING: "Pending",
  CONFIRMED: "Confirmed",
  COMPLETED: "Completed",
  CANCELLED: "Cancelled",
};

export default function BookingsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] =
    useState<FilterStatus>("ALL");

  const [selectedBooking, setSelectedBooking] =
    useState<Booking | null>(null);

  const bookingsQuery = api.booking.list.useQuery(undefined, {
    refetchOnWindowFocus: true,
  });

  const utils = api.useUtils();

  const confirmMutation = api.booking.confirm.useMutation({
    onSuccess: async () => {
      setSelectedBooking(null);
      await utils.booking.list.invalidate();
    },

    onError: (error) => {
      alert(`Confirmation failed: ${error.message}`);
    },
  });

  const rejectMutation = api.booking.reject.useMutation({
    onSuccess: async () => {
      setSelectedBooking(null);
      await utils.booking.list.invalidate();
    },

    onError: (error) => {
      alert(`Rejection failed: ${error.message}`);
    },
  });

  const bookings = (bookingsQuery.data ?? []) as Booking[];

  const filteredBookings = useMemo(() => {
    const query = search.trim().toLowerCase();

    return bookings.filter((booking) => {
      const matchesSearch =
        !query ||
        booking.id.toLowerCase().includes(query) ||
        booking.name.toLowerCase().includes(query) ||
        booking.phone.toLowerCase().includes(query) ||
        (booking.email ?? "").toLowerCase().includes(query) ||
        booking.service.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "ALL" ||
        booking.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [bookings, search, statusFilter]);

  const pendingCount = bookings.filter(
    (booking) => booking.status === "PENDING",
  ).length;

  const confirmedCount = bookings.filter(
    (booking) => booking.status === "CONFIRMED",
  ).length;

  const completedCount = bookings.filter(
    (booking) => booking.status === "COMPLETED",
  ).length;

  const cancelledCount = bookings.filter(
    (booking) => booking.status === "CANCELLED",
  ).length;

  const isProcessing =
    confirmMutation.isPending ||
    rejectMutation.isPending;

  function handleConfirm(booking: Booking) {
    const confirmed = window.confirm(
      `Confirm booking for ${booking.name}?\n\nA Zoom meeting will be created and the confirmation email will be sent.`,
    );

    if (!confirmed) {
      return;
    }

    confirmMutation.mutate({
      bookingId: booking.id,
    });
  }

  function handleReject(booking: Booking) {
    const rejected = window.confirm(
      `Reject this booking request from ${booking.name}?`,
    );

    if (!rejected) {
      return;
    }

    rejectMutation.mutate({
      bookingId: booking.id,
    });
  }

  async function refreshBookings() {
    await bookingsQuery.refetch();
  }

  function formatSubmittedDate(
    date: Date | string,
  ) {
    const value = new Date(date);

    if (Number.isNaN(value.getTime())) {
      return "Unknown";
    }

    return value.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <main className="min-h-screen bg-[#050706] px-4 py-6 text-[#f7efe0] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1600px]">

        {/* HEADER */}
        <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7bae8a]">
              Administration
            </p>

            <h1 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
              Booking Management
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#66746b]">
              Review real customer booking requests, confirm
              sessions, create Zoom meetings and manage booking
              status.
            </p>
          </div>

          <button
            type="button"
            onClick={refreshBookings}
            disabled={bookingsQuery.isFetching}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-bold text-[#b8c4ba] transition hover:border-[#d6b36a]/30 hover:text-[#d6b36a] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <RefreshCw
              className={`h-4 w-4 ${
                bookingsQuery.isFetching
                  ? "animate-spin"
                  : ""
              }`}
            />

            Refresh
          </button>
        </div>

        {/* WAITING BANNER */}
        <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-[#d6b36a]/20 bg-[#d6b36a]/5 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d6b36a]/10">
              <CalendarCheck className="h-5 w-5 text-[#d6b36a]" />
            </div>

            <div>
              <p className="text-sm font-bold text-[#f7efe0]">
                {pendingCount} booking
                {pendingCount === 1 ? "" : "s"} awaiting review
              </p>

              <p className="mt-1 text-xs text-[#66746b]">
                Pending requests are waiting for your approval.
              </p>
            </div>
          </div>

          {pendingCount > 0 && (
            <span className="rounded-full bg-[#d6b36a]/10 px-3 py-1.5 text-xs font-bold text-[#d6b36a]">
              Action Required
            </span>
          )}
        </div>

        {/* SUMMARY CARDS */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <SummaryCard
            title="Pending"
            value={pendingCount}
            icon={Clock3}
            iconClass="bg-[#d6b36a]/10 text-[#d6b36a]"
          />

          <SummaryCard
            title="Confirmed"
            value={confirmedCount}
            icon={CheckCircle2}
            iconClass="bg-[#7bae8a]/10 text-[#7bae8a]"
          />

          <SummaryCard
            title="Completed"
            value={completedCount}
            icon={CalendarCheck}
            iconClass="bg-blue-400/10 text-blue-300"
          />

          <SummaryCard
            title="Cancelled"
            value={cancelledCount}
            icon={XCircle}
            iconClass="bg-red-400/10 text-red-300"
          />

        </div>

        {/* MAIN BOOKINGS CARD */}
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b100d]">

          {/* TOOLBAR */}
          <div className="border-b border-white/10 p-4 sm:p-5">

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              {/* SEARCH */}
              <div className="relative w-full lg:max-w-md">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#526057]" />

                <input
                  type="search"
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search customer, phone, email or service..."
                  className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.03] pl-10 pr-4 text-sm text-[#f7efe0] outline-none placeholder:text-[#526057] focus:border-[#d6b36a]/40"
                />
              </div>

              {/* FILTER */}
              <div className="flex flex-wrap items-center gap-2">

                <div className="mr-1 flex items-center gap-2 text-xs text-[#66746b]">
                  <Filter className="h-3.5 w-3.5" />
                  Status
                </div>

                {(
                  [
                    "ALL",
                    "PENDING",
                    "CONFIRMED",
                    "COMPLETED",
                    "CANCELLED",
                  ] as const
                ).map((status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() =>
                      setStatusFilter(status)
                    }
                    className={`rounded-lg px-3 py-2 text-xs font-bold transition ${
                      statusFilter === status
                        ? "bg-[#d6b36a] text-[#050706]"
                        : "border border-white/10 bg-white/[0.03] text-[#8f9c94] hover:border-[#d6b36a]/30 hover:text-[#d6b36a]"
                    }`}
                  >
                    {status === "ALL"
                      ? "All"
                      : statusLabels[status]}
                  </button>
                ))}

              </div>

            </div>

          </div>

          {/* LOADING */}
          {bookingsQuery.isLoading && (
            <div className="flex min-h-[300px] items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <Loader2 className="h-7 w-7 animate-spin text-[#d6b36a]" />

                <p className="text-sm text-[#66746b]">
                  Loading bookings...
                </p>
              </div>
            </div>
          )}

          {/* ERROR */}
          {bookingsQuery.isError && (
            <div className="p-8">
              <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-6 text-center">
                <XCircle className="mx-auto h-8 w-8 text-red-300" />

                <h2 className="mt-3 text-sm font-bold text-red-200">
                  Unable to load bookings
                </h2>

                <p className="mt-2 text-xs text-red-300/70">
                  {bookingsQuery.error.message}
                </p>

                <button
                  type="button"
                  onClick={refreshBookings}
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#d6b36a] px-4 py-2.5 text-xs font-bold text-[#050706]"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  Try Again
                </button>
              </div>
            </div>
          )}

          {/* TABLE */}
          {!bookingsQuery.isLoading &&
            !bookingsQuery.isError && (
              <>
                <div className="overflow-x-auto">

                  <table className="w-full min-w-[1100px] border-collapse">

                    <thead>
                      <tr className="border-b border-white/10 text-left">

                        <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-wider text-[#526057]">
                          Booking
                        </th>

                        <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-wider text-[#526057]">
                          Customer
                        </th>

                        <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-wider text-[#526057]">
                          Therapy
                        </th>

                        <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-wider text-[#526057]">
                          Schedule
                        </th>

                        <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-wider text-[#526057]">
                          Status
                        </th>

                        <th className="px-5 py-4 text-right text-[10px] font-bold uppercase tracking-wider text-[#526057]">
                          Action
                        </th>

                      </tr>
                    </thead>

                    <tbody>

                      {filteredBookings.length === 0 ? (
                        <tr>
                          <td
                            colSpan={6}
                            className="px-5 py-20 text-center"
                          >
                            <CalendarCheck className="mx-auto h-9 w-9 text-[#526057]" />

                            <p className="mt-4 text-sm font-semibold text-[#9aa89f]">
                              No bookings found
                            </p>

                            <p className="mt-1 text-xs text-[#526057]">
                              {bookings.length === 0
                                ? "Customer booking requests will appear here."
                                : "Try changing your search or status filter."}
                            </p>
                          </td>
                        </tr>
                      ) : (
                        filteredBookings.map(
                          (booking) => (
                            <tr
                              key={booking.id}
                              className="border-b border-white/5 transition hover:bg-white/[0.02]"
                            >

                              {/* BOOKING */}
                              <td className="px-5 py-4">

                                <span className="font-mono text-xs font-semibold text-[#b8c4ba]">
                                  {booking.id.slice(0, 12)}
                                </span>

                                <p className="mt-1 text-[10px] text-[#526057]">
                                  {formatSubmittedDate(
                                    booking.createdAt,
                                  )}
                                </p>

                              </td>

                              {/* CUSTOMER */}
                              <td className="px-5 py-4">

                                <div className="flex items-center gap-3">

                                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d6b36a]/10">
                                    <UserRound className="h-4 w-4 text-[#d6b36a]" />
                                  </div>

                                  <div>
                                    <p className="text-sm font-semibold text-[#e8e1d5]">
                                      {booking.name}
                                    </p>

                                    <p className="mt-1 text-[10px] text-[#526057]">
                                      {booking.email ??
                                        "No email provided"}
                                    </p>
                                  </div>

                                </div>

                              </td>

                              {/* SERVICE */}
                              <td className="px-5 py-4">

                                <span className="text-xs font-semibold text-[#b8c4ba]">
                                  {booking.service}
                                </span>

                                {booking.message && (
                                  <p className="mt-1 max-w-[220px] truncate text-[10px] text-[#526057]">
                                    {booking.message}
                                  </p>
                                )}

                              </td>

                              {/* SCHEDULE */}
                              <td className="px-5 py-4">

                                <p className="text-xs font-semibold text-[#b8c4ba]">
                                  {booking.date}
                                </p>

                                <p className="mt-1 text-[10px] text-[#526057]">
                                  {booking.time}
                                </p>

                              </td>

                              {/* STATUS */}
                              <td className="px-5 py-4">

                                <span
                                  className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold ${
                                    statusStyles[
                                      booking.status
                                    ]
                                  }`}
                                >
                                  {
                                    statusLabels[
                                      booking.status
                                    ]
                                  }
                                </span>

                              </td>

                              {/* ACTION */}
                              <td className="px-5 py-4 text-right">

                                <button
                                  type="button"
                                  onClick={() =>
                                    setSelectedBooking(
                                      booking,
                                    )
                                  }
                                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-bold text-[#b8c4ba] transition hover:border-[#d6b36a]/30 hover:text-[#d6b36a]"
                                >
                                  <Eye className="h-3.5 w-3.5" />
                                  Review
                                </button>

                              </td>

                            </tr>
                          ),
                        )
                      )}

                    </tbody>

                  </table>

                </div>

                {/* FOOTER */}
                <div className="border-t border-white/10 px-5 py-4">

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-xs text-[#526057]">
                      Showing{" "}
                      <span className="font-semibold text-[#9aa89f]">
                        {filteredBookings.length}
                      </span>{" "}
                      of{" "}
                      <span className="font-semibold text-[#9aa89f]">
                        {bookings.length}
                      </span>{" "}
                      bookings
                    </p>

                    <p className="text-[10px] text-[#526057]">
                      Data loaded from PostgreSQL
                    </p>

                  </div>

                </div>

              </>
            )}

        </section>
      </div>

      {/* REVIEW MODAL */}
      {selectedBooking && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedBooking(null);
            }
          }}
        >

          <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0b100d] shadow-2xl">

            {/* MODAL HEADER */}
            <div className="sticky top-0 z-10 flex items-start justify-between border-b border-white/10 bg-[#0b100d] p-5">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-wider text-[#7bae8a]">
                  Booking Review
                </p>

                <h2 className="mt-1 text-xl font-black text-[#f7efe0]">
                  Customer Request
                </h2>

                <p className="mt-1 font-mono text-[10px] text-[#526057]">
                  {selectedBooking.id}
                </p>

              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedBooking(null)
                }
                className="rounded-lg p-2 text-[#66746b] transition hover:bg-white/5 hover:text-[#f7efe0]"
                aria-label="Close booking review"
              >
                <XCircle className="h-5 w-5" />
              </button>

            </div>

            {/* CUSTOMER */}
            <div className="border-b border-white/10 p-5">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d6b36a]/10">
                  <UserRound className="h-6 w-6 text-[#d6b36a]" />
                </div>

                <div>

                  <h3 className="text-lg font-black text-[#f7efe0]">
                    {selectedBooking.name}
                  </h3>

                  <p className="mt-1 text-xs text-[#66746b]">
                    {selectedBooking.service}
                  </p>

                </div>

              </div>

            </div>

            {/* DETAILS */}
            <div className="space-y-5 p-5">

              <DetailRow
                label="Email"
                value={
                  selectedBooking.email ??
                  "Not provided"
                }
                icon={<Mail className="h-4 w-4" />}
              />

              <DetailRow
                label="Phone"
                value={selectedBooking.phone}
                icon={<Phone className="h-4 w-4" />}
              />

              <DetailRow
                label="Therapy"
                value={selectedBooking.service}
                icon={
                  <CalendarCheck className="h-4 w-4" />
                }
              />

              <DetailRow
                label="Date"
                value={selectedBooking.date}
                icon={
                  <CalendarCheck className="h-4 w-4" />
                }
              />

              <DetailRow
                label="Time"
                value={selectedBooking.time}
                icon={
                  <Clock3 className="h-4 w-4" />
                }
              />

              <DetailRow
                label="Submitted"
                value={formatSubmittedDate(
                  selectedBooking.createdAt,
                )}
                icon={
                  <Clock3 className="h-4 w-4" />
                }
              />

              {/* MESSAGE */}
              <div className="border-t border-white/10 pt-5">

                <p className="text-[10px] font-bold uppercase tracking-wider text-[#526057]">
                  Symptoms / Goal
                </p>

                <div className="mt-2 rounded-xl border border-white/10 bg-white/[0.02] p-4">

                  <p className="whitespace-pre-wrap text-sm leading-6 text-[#b8c4ba]">
                    {selectedBooking.message ||
                      "No symptoms or goal provided."}
                  </p>

                </div>

              </div>

              {/* STATUS */}
              <div className="flex items-center justify-between border-t border-white/10 pt-5">

                <span className="text-xs text-[#66746b]">
                  Current Status
                </span>

                <span
                  className={`rounded-full border px-3 py-1.5 text-[10px] font-bold ${
                    statusStyles[
                      selectedBooking.status
                    ]
                  }`}
                >
                  {
                    statusLabels[
                      selectedBooking.status
                    ]
                  }
                </span>

              </div>

              {/* ZOOM */}
              {selectedBooking.zoomJoinUrl && (
                <div className="rounded-xl border border-[#7bae8a]/20 bg-[#7bae8a]/5 p-4">

                  <div className="flex items-center gap-2">

                    <CheckCircle2 className="h-4 w-4 text-[#7bae8a]" />

                    <p className="text-xs font-bold text-[#7bae8a]">
                      Zoom Session Created
                    </p>

                  </div>

                  <a
                    href={
                      selectedBooking.zoomJoinUrl
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block break-all text-xs leading-5 text-blue-300 underline underline-offset-2"
                  >
                    {selectedBooking.zoomJoinUrl}
                  </a>

                </div>
              )}

            </div>

            {/* ACTIONS */}
            {selectedBooking.status === "PENDING" && (
              <div className="grid grid-cols-2 gap-3 border-t border-white/10 p-5">

                <button
                  type="button"
                  onClick={() =>
                    handleReject(selectedBooking)
                  }
                  disabled={isProcessing}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-xs font-bold text-red-300 transition hover:bg-red-400/10 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {rejectMutation.isPending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <XCircle className="h-4 w-4" />
                  )}

                  {rejectMutation.isPending
                    ? "Rejecting..."
                    : "Reject"}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleConfirm(selectedBooking)
                  }
                  disabled={isProcessing}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7bae8a] px-4 py-3 text-xs font-bold text-[#050706] transition hover:bg-[#8cbe9a] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {confirmMutation.isPending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <CheckCircle2 className="h-4 w-4" />
                  )}

                  {confirmMutation.isPending
                    ? "Creating Zoom..."
                    : "Confirm Booking"}
                </button>

              </div>
            )}

            {/* CONFIRMED FOOTER */}
            {selectedBooking.status ===
              "CONFIRMED" && (
              <div className="border-t border-white/10 p-5">

                <div className="rounded-xl border border-[#7bae8a]/20 bg-[#7bae8a]/5 p-4 text-center">

                  <CheckCircle2 className="mx-auto h-6 w-6 text-[#7bae8a]" />

                  <p className="mt-2 text-sm font-bold text-[#7bae8a]">
                    Booking Confirmed
                  </p>

                  <p className="mt-1 text-xs text-[#66746b]">
                    Zoom details have been generated.
                  </p>

                </div>

              </div>
            )}

          </div>

        </div>
      )}

    </main>
  );
}

function SummaryCard({
  title,
  value,
  icon: Icon,
  iconClass,
}: {
  title: string;
  value: number;
  icon: typeof Clock3;
  iconClass: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b100d] p-5">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs text-[#66746b]">
            {title}
          </p>

          <p className="mt-2 text-2xl font-black text-[#f7efe0]">
            {value}
          </p>

        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconClass}`}
        >
          <Icon className="h-5 w-5" />
        </div>

      </div>

    </div>
  );
}

function DetailRow({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">

      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.03] text-[#d6b36a]">
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-[10px] font-bold uppercase tracking-wider text-[#526057]">
          {label}
        </p>

        <p className="mt-1 break-words text-sm font-semibold text-[#e8e1d5]">
          {value}
        </p>

      </div>

    </div>
  );
}