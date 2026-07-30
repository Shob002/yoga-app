import type { ReactNode } from "react";

type AdminCardProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function AdminCard({
  title,
  description,
  action,
  children,
  className = "",
}: AdminCardProps) {
  return (
    <section
      className={`overflow-hidden rounded-2xl border border-white/10 bg-[#0b100d] ${className}`}
    >
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-bold text-[#f7efe0]">{title}</h2>

          {description && (
            <p className="mt-1 text-xs leading-5 text-[#66746b]">
              {description}
            </p>
          )}
        </div>

        {action && <div className="shrink-0">{action}</div>}
      </div>

      {/* Content */}
      <div className="p-5">{children}</div>
    </section>
  );
}