import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  title?: string;
  children?: ReactNode;
  variant?: "info" | "success" | "error";
};

// PUBLIC_INTERFACE
export default function Alert({ title, children, variant = "info" }: Props) {
  /** Informational alert with success and error variants. */
  const color =
    variant === "success"
      ? "border-[color:var(--color-secondary)] bg-[color-mix(in_ oklab,var(--color-secondary)_10%,white)]"
      : variant === "error"
      ? "border-[color:var(--color-error)] bg-[color-mix(in_ oklab,var(--color-error)_10%,white)]"
      : "border-[color:var(--color-border)] bg-[color:var(--color-surface)]";

  return (
    <div className={clsx("card p-4", color)}>
      {title && <div className="font-semibold mb-1">{title}</div>}
      {children && <div className="text-sm text-muted">{children}</div>}
    </div>
  );
}
