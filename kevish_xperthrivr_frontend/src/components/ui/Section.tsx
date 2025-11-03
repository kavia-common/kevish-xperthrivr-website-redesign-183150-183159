import { ReactNode } from "react";
import clsx from "clsx";
import Container from "@/components/layout/Container";

type Props = {
  title?: string;
  subtitle?: string;
  gradient?: boolean;
  size?: "md" | "lg";
  children: ReactNode;
  className?: string;
};

// PUBLIC_INTERFACE
export default function Section({
  title,
  subtitle,
  gradient = false,
  size = "md",
  children,
  className,
}: Props) {
  /** Section wrapper that provides vertical spacing and optional gradient background. */
  return (
    <section className={clsx("w-full", gradient && "section-gradient", size === "lg" ? "section-lg" : "section", className)}>
      <Container className="container-px">
        {title && (
          <header className="mb-6">
            <h2 className="h2">{title}</h2>
            {subtitle && <p className="text-muted mt-2 max-w-prose">{subtitle}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
