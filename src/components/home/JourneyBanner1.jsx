import "./JourneyBanner.css";

/**
 * JourneyBanner
 * Decorative animated strip for the Home page, placed just below the hero.
 *
 * Original illustration (temple-town skyline + train + river) — inspired
 * only by the general concept of the reference video (a looping train
 * against a skyline over water), not by its specific artwork. Drawn fresh
 * in Hotel Avantika's palette, themed around Ujjain.
 *
 * v2: fixed train orientation (locomotive now leads in the direction of
 * travel) and replaced the flat clipart-style skyline/water with smoother,
 * gradient-shaded shapes and a real wave path instead of a dot pattern.
 */

const TEMPLE_BLUE = "#1f3a8a";
const TEMPLE_ORANGE = "#f58220";
const TEMPLE_BLUE_SOFT = "#5f7cc7";
const TEMPLE_ORANGE_SOFT = "#f8b57f";

// A temple with a clean, stepped-pyramid shikhara tower (stacked tiers
// narrowing toward a pointed pinnacle) sitting flush on a base hall.
function Temple({ x, height, tone }) {
  const w = 92;
  const baseY = 190;
  const isBlue = tone === "blue";
  const fill = isBlue ? `url(#templeBlueGrad)` : `url(#templeOrangeGrad)`;
  const finial = isBlue ? TEMPLE_BLUE : TEMPLE_ORANGE;
  const cx = w / 2;

  const hallH = height * 0.36;
  const hallY = baseY - hallH;
  const towerH = height - hallH;
  const capH = towerH * 0.26;
  const tiersH = towerH - capH;
  const tierCount = 4;
  const tierH = tiersH / tierCount;
  const topY = baseY - height;

  const tiers = [];
  for (let i = 0; i < tierCount; i++) {
    const yBottom = hallY - tierH * i;
    const yTop = yBottom - tierH;
    const t = i / (tierCount - 1);
    const tw = w * 0.62 - t * (w * 0.62 - w * 0.24);
    tiers.push(
      <rect key={i} x={cx - tw / 2} y={yTop} width={tw} height={tierH + 0.6} rx={2} fill={fill} />
    );
  }
  const capBaseW = w * 0.24;
  const capY = hallY - tiersH;

  return (
    <g transform={`translate(${x},0)`}>
      <rect x={8} y={hallY} width={w - 16} height={hallH} fill={fill} rx={3} />
      {tiers}
      <path d={`M ${cx - capBaseW / 2},${capY} L ${cx + capBaseW / 2},${capY} L ${cx},${topY} Z`} fill={fill} />
      <circle cx={cx} cy={topY - 3} r={4.5} fill={finial} />
      <rect x={cx - 1.2} y={topY - 3} width={2.4} height={9} fill={finial} />
    </g>
  );
}

// A domed pavilion (softer silhouette for visual variety in the skyline).
function Dome({ x, height, tone }) {
  const w = 84;
  const baseY = 190;
  const domeR = w * 0.34;
  const bodyH = height - domeR;
  const bodyY = baseY - bodyH;
  const isBlue = tone === "blue";
  const fill = isBlue ? `url(#templeBlueGrad)` : `url(#templeOrangeGrad)`;
  const finial = isBlue ? TEMPLE_BLUE : TEMPLE_ORANGE;

  return (
    <g transform={`translate(${x},0)`}>
      <rect x={10} y={bodyY} width={w - 20} height={bodyH} fill={fill} rx={2} />
      <path
        d={`M 10,${bodyY} A ${w / 2 - 10},${domeR} 0 0 1 ${w - 10},${bodyY} Z`}
        fill={fill}
      />
      <circle cx={w / 2} cy={bodyY - domeR - 2} r={3.6} fill={finial} />
      {/* small arched doorway */}
      <path
        d={`M ${w * 0.4},${baseY} L ${w * 0.4},${baseY - 22} A ${w * 0.1},${w * 0.1} 0 0 1 ${w * 0.6},${baseY - 22} L ${w * 0.6},${baseY}`}
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="2"
      />
    </g>
  );
}

const SKYLINE_LAYOUT = [
  { type: "dome", height: 96, tone: "blue" },
  { type: "temple", height: 128, tone: "orange" },
  { type: "temple", height: 84, tone: "blue" },
  { type: "dome", height: 108, tone: "orange" },
  { type: "temple", height: 150, tone: "blue" },
  { type: "dome", height: 92, tone: "orange" },
  { type: "temple", height: 118, tone: "orange" },
  { type: "dome", height: 100, tone: "blue" },
  { type: "temple", height: 140, tone: "orange" },
  { type: "temple", height: 88, tone: "blue" },
  { type: "dome", height: 104, tone: "orange" },
  { type: "temple", height: 132, tone: "blue" },
];

