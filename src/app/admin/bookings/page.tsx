import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { api } from "~/trpc/server";
import DeleteBookingButton from "./DeleteBookingButton";
import StatusSelect from "./StatusSelect";

const statusColor = {
  PENDING: "bg-yellow-100 text-yellow-800",
  CONFIRMED: "bg-blue-100 text-blue-800",
  COMPLETED: "bg-green-100 text-green-800",
  CANCELLED: "bg-red-100 text-red-800",
};

export default async function AdminBookingsPage() {
  const session = await auth();

  if (!session || session.user.role !== "ADMIN") {
    redirect("/admin/login");
  }

  const bookings = await api.booking.getAll();

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-3xl font-bold text-slate-900">
          Booking Requests
        </h1>

        {bookings.length === 0 ? (
          <p className="rounded-xl bg-white p-6 text-slate-600 shadow">
            No bookings yet.
          </p>
        ) : (
          <div className="grid gap-4">
            {bookings.map((b) => (
              <div key={b.id} className="rounded-2xl bg-white p-5 shadow">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-green-800">
                      {b.name}
                    </h2>
                    <p className="text-sm text-slate-600">{b.service}</p>
                  </div>

                  <div className="flex flex-col items-start gap-2 md:items-end">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        statusColor[b.status]
                      }`}
                    >
                      {b.status}
                    </span>

                    <p className="text-sm text-slate-500">
                      {new Date(b.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
                  <p>
                    <b>Phone:</b> {b.phone}
                  </p>
                  <p>
                    <b>Email:</b> {b.email || "Not provided"}
                  </p>
                  <p className="md:col-span-2">
                    <b>Message:</b> {b.message || "No message"}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <StatusSelect id={b.id} status={b.status} />
                  <DeleteBookingButton id={b.id} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}