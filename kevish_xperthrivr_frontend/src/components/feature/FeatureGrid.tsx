import Card from "@/components/ui/Card";
import FeatureIcon from "@/components/feature/FeatureIcon";

const features = [
  {
    title: "Modern UI",
    description: "Clean design with accessible components and strong visual hierarchy.",
    icon: "/images/feature-1.svg",
  },
  {
    title: "Performance",
    description: "Static export optimized for speed and best practices.",
    icon: "/images/feature-2.svg",
  },
  {
    title: "SEO Ready",
    description: "OpenGraph images, Twitter cards, sitemap and robots included.",
    icon: "/images/feature-3.svg",
  },
];

// PUBLIC_INTERFACE
export default function FeatureGrid() {
  /** Grid of product features. */
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => (
        <Card
          key={f.title}
          className="h-full"
          title={
            <span className="inline-flex items-center gap-3">
              <FeatureIcon src={f.icon} alt="" />
              <span className="h3">{f.title}</span>
            </span>
          }
        >
          <p className="text-muted">{f.description}</p>
        </Card>
      ))}
    </div>
  );
}
