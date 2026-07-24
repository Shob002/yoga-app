"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

export function LatestPost() {
  const [latestPost] = api.post.getLatest.useSuspenseQuery();

  const utils = api.useUtils();
  const [name, setName] = useState("");

  const createPost = api.post.create.useMutation({
    onSuccess: async () => {
      await utils.post.invalidate();
      setName("");
    },
  });

  return (
    <div className="w-full max-w-md rounded-3xl bg-white/95 p-6 shadow-xl">
      <div className="mb-5 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
          Yoga Practice
        </p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">
          Add Today&apos;s Yoga Goal
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Save your latest yoga class, therapy module, or practice note.
        </p>
      </div>

      <div className="mb-5 rounded-2xl bg-green-50 p-4 text-center">
        {latestPost ? (
          <p className="truncate text-sm font-medium text-green-900">
            Latest practice: {latestPost.name}
          </p>
        ) : (
          <p className="text-sm font-medium text-green-900">
            No yoga practice added yet.
          </p>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (!name.trim()) return;

          createPost.mutate({ name });
        }}
        className="flex flex-col gap-3"
      >
        <input
          type="text"
          placeholder="Example: Morning Pranayama / Back Pain Yoga"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-2xl border border-green-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />

        <button
          type="submit"
          disabled={createPost.isPending}
          className="rounded-2xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {createPost.isPending ? "Saving..." : "Save Yoga Goal"}
        </button>
      </form>
    </div>
  );
}