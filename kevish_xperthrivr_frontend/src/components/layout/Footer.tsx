import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { footerQuickLinks, mainNav } from "@/lib/routes";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)]" role="contentinfo">
      <Container className="container-px">
        <div className="grid gap-8 py-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Image src="/images/logo.svg" alt="" width={28} height={28} />
              <Image src="/images/wordmark.svg" alt="XperThrivr" width={140} height={20} />
            </div>
            <p className="mt-4 text-muted max-w-prose">
              We craft modern, accessible web experiences with a clear, ocean-inspired identity.
            </p>
          </div>

          <div>
            <h3 className="h3 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {mainNav.map((r) => (
                <li key={r.href}>
                  <Link className="link" href={r.href}>
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="h3 mb-3">Newsletter</h3>
            <p className="text-muted mb-3">Join for updates. (Placeholder)</p>
            <form action="#" onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input className="input" aria-label="Email address" placeholder="you@example.com" />
              <button className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-[color:var(--color-border)] py-6">
          <p className="text-muted text-sm">© {new Date().getFullYear()} XperThrivr. All rights reserved.</p>
          <nav aria-label="Legal links">
            <ul className="flex gap-4">
              {footerQuickLinks.map((r) => (
                <li key={r.href}>
                  <Link className="link text-sm" href={r.href}>
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
