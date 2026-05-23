type Props = {
  variant?: "dark" | "light";
  showText?: boolean;
  className?: string;
};

export default function Logo({
  variant = "light",
  showText = true,
  className = "",
}: Props) {
  const letter = variant === "dark" ? "#FFFDF8" : "#0B1B2B";
  const column = "#B8862B";
  const columnShade = "#8F641B";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 116 72"
        width="46"
        height="auto"
        role="img"
        aria-label="Johnson Law Center monogram"
        className="shrink-0"
      >
        {/* J */}
        <text
          x="0"
          y="58"
          fontFamily="var(--font-serif), Georgia, 'Times New Roman', serif"
          fontWeight="700"
          fontSize="62"
          fill={letter}
        >
          J
        </text>

        {/* Column standing in for L */}
        <g transform="translate(38 8)" fill={column}>
          {/* Capital */}
          <rect x="4" y="0" width="22" height="3" />
          <rect x="0" y="3" width="30" height="4" />
          <rect x="6" y="7" width="18" height="3" />
          {/* Shaft */}
          <rect x="7" y="10" width="16" height="40" />
          {/* Fluting */}
          <rect x="9" y="11" width="0.8" height="38" fill={columnShade} />
          <rect x="11.5" y="11" width="0.8" height="38" fill={columnShade} />
          <rect x="14" y="11" width="0.8" height="38" fill={columnShade} />
          <rect x="16.5" y="11" width="0.8" height="38" fill={columnShade} />
          <rect x="19" y="11" width="0.8" height="38" fill={columnShade} />
          {/* Base */}
          <rect x="4" y="50" width="22" height="4" />
          <rect x="0" y="54" width="30" height="6" />
        </g>

        {/* C */}
        <text
          x="74"
          y="58"
          fontFamily="var(--font-serif), Georgia, 'Times New Roman', serif"
          fontWeight="700"
          fontSize="62"
          fill={letter}
        >
          C
        </text>
      </svg>

      {showText && (
        <span className="flex flex-col leading-[1.05]">
          <span
            className={`font-serif text-[1.05rem] md:text-[1.15rem] font-bold tracking-[0.04em] uppercase whitespace-nowrap ${
              variant === "dark" ? "text-cream" : "text-navy"
            }`}
          >
            Johnson Law Center
          </span>
          <span
            className={`text-[0.65rem] md:text-[0.7rem] font-semibold uppercase tracking-[0.22em] mt-0.5 ${
              variant === "dark" ? "text-gold" : "text-gold"
            }`}
          >
            Gloucester, VA
          </span>
        </span>
      )}
    </span>
  );
}
