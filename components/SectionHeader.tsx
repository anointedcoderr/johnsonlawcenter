import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  heading: string;
  lede?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  heading,
  lede,
  align = "left",
}: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignment}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-2 text-navy">{heading}</h2>
      {lede && (
        <p className="mt-3 text-muted text-base md:text-[1.05rem] leading-relaxed">
          {lede}
        </p>
      )}
    </Reveal>
  );
}
