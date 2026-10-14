/**
 * The under-eye drawing beside dark-eye-circles' type tabs (C-05,
 * `diagram: "under-eye"`). It replaces three stock photographs that showed
 * the wrong thing (one captioned "nothing pigmented" showed pigment).
 *
 * One idea, drawn plainly: the same darkness under the eye has three
 * different sources, so the drawing carries all three and brings forward the
 * one the active tab is about — brown melanin in the skin, blue-purple
 * vessels showing through thin skin, and the shadow cast by a hollow. "Mixed"
 * lights all three. Colours follow the page's own copy, not decoration.
 *
 * Illustrative, never diagnostic. Pure SVG, server-renderable; the state
 * styling lives in globals.css under `.skin-diagram`, shared with
 * SkinDepthDiagram.
 */

type Focus = "pigment" | "vascular" | "structural" | "mixed";

const PIGMENT_DOTS: [number, number, number][] = [
  [150, 168, 3.6], [172, 176, 3], [196, 181, 4], [222, 184, 3.4], [248, 184, 3.8],
  [274, 181, 3.2], [298, 175, 3.6], [320, 167, 3], [184, 192, 2.6], [236, 196, 2.8],
  [286, 191, 2.6], [162, 182, 2.4], [262, 194, 2.2],
];

export type UnderEyeLabels = {
  /** Accessible name, "{focus}" filled from `focus`. */
  aria: string;
  focus: Record<Focus, string>;
  pigment: string;
  vessels: string;
  hollow: string;
  cheek: string;
  caption: string;
};

const EN_LABELS: UnderEyeLabels = {
  aria: "Illustrative drawing of the area under the eye, showing {focus}.",
  focus: {
    pigment: "brown pigment in the skin below the eye",
    vascular: "blue-purple blood vessels showing through thin under-eye skin",
    structural: "a shadow cast by a hollow between the lower lid and cheek",
    mixed: "pigment, visible vessels and a hollow's shadow together",
  },
  pigment: "Pigment",
  vessels: "Vessels",
  hollow: "Hollow",
  cheek: "Cheek",
  caption: "Illustrative only. Which cause applies is assessed by a doctor at examination.",
};

export function UnderEyeDiagram({ focus, labels = EN_LABELS }: { focus: Focus; labels?: UnderEyeLabels }) {
  const L = labels;
  const on = (f: Exclude<Focus, "mixed">) => (focus === f || focus === "mixed" ? "is-on" : "");

  return (
    <figure className="reveal skin-diagram" data-focus={focus}>
      <svg
        viewBox="0 0 480 340"
        role="img"
        aria-label={L.aria.replace("{focus}", L.focus[focus])}
        className="h-auto w-full"
      >
        <defs>
          {/* One id per focus: a page draws this once per type section, and a
              repeated id would point every fill at the first gradient. */}
          <radialGradient id={`ue-shadow-${focus}`} cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#7C6457" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#7C6457" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Skin ground. */}
        <rect className="sd-band" x={40} y={40} width={340} height={270} rx={28} fill="#EEDCCD" />

        {/* The hollow: a soft shadow along the tear trough, then the cheek's
            upper contour below it. */}
        <g className={`sd-part ${on("structural")}`}>
          <ellipse cx={232} cy={212} rx={128} ry={34} fill={`url(#ue-shadow-${focus})`} />
          <path d="M112 200 C160 236 304 236 352 198" fill="none" stroke="#9A7B69" strokeWidth={1.6} strokeLinecap="round" />
        </g>
        <path
          className="sd-line"
          pathLength={1}
          d="M92 262 C150 240 314 240 372 262"
          fill="none"
          stroke="#AB886D"
          strokeWidth={1.3}
        />

        {/* Vessels showing through the thin lower-lid skin. */}
        <g className={`sd-part ${on("vascular")}`} fill="none" stroke="#6E6C9A" strokeWidth={1.5} strokeLinecap="round">
          <path d="M146 176 C170 190 196 186 214 196 S250 204 272 194" />
          <path d="M190 178 C204 192 224 192 236 206" />
          <path d="M258 180 C276 190 300 186 322 174" />
          <path d="M226 190 C238 186 252 190 262 200" />
        </g>

        {/* Melanin in the skin itself. */}
        <g className={`sd-dots ${on("pigment")}`} fill="#7A5236">
          {PIGMENT_DOTS.map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} style={{ ["--i" as string]: i }} />
          ))}
        </g>

        {/* The eye, drawn last so it sits over everything. */}
        <path
          className="sd-line"
          pathLength={1}
          d="M132 136 C176 92 288 92 332 136 C288 166 176 166 132 136 Z"
          fill="#FBF6F1"
          stroke="#493628"
          strokeWidth={1.6}
        />
        <circle cx={232} cy={134} r={22} fill="#5B4636" />
        <circle cx={232} cy={134} r={9} fill="#2E2219" />
        <path d="M132 136 C176 162 288 162 332 136" fill="none" stroke="#AB886D" strokeWidth={1.2} />

        <g className="font-sans" fontSize={13} fill="#5B4636">
          <text x={392} y={176} className={`sd-label ${on("pigment")}`}>{L.pigment}</text>
          <text x={392} y={198} className={`sd-label ${on("vascular")}`}>{L.vessels}</text>
          <text x={392} y={220} className={`sd-label ${on("structural")}`}>{L.hollow}</text>
          <text x={392} y={266}>{L.cheek}</text>
        </g>
      </svg>
      <figcaption className="mt-3 text-sm leading-relaxed text-ink-500">
        {L.caption}
      </figcaption>
    </figure>
  );
}
