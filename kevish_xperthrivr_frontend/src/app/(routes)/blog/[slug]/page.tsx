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

export default function BlogPostPage(props: any) {
  const params = props?.params as Params;
  const title = params.slug.replace(/-/g, " ");
  return (
    <>
      <Section title="Blog Post">
        <article className="prose max-w-none">
          <h1 className="h1">{title}</h1>
          <p className="text-muted">This is a placeholder for a blog post with slug: {params.slug}</p>
        </article>
      </Section>
    </>
  );
}
