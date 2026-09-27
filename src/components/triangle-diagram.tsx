type Props = {
  opp?: string;
  adj?: string;
  hyp?: string;
  className?: string;
};

export function TriangleDiagram({
  opp = "ด้านตรงข้าม (Opposite)",
  adj = "ด้านประชิด (Adjacent)",
  hyp = "ด้านตรงข้ามมุมฉาก (Hypotenuse)",
  className = "max-w-[320px]",
}: Props) {
  return (
    <div className={`mx-auto my-4 flex justify-center ${className}`}>
      <svg
        viewBox="0 0 260 210"
        role="img"
        aria-label="รูปสามเหลี่ยมมุมฉากแสดงด้านตรงข้าม ด้านประชิด และด้านตรงข้ามมุมฉาก"
        className="h-auto w-full text-navy"
      >
        <polygon
          points="30,180 230,180 230,30"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <rect
          x="210"
          y="160"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M 75 180 A 45 45 0 0 0 60.5 150"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="3"
        />
        <text
          x="80"
          y="168"
          fontSize="15"
          fill="var(--gold)"
          fontWeight="700"
        >
          θ
        </text>
        <text x="50" y="200" fontSize="13" fill="var(--ink)">
          {adj}
        </text>
        <text
          x="236"
          y="110"
          fontSize="13"
          fill="var(--ink)"
          transform="rotate(90 236 110)"
        >
          {opp}
        </text>
        <text
          x="78"
          y="95"
          fontSize="13"
          fill="var(--ink)"
          transform="rotate(-39 90 95)"
        >
          {hyp}
        </text>
      </svg>
    </div>
  );
}
