import Link from "next/link";
import Hero from "@/components/hero/Hero";
import Section from "@/components/ui/Section";
import FeatureGrid from "@/components/feature/FeatureGrid";
import Card from "@/components/ui/Card";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section title="Features" subtitle="Built with performance, accessibility, and clarity.">
        <FeatureGrid />
      </Section>

      <Section title="From the blog" subtitle="Thoughts and updates.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card
              key={i}
              title={`Welcome to XperThrivr ${i}`}
              footer={
                <Button variant="ghost">
                  <Link href="/blog/welcome-to-xperthrivr" className="link">Read more</Link>
                </Button>
              }
            >
              <p className="text-muted">
                Explore our latest updates and insights on building modern web experiences.
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Container className="container-px">
        <Section gradient className="rounded-lg">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h3 className="h3">Let’s build something great</h3>
              <p className="text-muted">Talk to our team about your next project.</p>
            </div>
            <Button variant="primary">
              <Link href="/contact" className="link text-white" aria-label="Go to contact page">Contact us</Link>
            </Button>
          </div>
        </Section>
      </Container>
    </>
  );
}
