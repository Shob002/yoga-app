"use client";

import {
  Calendar,
  Mail,
  MessageSquare,
  Phone,
  RefreshCw,
  Search,
  UserRound,
  XCircle,
} from "lucide-react";
import { useMemo, useState } from "react";

import { api } from "~/trpc/react";

type ContactMessage = {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  message: string;
  createdAt: Date | string;
};

export default function ContactsPage() {
  const [search, setSearch] = useState("");
  const [selectedMessage, setSelectedMessage] =
    useState<ContactMessage | null>(null);

  /*
   * IMPORTANT:
   *
   * This requires contact.list to exist in:
   *
   * src/server/api/routers/contact/index.ts
   */
  const contactsQuery = api.contact.list.useQuery(undefined, {
    refetchOnWindowFocus: true,
  });

  const contacts = (contactsQuery.data ?? []) as ContactMessage[];

  const filteredContacts = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return contacts;
    }

    return contacts.filter((contact) => {
      return (
        contact.name.toLowerCase().includes(query) ||
        (contact.email ?? "").toLowerCase().includes(query) ||
        (contact.phone ?? "").toLowerCase().includes(query) ||
        contact.message.toLowerCase().includes(query)
      );
    });
  }, [contacts, search]);

  async function refreshContacts() {
    await contactsQuery.refetch();
  }

  function formatDate(date: Date | string) {
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
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#7bae8a]">
              Administration
            </p>

            <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Contact Messages
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#66746b]">
              Review customer enquiries and contact requests
              submitted through the Hayagriva Yoga website.
            </p>
          </div>

          <button
            type="button"
            onClick={refreshContacts}
            disabled={contactsQuery.isFetching}
            className="inline-flex w-fit items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-bold text-[#b8c4ba] transition hover:border-[#d6b36a]/30 hover:text-[#d6b36a] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <RefreshCw
              className={`h-4 w-4 ${
                contactsQuery.isFetching ? "animate-spin" : ""
              }`}
            />

            Refresh
          </button>
        </div>

        {/* SUMMARY */}
        <div className="mb-7 grid gap-4 sm:grid-cols-2">
          <SummaryCard
            title="Total Messages"
            value={contacts.length}
            icon={MessageSquare}
            iconClass="bg-[#d6b36a]/10 text-[#d6b36a]"
          />

          <SummaryCard
            title="Showing"
            value={filteredContacts.length}
            icon={Mail}
            iconClass="bg-[#7bae8a]/10 text-[#7bae8a]"
          />
        </div>

        {/* MAIN CARD */}
        <section className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b100d] shadow-2xl">
          {/* TOOLBAR */}
          <div className="border-b border-white/10 p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              {/* SEARCH */}
              <div className="relative w-full lg:max-w-lg">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#526057]" />

                <input
                  type="search"
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search name, email, phone or message..."
                  className="h-12 w-full rounded-2xl border border-white/10 bg-[#050706] pl-11 pr-4 text-sm text-[#f7efe0] outline-none transition placeholder:text-[#526057] focus:border-[#d6b36a]/40 focus:ring-2 focus:ring-[#d6b36a]/10"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-[#66746b]">
                <MessageSquare className="h-4 w-4" />

                {contacts.length}{" "}
                {contacts.length === 1 ? "message" : "messages"}
              </div>
            </div>
          </div>

          {/* LOADING */}
          {contactsQuery.isLoading && (
            <div className="flex min-h-[320px] items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <RefreshCw className="h-7 w-7 animate-spin text-[#d6b36a]" />

                <p className="text-sm text-[#66746b]">
                  Loading contact messages...
                </p>
              </div>
            </div>
          )}

          {/* ERROR */}
          {contactsQuery.isError && (
            <div className="p-8">
              <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-6 text-center">
                <XCircle className="mx-auto h-8 w-8 text-red-300" />

                <h2 className="mt-3 text-sm font-bold text-red-200">
                  Unable to load contact messages
                </h2>

                <p className="mt-2 text-xs text-red-300/70">
                  {contactsQuery.error.message}
                </p>

                <button
                  type="button"
                  onClick={refreshContacts}
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#d6b36a] px-4 py-2.5 text-xs font-bold text-[#050706]"
                >
                  <RefreshCw className="h-3.5 w-3.5" />

                  Try Again
                </button>
              </div>
            </div>
          )}

          {/* TABLE */}
          {!contactsQuery.isLoading &&
            !contactsQuery.isError && (
              <>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[1000px] border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/[0.015] text-left">
                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[#526057]">
                          Customer
                        </th>

                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[#526057]">
                          Contact
                        </th>

                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[#526057]">
                          Message
                        </th>

                        <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[#526057]">
                          Submitted
                        </th>

                        <th className="px-6 py-4 text-right text-[10px] font-bold uppercase tracking-wider text-[#526057]">
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {filteredContacts.length === 0 ? (
                        <tr>
                          <td
                            colSpan={5}
                            className="px-5 py-20 text-center"
                          >
                            <MessageSquare className="mx-auto h-9 w-9 text-[#526057]" />

                            <p className="mt-4 text-sm font-semibold text-[#9aa89f]">
                              No contact messages found
                            </p>

                            <p className="mt-1 text-xs text-[#526057]">
                              {contacts.length === 0
                                ? "Website contact enquiries will appear here."
                                : "Try changing your search."}
                            </p>
                          </td>
                        </tr>
                      ) : (
                        filteredContacts.map((contact) => (
                          <tr
                            key={contact.id}
                            className="border-b border-white/5 transition hover:bg-white/[0.025]"
                          >
                            {/* CUSTOMER */}
                            <td className="px-6 py-5">
                              <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d6b36a]/10">
                                  <UserRound className="h-4 w-4 text-[#d6b36a]" />
                                </div>

                                <div>
                                  <p className="text-sm font-semibold text-[#e8e1d5]">
                                    {contact.name}
                                  </p>

                                  <p className="mt-1 font-mono text-[9px] text-[#526057]">
                                    {contact.id.slice(0, 12)}
                                  </p>
                                </div>
                              </div>
                            </td>

                            {/* CONTACT */}
                            <td className="px-6 py-5">
                              <div className="space-y-1">
                                <p className="flex items-center gap-2 text-xs text-[#b8c4ba]">
                                  <Mail className="h-3.5 w-3.5 text-[#7bae8a]" />

                                  {contact.email ??
                                    "No email provided"}
                                </p>

                                {contact.phone && (
                                  <p className="flex items-center gap-2 text-[10px] text-[#526057]">
                                    <Phone className="h-3.5 w-3.5" />

                                    {contact.phone}
                                  </p>
                                )}
                              </div>
                            </td>

                            {/* MESSAGE */}
                            <td className="px-6 py-5">
                              <p className="max-w-[360px] truncate text-xs leading-5 text-[#9aa89f]">
                                {contact.message}
                              </p>
                            </td>

                            {/* DATE */}
                            <td className="px-6 py-5">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-3.5 w-3.5 text-[#526057]" />

                                <span className="text-[10px] text-[#66746b]">
                                  {formatDate(
                                    contact.createdAt,
                                  )}
                                </span>
                              </div>
                            </td>

                            {/* ACTION */}
                            <td className="px-6 py-5 text-right">
                              <button
                                type="button"
                                onClick={() =>
                                  setSelectedMessage(
                                    contact,
                                  )
                                }
                                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-bold text-[#b8c4ba] transition hover:border-[#d6b36a]/30 hover:bg-[#d6b36a]/5 hover:text-[#d6b36a]"
                              >
                                <MessageSquare className="h-3.5 w-3.5" />

                                View
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                {/* FOOTER */}
                <div className="border-t border-white/10 px-6 py-4">
                  <p className="text-xs text-[#526057]">
                    Showing{" "}
                    <span className="font-semibold text-[#9aa89f]">
                      {filteredContacts.length}
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold text-[#9aa89f]">
                      {contacts.length}
                    </span>{" "}
                    messages
                  </p>
                </div>
              </>
            )}
        </section>
      </div>

      {/* MESSAGE MODAL */}
      {selectedMessage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedMessage(null);
            }
          }}
        >
          <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0b100d] shadow-2xl">
            {/* MODAL HEADER */}
            <div className="flex items-start justify-between border-b border-white/10 p-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7bae8a]">
                  Contact Enquiry
                </p>

                <h2 className="mt-2 text-2xl font-black text-[#f7efe0]">
                  Message Details
                </h2>

                <p className="mt-1 font-mono text-[10px] text-[#526057]">
                  {selectedMessage.id}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedMessage(null)
                }
                className="rounded-xl p-2 text-[#66746b] transition hover:bg-white/5 hover:text-[#f7efe0]"
                aria-label="Close message"
              >
                <XCircle className="h-5 w-5" />
              </button>
            </div>

            {/* CUSTOMER */}
            <div className="border-b border-white/10 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d6b36a]/10">
                  <UserRound className="h-6 w-6 text-[#d6b36a]" />
                </div>

                <div>
                  <h3 className="text-lg font-black text-[#f7efe0]">
                    {selectedMessage.name}
                  </h3>

                  <p className="mt-1 text-xs text-[#66746b]">
                    Contact enquiry
                  </p>
                </div>
              </div>
            </div>

            {/* DETAILS */}
            <div className="space-y-5 p-6">
              <DetailRow
                label="Email"
                value={
                  selectedMessage.email ??
                  "Not provided"
                }
                icon={<Mail className="h-4 w-4" />}
              />

              <DetailRow
                label="Phone"
                value={
                  selectedMessage.phone ??
                  "Not provided"
                }
                icon={<Phone className="h-4 w-4" />}
              />

              <DetailRow
                label="Submitted"
                value={formatDate(
                  selectedMessage.createdAt,
                )}
                icon={<Calendar className="h-4 w-4" />}
              />

              {/* MESSAGE */}
              <div className="border-t border-white/10 pt-5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#526057]">
                  Message
                </p>

                <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="whitespace-pre-wrap text-sm leading-7 text-[#b8c4ba]">
                    {selectedMessage.message}
                  </p>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="border-t border-white/10 p-6">
              <button
                type="button"
                onClick={() =>
                  setSelectedMessage(null)
                }
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-bold text-[#b8c4ba] transition hover:border-[#d6b36a]/30 hover:text-[#d6b36a]"
              >
                Close
              </button>
            </div>
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
  icon: typeof MessageSquare;
  iconClass: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0b100d] p-5 transition hover:border-[#d6b36a]/20">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-[#66746b]">
            {title}
          </p>

          <p className="mt-2 text-3xl font-black text-[#f7efe0]">
            {value}
          </p>
        </div>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconClass}`}
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
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.03] text-[#d6b36a]">
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