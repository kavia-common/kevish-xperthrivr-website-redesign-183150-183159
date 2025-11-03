"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav, isActivePath } from "@/lib/routes";

type Props = {
  mobile?: boolean;
  onNavigate?: () => void;
};

// PUBLIC_INTERFACE
export default function MainNav({ mobile = false, onNavigate }: Props) {
  /** Navigation component that highlights active links and supports a mobile stacked view. */
  const pathname = usePathname() || "/";

  return (
    <nav aria-label="Primary" id="primary-navigation">
      <ul className={mobile ? "flex flex-col gap-2 py-2" : "flex items-center gap-4"}>
        {mainNav.map((item) => {
          const active = isActivePath(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`link font-semibold ${active ? "text-[color:var(--color-primary)]" : ""}`}
                aria-current={active ? "page" : undefined}
                onClick={onNavigate}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
