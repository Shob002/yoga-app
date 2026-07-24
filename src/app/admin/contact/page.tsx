import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function AdminContactPage() {
  const session = await auth();

  if (!session || session.user.role !== "ADMIN") {
    redirect("/admin/login");
  }

  const messages = await api.contact.getAll();

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-3xl font-bold text-slate-900">
          Contact Messages
        </h1>

        {messages.length === 0 ? (
          <p className="rounded-xl bg-white p-6 text-slate-600 shadow">
            No contact messages yet.
          </p>
        ) : (
          <div className="grid gap-4">
            {messages.map((m) => (
              <div key={m.id} className="rounded-2xl bg-white p-5 shadow">
                <div className="flex flex-col gap-2 md:flex-row md:justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-green-800">
                      {m.name}
                    </h2>
                    <p className="text-sm text-slate-600">
                      {m.email || "No email"}
                    </p>
                  </div>

                  <p className="text-sm text-slate-500">
                    {new Date(m.createdAt).toLocaleString()}
                  </p>
                </div>

                <div className="mt-4 grid gap-2 text-sm text-slate-700">
                  <p>
                    <b>Phone:</b> {m.phone || "Not provided"}
                  </p>
                  <p>
                    <b>Message:</b> {m.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
