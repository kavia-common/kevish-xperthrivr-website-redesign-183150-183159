import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  title?: string;
  children: ReactNode;
  className?: string;
  footer?: ReactNode;
};

// PUBLIC_INTERFACE
export default function Card({ title, children, className, footer }: Props) {
  /** Simple card with optional title and footer. */
  return (
    <section className={clsx("card p-5", className)}>
      {title && <h3 className="h3 mb-2">{title}</h3>}
      <div>{children}</div>
      {footer && <div className="mt-4 pt-3 border-t border-[color:var(--color-border)]">{footer}</div>}
    </section>
  );
}
