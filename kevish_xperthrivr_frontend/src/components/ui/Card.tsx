import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  title?: string | ReactNode;
  children: ReactNode;
  className?: string;
  footer?: ReactNode;
};

// PUBLIC_INTERFACE
export default function Card({ title, children, className, footer }: Props) {
  /** Simple card with optional title (string or custom node) and footer. */
  const renderTitle = () => {
    if (!title) return null;
    // If it's a string, wrap in semantic heading. If it's a node, render as-is.
    return typeof title === "string" ? (
      <h3 className="h3 mb-2">{title}</h3>
    ) : (
      <div className="mb-2">{title}</div>
    );
  };

  return (
    <section className={clsx("card p-5", className)}>
      {renderTitle()}
      <div>{children}</div>
      {footer && <div className="mt-4 pt-3 border-t border-[color:var(--color-border)]">{footer}</div>}
    </section>
  );
}