function TempleSkyline() {
  const spacing = 132;
  return (
    <svg
      className="journey-banner__skyline"
      viewBox="0 0 1584 200"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="templeBlueGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={TEMPLE_BLUE_SOFT} />
          <stop offset="100%" stopColor={TEMPLE_BLUE} />
        </linearGradient>
        <linearGradient id="templeOrangeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={TEMPLE_ORANGE_SOFT} />
          <stop offset="100%" stopColor={TEMPLE_ORANGE} />
        </linearGradient>
      </defs>

      {/* Faint distant haze layer for depth */}
      <rect x="0" y="150" width="1584" height="40" fill="#dbe4f5" />

      {SKYLINE_LAYOUT.map((b, i) => {
        const x = i * spacing + 10;
        return b.type === "temple" ? (
          <Temple key={i} x={x} height={b.height} tone={b.tone} />
        ) : (
          <Dome key={i} x={x} height={b.height} tone={b.tone} />
        );
      })}
    </svg>
  );
}

// One coach: rounded body, roof stripe, evenly spaced arched windows, two
// wheel bogies.
function Coach({ x }) {
  return (
    <g transform={`translate(${x},0)`}>
      <rect x="4" y="46" width="176" height="58" rx="10" fill="#1f3a8a" />
      <rect x="4" y="46" width="176" height="9" rx="4" fill="#f58220" />
      {[26, 62, 98, 134].map((wx) => (
        <rect key={wx} x={wx} y="60" width="26" height="20" rx="6" fill="#dce9ff" />
      ))}
      <rect x="4" y="96" width="176" height="6" fill="#12204f" />
      <circle cx="34" cy="112" r="9" fill="#12204f" />
      <circle cx="60" cy="112" r="9" fill="#12204f" />
      <circle cx="124" cy="112" r="9" fill="#12204f" />
      <circle cx="150" cy="112" r="9" fill="#12204f" />
    </g>
  );
}

// Locomotive with its nose pointing left (leading edge of travel).
function Locomotive({ x }) {
  return (
    <g transform={`translate(${x},0)`}>
      <path
        d="M28,40 H150 a10,10 0 0 1 10,10 V96 a10,10 0 0 1 -10,10 H14 a10,10 0 0 1 -8,-16 L18,52 a14,14 0 0 1 10,-12 Z"
        fill="#d32f2f"
      />
      <rect x="30" y="40" width="130" height="9" rx="4" fill="#b5271f" />
      {/* windscreen, angled to match the sloped nose */}
      <path d="M20,55 L34,48 L34,68 L18,68 Z" fill="#dce9ff" />
      {/* headlight */}
      <circle cx="14" cy="63" r="4.5" fill="#ffd76b" />
      {/* pantograph */}
      <path d="M96,40 L104,26 L112,26 L120,40" fill="none" stroke="#252525" strokeWidth="3" />
      {/* horn stack */}
      <rect x="140" y="26" width="8" height="14" fill="#252525" />
      <circle cx="60" cy="112" r="10" fill="#12204f" />
      <circle cx="92" cy="112" r="10" fill="#12204f" />
      <circle cx="128" cy="112" r="10" fill="#12204f" />
    </g>
  );
}

// Locomotive leads (x=0), coaches trail behind it to the right — so as the
// whole scene scrolls left, the engine is always the front-most element.
function TrainScene() {
  return (
    <svg
      className="journey-banner__train"
      viewBox="0 0 780 130"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      <line x1="0" y1="120" x2="780" y2="120" stroke="#0f1c47" strokeWidth="3" />
      <line x1="0" y1="126" x2="780" y2="126" stroke="#0f1c47" strokeWidth="3" />

      <Locomotive x={0} />
      <Coach x={186} />
      <Coach x={378} />
      <Coach x={570} />
    </svg>
  );
}

// Seamless tiling wave: this path is periodic (period 150 x 5 repeats
// across a 750-wide viewBox), so two copies placed side by side and
// scrolled by exactly half their combined width loop perfectly.
const WAVE_PATH =
  "M0,20 C37.5,4 112.5,36 150,20 C187.5,4 262.5,36 300,20 " +
  "C337.5,4 412.5,36 450,20 C487.5,4 562.5,36 600,20 " +
  "C637.5,4 712.5,36 750,20 L750,60 L0,60 Z";

function Waves() {
  return (
    <svg
      className="journey-banner__wave-svg"
      viewBox="0 0 1500 60"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={WAVE_PATH} fill="rgba(255,255,255,0.22)" />
      <path d={WAVE_PATH} transform="translate(750,0)" fill="rgba(255,255,255,0.22)" />
    </svg>
  );
}

export default function JourneyBanner() {
  return (
    <section className="journey-banner" aria-hidden="true">
      <TempleSkyline />
      <div className="journey-banner__road" />
      <div className="journey-banner__track">
        <div className="journey-banner__track-inner">
          <TrainScene />
          <TrainScene />
        </div>
      </div>
      <div className="journey-banner__water">
        <div className="journey-banner__wave-track journey-banner__wave-track--back">
          <Waves />
          <Waves />
        </div>
        <div className="journey-banner__wave-track journey-banner__wave-track--front">
          <Waves />
          <Waves />
        </div>
      </div>
    </section>
  );
}
