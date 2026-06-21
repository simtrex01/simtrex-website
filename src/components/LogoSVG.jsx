// ============================================================
// LOGO SIMTREX INC — Composant SVG
// Props :
//   taille   : "small" | "medium" | "large"  (défaut: "medium")
//   sombre   : true = texte blanc/argent (sur fond sombre)
//              false = texte sombre (sur fond clair)
// ============================================================

export default function LogoSVG({ taille = "medium", sombre = true }) {
  const echelles = {
    small:  { width: 160, height: 48,  fontSize1: 7,  fontSize2: 22, fontSize3: 7.5 },
    medium: { width: 220, height: 66,  fontSize1: 9,  fontSize2: 30, fontSize3: 10  },
    large:  { width: 340, height: 100, fontSize1: 13, fontSize2: 46, fontSize3: 15  },
  };
  const s = echelles[taille] || echelles.medium;

  const couleurArgent = sombre ? "#d4d4d4" : "#1a1a1a";
  const couleurBlanc  = sombre ? "#ffffff" : "#1a1a1a";
  const couleurOr     = "#e8820c";
  const couleurMuted  = sombre ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.45)";

  return (
    <svg
      width={s.width}
      height={s.height}
      viewBox={`0 0 ${s.width} ${s.height}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo Simtrex inc"
      role="img"
    >
      <defs>
        {/* Dégradé métallique pour SIMTREX */}
        <linearGradient id="metalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor={sombre ? "#ffffff" : "#2a2a2a"} />
          <stop offset="35%"  stopColor={sombre ? "#e8e8e8" : "#111111"} />
          <stop offset="60%"  stopColor={sombre ? "#b0b0b0" : "#3a3a3a"} />
          <stop offset="100%" stopColor={sombre ? "#d8d8d8" : "#1a1a1a"} />
        </linearGradient>
      </defs>

      {/* ── Ligne "CONSTRUCTION" avec tirets ── */}
      {/* Tiret gauche */}
      <line
        x1={s.width * 0.04}
        y1={s.fontSize1 * 1.1}
        x2={s.width * 0.27}
        y2={s.fontSize1 * 1.1}
        stroke={couleurOr}
        strokeWidth="0.8"
        opacity="0.7"
      />
      {/* Texte CONSTRUCTION */}
      <text
        x={s.width / 2}
        y={s.fontSize1 * 1.35}
        textAnchor="middle"
        fontFamily="'Montserrat', 'Arial Black', sans-serif"
        fontSize={s.fontSize1}
        fontWeight="600"
        fill={couleurMuted}
        letterSpacing="3"
      >
        CONSTRUCTION
      </text>
      {/* Tiret droit */}
      <line
        x1={s.width * 0.73}
        y1={s.fontSize1 * 1.1}
        x2={s.width * 0.96}
        y2={s.fontSize1 * 1.1}
        stroke={couleurOr}
        strokeWidth="0.8"
        opacity="0.7"
      />

      {/* ── SIMTREX INC. ── */}
      <text
        x={s.width / 2}
        y={s.fontSize1 * 1.35 + s.fontSize2 * 1.1}
        textAnchor="middle"
        fontFamily="'Montserrat', 'Arial Black', 'Impact', sans-serif"
        fontSize={s.fontSize2}
        fontWeight="900"
        fill="url(#metalGrad)"
        letterSpacing="1.5"
      >
        SIMTREX
        <tspan
          fontWeight="700"
          fontSize={s.fontSize2 * 0.75}
          fill={couleurOr}
          dy={s.fontSize2 * 0.08}
        >
          {" "}INC.
        </tspan>
      </text>

      {/* ── Ligne orange sous le nom ── */}
      <rect
        x={s.width * 0.04}
        y={s.fontSize1 * 1.35 + s.fontSize2 * 1.1 + s.fontSize2 * 0.18}
        width={s.width * 0.92}
        height="2"
        fill={couleurOr}
        rx="1"
      />

      {/* ── Tagline ── */}
      <text
        x={s.width / 2}
        y={s.height - 4}
        textAnchor="middle"
        fontFamily="'Montserrat', 'Arial', sans-serif"
        fontSize={s.fontSize3}
        fontWeight="700"
        fill={couleurOr}
        letterSpacing="1.5"
      >
        Transport · Génie civil · Ponts
      </text>
    </svg>
  );
}
