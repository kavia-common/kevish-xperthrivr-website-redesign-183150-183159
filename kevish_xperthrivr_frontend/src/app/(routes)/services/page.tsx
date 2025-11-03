import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export const metadata = {
  title: "Services",
  description: "What we offer.",
};

export default function ServicesPage() {
  return (
    <>
      <Section title="Services" subtitle="Solutions tailored to your goals.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {["Design Systems", "Web Development", "SEO & Performance"].map((s) => (
            <Card key={s} title={s}>
              <p className="text-muted">
                High-quality delivery with a pragmatic approach and a focus on outcomes.
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
