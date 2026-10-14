/**
 * The face cross-section beside face-lifting's layer tabs (C-05,
 * `diagram: "face-layers"`). It replaces a photograph of an anatomical model
 * head: the information was right, the picture was graphic and off-brand.
 *
 * One idea, drawn plainly: sagging can start in different layers, so the
 * drawing stacks them — skin, fat pads, the SMAS and muscle, then bone — and
 * brings forward the one the active tab is about. Illustrative, never
 * diagnostic. Pure SVG, server-renderable; state styling is shared with
 * SkinDepthDiagram under `.skin-diagram` in globals.css.
 */

type Focus = "skin" | "volume" | "structure";

export type FaceLayersLabels = {
  /** Accessible name, "{focus}" filled from `focus`. */
  aria: string;
  focus: Record<Focus, string>;
  surface: string;
  skin: string;
  fat: string;
  smas: string;
  muscle: string;
  bone: string;
  caption: string;
};

const EN_LABELS: FaceLayersLabels = {
  aria: "Illustrative cross-section of the layers of the face, highlighting {focus}.",
  focus: {
    skin: "the skin, the outermost layer",
    volume: "the fat pads beneath the skin",
    structure: "the deeper supporting layer of fascia (SMAS) and muscle",
  },
  surface: "Skin surface",
  skin: "Skin",
  fat: "Fat pads",
  smas: "SMAS",
  muscle: "& muscle",
  bone: "Bone",
  caption:
    "Illustrative only. Dashed lines are retaining ligaments. Which layers are involved is assessed by a doctor at examination.",
};

export function FaceLayersDiagram({ focus, labels = EN_LABELS }: { focus: Focus; labels?: FaceLayersLabels }) {
  const L = labels;
  const on = (f: Focus) => (focus === f ? "is-on" : "");

  return (
    <figure className="reveal skin-diagram" data-focus={focus}>
      <svg
        viewBox="0 0 480 340"
        role="img"
        aria-label={L.aria.replace("{focus}", L.focus[focus])}
        className="h-auto w-full"
      >
        {/* Bone, the base everything rests on. */}
        <path className="sd-band" d="M40 262 L380 262 L380 318 L40 318 Z" fill="#E9E1D8" />

        {/* SMAS and muscle: a fibrous band, drawn with long strokes. */}
        <g className={`sd-part ${on("structure")}`}>
          <path d="M40 206 C120 198 200 214 280 204 S360 198 380 206 L380 262 L40 262 Z" fill="#D9B7A6" />
          <g fill="none" stroke="#B88E7A" strokeWidth={1.1} strokeLinecap="round">
            <path d="M54 222 C120 214 200 230 280 220 S352 214 368 222" />
            <path d="M54 242 C120 234 200 250 280 240 S352 234 368 242" />
          </g>
        </g>

        {/* Fat pads: separate compartments, which is why volume can shift
            in one area and not another. */}
        <g className={`sd-part ${on("volume")}`}>
          <path d="M40 132 L380 132 L380 206 C360 198 280 204 280 204 C200 214 120 198 40 206 Z" fill="#F2E3CF" />
          {[78, 140, 204, 268, 334].map((x, i) => (
            <ellipse key={x} cx={x} cy={168 + (i % 2) * 6} rx={28} ry={20} fill="none" stroke="#D6BFA3" strokeWidth={1.2} />
          ))}
        </g>

        {/* Skin: epidermis and dermis together, with collagen strokes. */}
        <g className={`sd-part ${on("skin")}`}>
          <path d="M40 70 C110 62 180 78 250 68 S350 62 380 70 L380 132 L40 132 Z" fill="#EEDCCD" />
          <g fill="none" stroke="#D6C0B3" strokeWidth={1.1} strokeLinecap="round">
            <path d="M56 98 C120 90 176 108 238 98 S330 90 366 100" />
            <path d="M56 118 C120 110 176 126 238 116 S330 110 366 120" />
          </g>
        </g>

        {/* Retaining ligaments tie the layers to bone; when they and the SMAS
            slacken, the layers above descend. */}
        <g fill="none" stroke="#8C6E5C" strokeWidth={1.3} strokeDasharray="3 4">
          <path className="sd-fade" d="M150 132 L150 262" />
          <path className="sd-fade" d="M290 132 L290 262" />
        </g>

        <path
          className="sd-line"
          pathLength={1}
          d="M40 70 C110 62 180 78 250 68 S350 62 380 70"
          fill="none"
          stroke="#493628"
          strokeWidth={1.6}
        />

        <g className="font-sans" fontSize={13} fill="#5B4636">
          <text x={40} y={56}>{L.surface}</text>
          <text x={392} y={104} className={`sd-label ${on("skin")}`}>{L.skin}</text>
          <text x={392} y={172} className={`sd-label ${on("volume")}`}>{L.fat}</text>
          <text x={392} y={226} className={`sd-label ${on("structure")}`}>
            {L.smas}
            <tspan x={392} dy={16}>{L.muscle}</tspan>
          </text>
          <text x={392} y={294}>{L.bone}</text>
        </g>
      </svg>
      <figcaption className="mt-3 text-sm leading-relaxed text-ink-500">
        {L.caption}
      </figcaption>
    </figure>
  );
}
