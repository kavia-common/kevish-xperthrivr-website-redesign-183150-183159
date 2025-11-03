import Section from "@/components/ui/Section";
import ContactForm from "@/components/forms/ContactForm";
import Card from "@/components/ui/Card";

export const metadata = {
  title: "Contact",
  description: "Get in touch with our team.",
};

export default function ContactPage() {
  return (
    <>
      <Section title="Contact Us" subtitle="We’d love to hear about your project.">
        <Card>
          <ContactForm />
        </Card>
      </Section>
    </>
  );
}
