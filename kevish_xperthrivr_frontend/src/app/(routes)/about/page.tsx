import Section from "@/components/ui/Section";

export const metadata = {
  title: "About",
  description: "Learn about our mission and values.",
};

export default function AboutPage() {
  return (
    <>
      <Section title="About Us" subtitle="Our mission is to craft modern, accessible experiences.">
        <p className="max-w-prose">
          We focus on performance, accessibility, and visual clarity. Our Ocean Professional theme
          blends blue and amber accents for a confident, approachable identity.
        </p>
      </Section>
    </>
  );
}
