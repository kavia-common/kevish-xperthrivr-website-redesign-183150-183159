import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export const metadata = {
  title: "Blog",
  description: "Insights and updates.",
};

export default function BlogPage() {
  return (
    <>
      <Section title="Blog" subtitle="News, insights, and thinking.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[{ slug: "welcome-to-xperthrivr", title: "Welcome to XperThrivr" }].map((post) => (
            <Card
              key={post.slug}
              title={post.title}
              footer={
                <a className="link" href={`/blog/${post.slug}`}>
                  Read more
                </a>
              }
            >
              <p className="text-muted">Introducing our new look and direction.</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
