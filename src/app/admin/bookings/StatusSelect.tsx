"use client";

import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";

type Status = "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED";

export default function StatusSelect({
  id,
  status,
}: {
  id: string;
  status: Status;
}) {
  const router = useRouter();
  const updateStatus = api.booking.updateStatus.useMutation();

  const changeStatus = async (newStatus: Status) => {
    try {
      await updateStatus.mutateAsync({ id, status: newStatus });
      router.refresh();
    } catch {
      alert("Failed to update status");
    }
  };

  return (
    <select
      value={status}
      disabled={updateStatus.isPending}
      onChange={(e) => changeStatus(e.target.value as Status)}
      className="rounded-lg border px-3 py-2 text-sm"
    >
      <option value="PENDING">Pending</option>
      <option value="CONFIRMED">Confirmed</option>
      <option value="COMPLETED">Completed</option>
      <option value="CANCELLED">Cancelled</option>
    </select>
  );
}