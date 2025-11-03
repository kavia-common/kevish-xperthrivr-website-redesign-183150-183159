import type { Metadata } from "next";
import Section from "@/components/ui/Section";

type Params = { slug: string };

// Ensure static generation
export const dynamic = "error";

export function generateStaticParams(): Params[] {
  return [{ slug: "welcome-to-xperthrivr" }];
}

export const metadata: Metadata = {
  title: "Blog Post",
  description: "Post detail",
};

// In this environment, Next.js expects params to be a Promise in the generated PageProps.
// Define the page as async and await the params to satisfy the constraint.
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ");
  return (
    <>
      <Section title="Blog Post">
        <article className="prose max-w-none">
          <h1 className="h1">{title}</h1>
          <p className="text-muted">This is a placeholder for a blog post with slug: {slug}</p>
        </article>
      </Section>
    </>
  );
}
