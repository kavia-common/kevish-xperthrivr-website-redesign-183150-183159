import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function FeatureIcon({ src, alt }: Props) {
  return (
    <div className="w-12 h-12 rounded-lg flex items-center justify-center border border-[color:var(--color-border)] bg-white">
      <Image src={src} alt={alt} width={28} height={28} />
    </div>
  );
}
