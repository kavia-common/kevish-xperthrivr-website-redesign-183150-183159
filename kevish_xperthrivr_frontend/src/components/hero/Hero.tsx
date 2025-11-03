import Image from "next/image";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="section section-gradient">
      <Container className="container-px">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Badge>Ocean Professional</Badge>
            <h1 className="h1 mt-3">Modern websites that perform and inspire</h1>
            <p className="text-muted mt-3 max-w-prose">
              We blend clarity, performance, and accessibility to craft digital experiences that
              delight users and drive results.
            </p>
            <div className="mt-6 flex gap-3">
              <Button variant="primary">Get Started</Button>
              <Button variant="secondary">Learn More</Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/hero.jpg"
              alt="Ocean-inspired abstract hero"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg border border-[color:var(--color-border)]"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
