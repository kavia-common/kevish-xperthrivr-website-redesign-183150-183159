import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export const metadata = {
  title: "Case Studies",
  description: "Examples of our work.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Section title="Case Studies" subtitle="Selected projects and outcomes.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} title={`Project ${i}`}>
              <p className="text-muted">Results-driven engagements with measurable impact.</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
