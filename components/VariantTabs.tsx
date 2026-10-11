"use client";

import { useRef, useState } from "react";
import { track } from "@/components/Analytics";
import { FaceLayersDiagram } from "@/components/FaceLayersDiagram";
import { SkinDepthDiagram } from "@/components/SkinDepthDiagram";
import { UnderEyeDiagram } from "@/components/UnderEyeDiagram";
import type { ConcernVariant } from "@/lib/types";

type TabSet = Extract<ConcernVariant, { kind: "tabs" }>;
type Tabs = TabSet["tabs"];
type Focus = Tabs[number]["focus"];

// Each drawing takes only its own focus values; anything else shows them all.
const underEye = (f: Focus) =>
  f === "pigment" || f === "vascular" || f === "structural" ? f : "mixed";
const faceLayer = (f: Focus) => (f === "skin" || f === "volume" ? f : "structure");

/**
 * C-05 · the tab set behind archetypes A (3 types), D (primary vs secondary)
 * and E (skin / volume / muscle).
 *
 * All panels stay in the DOM — hidden, not unmounted — so every routing line is
 * crawlable and extractable by an assistant without a click (the same reason
 * the FAQ uses native <details>). Tabs are shown all at once rather than as an
 * accordion so a visitor can self-sort in one glance; this orients, it does not
 * diagnose, so no panel ever states a conclusion about the reader.
 *
 * Keyboard: arrow keys move between tabs and activate, Home/End jump to the
 * ends — the WAI-ARIA automatic-activation tabs pattern.
 */
export function VariantTabs({
  tabs,
  diagram,
}: {
  tabs: Tabs;
  diagram?: TabSet["diagram"];
}) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (i: number) => {
    setActive(i);
    refs.current[i]?.focus();
    // R-14 — which sub-type a visitor identifies with is the single most useful
    // signal this page produces; it is what block 09 should be ordered by.
    track("variant_tab_open", { tab: tabs[i].label });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = tabs.length - 1;
    const next = {
      ArrowRight: active + 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: last,
    }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    select(Math.max(0, Math.min(last, next)));
  };

  return (
    <div className="mt-10">
      <div
        role="tablist"
        aria-label="Which type"
        onKeyDown={onKeyDown}
        className="flex flex-wrap gap-3"
      >
        {tabs.map((t, i) => (
          <button
            key={t.label}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            type="button"
            id={`variant-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`variant-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => select(i)}
            className={`min-w-[9rem] flex-1 rounded-xl border px-5 py-4 text-left transition-colors ${
              i === active
                ? "border-espresso/40 bg-surface"
                : "border-hairline bg-transparent hover:border-mocha"
            }`}
          >
            <span className="block font-display text-base font-medium text-espresso">
              {t.label}
            </span>
            {t.sub && (
              <span className="mt-0.5 block text-sm text-ink-500">{t.sub}</span>
            )}
          </button>
        ))}
      </div>

      {/* With a diagram, panels and drawing share a row from lg; below lg the
          drawing leads, so a tap visibly changes it before the text does. */}
      <div
        className={
          diagram
            ? "lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-start lg:gap-14"
            : ""
        }
      >
        {diagram && (
          <div className="mt-9 lg:order-2">
            {diagram === "skin-depth" && <SkinDepthDiagram depth={tabs[active].depth ?? "both"} />}
            {diagram === "under-eye" && (
              <UnderEyeDiagram focus={underEye(tabs[active].focus)} />
            )}
            {diagram === "face-layers" && (
              <FaceLayersDiagram focus={faceLayer(tabs[active].focus)} />
            )}
          </div>
        )}
        <div className="lg:order-1">
          {tabs.map((t, i) => (
            <div
              key={t.label}
              role="tabpanel"
              id={`variant-panel-${i}`}
              aria-labelledby={`variant-tab-${i}`}
              hidden={i !== active}
              className="mt-9"
            >
              <h3 className="h-sub">{t.title}</h3>
              <p className="mt-3 max-w-[64ch] leading-relaxed text-ink-700">
                {t.body}
              </p>
              {t.items && (
                <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
                  {t.items.map((it) => (
                    <li
                      key={it.lead}
                      className="max-w-[62ch] py-4 leading-relaxed text-ink-700"
                    >
                      <strong className="font-semibold text-espresso">
                        {it.lead}
                      </strong>{" "}
                      {it.body}
                    </li>
                  ))}
                </ul>
              )}
              {t.routing && (
                <p className="mt-6 max-w-[62ch] leading-relaxed text-ink-700">
                  <strong className="font-semibold text-espresso">
                    Usually assessed for:
                  </strong>{" "}
                  {t.routing}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
