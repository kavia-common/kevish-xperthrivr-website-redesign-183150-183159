import Section from "@/components/ui/Section";

export const metadata = {
  title: "Terms of Service",
  description: "The fine print.",
};

export default function TermsPage() {
  return (
    <>
      <Section title="Terms of Service" subtitle="Please review these terms.">
        <p className="text-muted max-w-prose">
          This is placeholder content for terms of service. Update with your legal terms.
        </p>
      </Section>
    </>
  );
}
