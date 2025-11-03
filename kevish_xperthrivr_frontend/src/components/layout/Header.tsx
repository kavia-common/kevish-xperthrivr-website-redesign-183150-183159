"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import MainNav from "@/components/navigation/MainNav";
import Container from "@/components/layout/Container";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close on route change via hashchange/popstate safety
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    window.addEventListener("popstate", close);
    return () => {
      window.removeEventListener("hashchange", close);
      window.removeEventListener("popstate", close);
    };
  }, []);

  return (
    <header className="header-sticky transition-base" role="banner">
      <Container className="container-px">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-2" aria-label="XperThrivr home">
            <Image src="/images/logo.svg" alt="" width={28} height={28} />
            <Image
              src="/images/wordmark.svg"
              alt="XperThrivr"
              className="hidden sm:block"
              width={140}
              height={20}
            />
          </Link>

          <div className="hidden md:block">
            <MainNav />
          </div>

          <div className="md:hidden">
            <button
              className="btn btn-secondary transition-base"
              aria-controls="primary-navigation"
              aria-expanded={open ? "true" : "false"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {open && (
          <nav
            id="primary-navigation"
            aria-label="Primary navigation"
            className="md:hidden border-t border-[color:var(--color-border)] py-2"
          >
            <MainNav onNavigate={() => setOpen(false)} mobile />
          </nav>
        )}
      </Container>
    </header>
  );
}
