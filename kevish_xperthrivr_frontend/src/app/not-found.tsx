import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="app-main section">
      <div className="container-px mx-auto" style={{ maxWidth: "var(--container-max)" }}>
        <section className="card p-8" role="alert" aria-live="assertive">
          <h1 className="h1">404 – Page Not Found</h1>
          <p className="text-muted mt-2">The page you’re looking for doesn’t exist.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/" className="btn btn-primary">Go home</Link>
            <form role="search" className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input className="input" placeholder="Search (placeholder)" aria-label="Search site" />
              <button className="btn btn-secondary" type="submit">Search</button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
