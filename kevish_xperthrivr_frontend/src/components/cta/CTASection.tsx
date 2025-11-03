import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <Section gradient size="lg" title="Ready to elevate your presence?" subtitle="Partner with us to launch an accessible, performant, and modern website.">
      <div className="flex flex-wrap gap-3">
        <Button variant="primary">Contact Us</Button>
        <Button variant="ghost">See Case Studies</Button>
      </div>
    </Section>
  );
}
