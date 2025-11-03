import Section from "@/components/ui/Section";

export const metadata = {
  title: "Privacy Policy",
  description: "How we handle your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Section title="Privacy Policy" subtitle="Your privacy matters.">
        <p className="text-muted max-w-prose">
          This is placeholder content for the privacy policy. Update to reflect your practices.
        </p>
      </Section>
    </>
  );
}
