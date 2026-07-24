"use client";

import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";

export default function DeleteBookingButton({ id }: { id: string }) {
  const router = useRouter();
  const deleteBooking = api.booking.delete.useMutation();

  const handleDelete = async () => {
    const ok = confirm("Delete this booking?");
    if (!ok) return;

    try {
      await deleteBooking.mutateAsync({ id });
      router.refresh();
    } catch {
      alert("Failed to delete booking");
    }
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={deleteBooking.isPending}
      className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-60"
    >
      {deleteBooking.isPending ? "Deleting..." : "Delete"}
    </button>
  );
}