import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};

// PUBLIC_INTERFACE
export default function Container({ children, className }: Props) {
  /** Constrains content width with responsive paddings consistent across the app. */
  return (
    <div className={clsx("mx-auto w-full", className)} style={{ maxWidth: "var(--container-max)" }}>
      {children}
    </div>
  );
}
