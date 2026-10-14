/**
 * The skin cross-section beside melasma's depth tabs (C-05, `diagram: "skin-depth"`).
 *
 * One idea, drawn plainly: melasma is sorted by where the pigment sits, so the
 * diagram shows two populations of melanin and brings forward the one the
 * active tab is about. Epidermal pigment is brown and sits along the base of
 * the outer layer; dermal pigment is blue-grey and sits deeper. Those colours
 * are the page's own copy ("dark brown with sharp borders" vs "muted
 * blue-grey"), not decoration.
 *
 * Illustrative, never diagnostic: the caption says the depth is estimated by a
 * doctor at examination. Pure SVG and CSS, server-renderable; the motion lives
 * in globals.css under `.skin-diagram`, gated on reduced-motion like every
 * other reveal on the site.
 */

type Depth = "epidermis" | "dermis" | "both";

// Deterministic positions so server and client render the same drawing.
const EPI_DOTS: [number, number, number][] = [
  [92, 104, 4.2], [118, 110, 3.4], [141, 101, 4.6], [166, 108, 3.8], [190, 103, 4.4],
  [214, 111, 3.2], [237, 102, 4.8], [262, 109, 3.6], [287, 104, 4.2], [311, 110, 3.4],
  [104, 92, 2.6], [176, 94, 2.8], [249, 93, 2.4], [298, 95, 2.6], [226, 96, 2.2],
];
const DERM_DOTS: [number, number, number][] = [
  [110, 168, 5.2], [152, 196, 4.4], [196, 158, 5.6], [236, 205, 4.8], [276, 171, 5.4],
  [318, 214, 4.2], [132, 232, 4.6], [212, 238, 3.8], [292, 240, 4.4], [174, 214, 3.4],
  [256, 148, 3.6],
];

export type SkinDiagramLabels = {
  /** Accessible name, "{depth}" filled from `depth`. */
  aria: string;
  depth: Record<Depth, string>;
  surface: string;
  epidermis: string;
  dermis: string;
  fat: string;
  caption: string;
};

const EN_LABELS: SkinDiagramLabels = {
  aria: "Illustrative diagram of the skin's layers, showing {depth}.",
  depth: {
    epidermis: "pigment concentrated in the epidermis, the outer layer of the skin",
    dermis: "pigment concentrated in the dermis, the deeper layer below it",
    both: "pigment in both the epidermis and the dermis",
  },
  surface: "Skin surface",
  epidermis: "Epidermis",
  dermis: "Dermis",
  fat: "Fat layer",
  caption: "Illustrative only. Where the pigment sits is estimated by a doctor at examination.",
};

export function SkinDepthDiagram({ depth, labels = EN_LABELS }: { depth: Depth; labels?: SkinDiagramLabels }) {
  const L = labels;
  const epiOn = depth !== "dermis";
  const dermOn = depth !== "epidermis";

  return (
    <figure className="reveal skin-diagram" data-depth={depth}>
      <svg
        viewBox="0 0 480 340"
        role="img"
        aria-label={L.aria.replace("{depth}", L.depth[depth])}
        className="h-auto w-full"
      >
        {/* Layers, top to bottom. The undulating epidermis/dermis border is the
            basal layer, where epidermal melasma's pigment collects. */}
        <path className="sd-band" d="M40 70 C110 62 180 78 250 68 S350 62 380 70 L380 134 L40 134 Z" fill="#EEDCCD" />
        <path
          className="sd-band"
          d="M40 120 C70 112 84 128 110 120 S150 112 176 121 S218 130 244 119 S290 110 316 121 S356 129 380 120 L380 262 L40 262 Z"
          fill="#E2C9B7"
        />
        <path className="sd-band" d="M40 262 L380 262 L380 318 L40 318 Z" fill="#F2E7DD" />

        {/* Fat lobules in the deepest layer. */}
        {[70, 118, 166, 214, 262, 310, 352].map((x, i) => (
          <ellipse key={x} cx={x} cy={290 + (i % 2) * 6} rx={21} ry={14} fill="none" stroke="#D6C0B3" strokeWidth={1.2} />
        ))}

        {/* Collagen, drawn as a few long strokes through the dermis. */}
        <g fill="none" stroke="#D6C0B3" strokeWidth={1.1} strokeLinecap="round">
          <path className="sd-line" pathLength={1} d="M58 150 C120 140 170 162 236 150 S330 140 366 152" />
          <path className="sd-line" pathLength={1} d="M54 186 C118 178 176 198 238 186 S326 176 368 190" />
          <path className="sd-line" pathLength={1} d="M58 226 C120 218 170 236 240 224 S324 216 364 228" />
        </g>

        {/* The skin surface and the basal border, drawn in on first view. */}
        <path
          className="sd-line"
          pathLength={1}
          d="M40 70 C110 62 180 78 250 68 S350 62 380 70"
          fill="none"
          stroke="#493628"
          strokeWidth={1.6}
        />
        <path
          className="sd-fade"
          d="M40 120 C70 112 84 128 110 120 S150 112 176 121 S218 130 244 119 S290 110 316 121 S356 129 380 120"
          fill="none"
          stroke="#AB886D"
          strokeWidth={1.3}
          strokeDasharray="3 4"
        />

        {/* Epidermal melanin: brown, along the base of the outer layer. */}
        <g className={`sd-dots ${epiOn ? "is-on" : ""}`} fill="#7A5236">
          {EPI_DOTS.map(([x, y, r], i) => (
            <circle key={`e${i}`} cx={x} cy={y} r={r} style={{ ["--i" as string]: i }} />
          ))}
        </g>

        {/* Dermal melanin: blue-grey, deeper and more scattered. */}
        <g className={`sd-dots ${dermOn ? "is-on" : ""}`} fill="#6F7B88">
          {DERM_DOTS.map(([x, y, r], i) => (
            <circle key={`d${i}`} cx={x} cy={y} r={r} style={{ ["--i" as string]: i }} />
          ))}
        </g>

        {/* Layer names, set in the UI face at a size that holds AA. */}
        <g className="font-sans" fontSize={13} fill="#5B4636">
          <text x={40} y={56}>{L.surface}</text>
          <text x={392} y={100} className={`sd-label ${epiOn ? "is-on" : ""}`}>
            {L.epidermis}
          </text>
          <text x={392} y={196} className={`sd-label ${dermOn ? "is-on" : ""}`}>
            {L.dermis}
          </text>
          <text x={392} y={294}>
            {L.fat}
          </text>
        </g>
      </svg>
      <figcaption className="mt-3 text-sm leading-relaxed text-ink-500">
        {L.caption}
      </figcaption>
    </figure>
  );
}
