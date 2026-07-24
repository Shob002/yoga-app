import Link from "next/link";
import { redirect } from "next/navigation";
import { auth, signOut } from "~/server/auth";

const cards = [
  {
    title: "Bookings",
    desc: "Manage yoga class bookings",
    href: "/admin/bookings",
  },
  {
    title: "Contact Messages",
    desc: "View user enquiries",
    href: "/admin/contact",
  },
  {
    title: "Yoga Modules",
    desc: "Add therapy programs",
  },
  {
    title: "Content",
    desc: "Update website content",
  },
];

export default async function AdminPage() {
  const session = await auth();

  if (!session || session.user.role !== "ADMIN") {
    redirect("/admin/login");
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-green-50 via-white to-emerald-100 p-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-green-700">
              Yoga Admin
            </p>
            <h1 className="text-3xl font-bold text-slate-900">
              Dashboard
            </h1>
          </div>

          {/* Logout */}
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/admin/login" });
            }}
          >
            <button className="rounded-xl bg-red-500 px-4 py-2 text-white hover:bg-red-600">
              Logout
            </button>
          </form>
        </div>

        {/* Welcome */}
        <p className="mt-4 text-slate-600">
          Welcome, {session.user.name || "Admin"} 👋
        </p>

        {/* Cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {cards.map((card) =>
            card.href ? (
              <Link
                key={card.title}
                href={card.href}
                className="rounded-2xl bg-white p-5 shadow transition hover:shadow-md"
              >
                <h2 className="text-lg font-semibold text-green-700">
                  {card.title}
                </h2>
                <p className="text-sm text-slate-600">
                  {card.desc}
                </p>
              </Link>
            ) : (
              <div
                key={card.title}
                className="rounded-2xl bg-white p-5 shadow"
              >
                <h2 className="text-lg font-semibold text-green-700">
                  {card.title}
                </h2>
                <p className="text-sm text-slate-600">
                  {card.desc}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}