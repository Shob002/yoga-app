"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      password,
      redirect: true,
      callbackUrl: "/admin",
    });

    if (res?.error) {
      setError("Invalid admin password");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-100 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
          Yoga Admin
        </p>

        <h1 className="mt-3 text-3xl font-bold text-slate-900">
          Admin Login
        </h1>

        <p className="mt-2 text-sm text-slate-600">
          Manage yoga classes, bookings, therapy modules, and website content.
        </p>

        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-6 w-full rounded-2xl border border-green-200 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />

        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          className="mt-6 w-full rounded-2xl bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
        >
          Login
        </button>
      </form>
    </main>
  );
}