export default function Home() {
  // Redirect root to grouped route content to avoid duplication during static export.
  // We simply render a minimal message instructing to use (routes)/page.tsx
  return (
    <main className="app-main section">
      <div className="container-px mx-auto" style={{ maxWidth: "var(--container-max)" }}>
        <p className="text-muted">Home content lives at (routes)/page.tsx</p>
      </div>
    </main>
  );
}
