import Link from "next/link";
import {
  CalendarPlus,
  Users,
  CreditCard,
  FileText,
  MessageSquare,
  Settings,
  ArrowUpRight,
} from "lucide-react";

const actions = [
  {
    title: "Review Bookings",
    description: "Check pending booking requests",
    href: "/admin/bookings",
    icon: CalendarPlus,
  },
  {
    title: "Manage Customers",
    description: "View and manage customers",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Payments",
    description: "Review payment activity",
    href: "/admin/payments",
    icon: CreditCard,
  },
  {
    title: "Create Blog",
    description: "Publish a new article",
    href: "/admin/blogs",
    icon: FileText,
  },
  {
    title: "Contacts",
    description: "Review customer enquiries",
    href: "/admin/contacts",
    icon: MessageSquare,
  },
  {
    title: "Settings",
    description: "Manage admin settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function QuickActions() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <Link
            key={action.href}
            href={action.href}
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0b100d] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-[#d6b36a]/30 hover:bg-[#0d130f]"
          >
            {/* Icon */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d6b36a]/10 bg-[#d6b36a]/5 transition group-hover:bg-[#d6b36a]/10">
              <Icon className="h-5 w-5 text-[#d6b36a]" />
            </div>

            {/* Text */}
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-[#f7efe0]">
                {action.title}
              </p>

              <p className="mt-1 text-xs leading-5 text-[#66746b]">
                {action.description}
              </p>
            </div>

            {/* Arrow */}
            <ArrowUpRight className="h-4 w-4 shrink-0 text-[#526057] transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d6b36a]" />
          </Link>
        );
      })}
    </div>
  );
}