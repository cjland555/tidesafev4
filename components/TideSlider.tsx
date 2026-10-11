"use client";

import Image from "next/image";
import { useState } from "react";
import { tideSteps } from "@/lib/site";

// The three reference levels from the flyer. `from`/`to` are the slider levels each one covers.
const levels = [
  {
    title: "Potential King Tide + Kelvin Wave",
    range: "~7.5 to 8.0 ft",
    note: "Could approach 8 feet on Dec 24 with 6 to 12 inches higher sea levels.",
    color: "#c9362f",
    from: 7.5,
    to: 9,
  },
  {
    title: "King Tide",
    range: "~7.0 ft",
    note: "Predicted to be about 7 feet in upcoming king tides (Nov, Dec, Jan).",
    color: "#0e7c96",
    from: 6.7,
    to: 7.49,
  },
  {
    title: "Normal High Tide",
    range: "",
    note: "Typical high tide levels in Newport Harbor.",
    color: "#13294b",
    from: 0,
    to: 6.69,
  },
];

export default function TideSlider() {
  const [i, setI] = useState(0);
  const step = tideSteps[i];
  const active = levels.findIndex((l) => step.level >= l.from && step.level <= l.to);

  return (
    <section id="see-it" className="bg-sand-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-navy-900/10 ring-1 ring-navy-900/10">
          {/* Title bar, as on the flyer */}
          <div className="flex flex-col gap-2 bg-navy-900 px-5 py-5 text-white sm:flex-row sm:items-center sm:gap-6 sm:px-8">
            <h2 className="font-serif text-2xl font-bold leading-tight sm:text-3xl">
              What Rising Tides Can Mean for Your Property
            </h2>
            <p className="text-sm leading-snug text-sand-200 sm:max-w-xs sm:border-l sm:border-white/30 sm:pl-6">
              Even a few extra inches can determine whether water stays outside, or enters your home.
            </p>
          </div>

          <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[17rem_1fr]">
            {/* Legend */}
            <ol className="order-2 space-y-6 lg:order-1 lg:pt-2">
              {levels.map((l, idx) => (
                <li
                  key={l.title}
                  className={`transition-opacity duration-300 ${active === idx ? "opacity-100" : "opacity-55"}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="h-3 w-3 shrink-0 rounded-full ring-4"
                      style={{ background: l.color, ["--tw-ring-color" as string]: `${l.color}26` }}
                      aria-hidden="true"
                    />
                    <span className="h-0 flex-1 border-t-2 border-dashed" style={{ borderColor: l.color }} aria-hidden="true" />
                  </div>
                  <p className="mt-2 font-serif text-lg font-bold leading-snug" style={{ color: l.color }}>
                    {l.title}
                    {l.range && <span className="block">({l.range})</span>}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-mist">{l.note}</p>
                </li>
              ))}
            </ol>

            <div className="order-1 lg:order-2">
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-navy-900">
                {tideSteps.map((s, idx) => (
                  <Image
                    key={s.src}
                    src={s.src}
                    alt={`${s.label} at a Newport Harbor bayfront home`}
                    fill
                    sizes="(min-width: 1024px) 760px, 100vw"
                    className={`object-cover transition-opacity duration-500 ${
                      idx === i ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute left-3 top-3 rounded-full bg-navy-950/85 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur sm:left-4 sm:top-4">
                  {step.label}
                </div>
              </div>

              <label htmlFor="tide-range" className="sr-only">
                Tide level
              </label>
              <input
                id="tide-range"
                type="range"
                min={0}
                max={tideSteps.length - 1}
                step={1}
                value={i}
                onChange={(e) => setI(Number(e.target.value))}
                aria-valuetext={step.label}
                className="tide-range mt-5"
              />
              <div className="mt-1 flex justify-between text-xs font-medium text-mist sm:text-sm">
                {tideSteps.map((s, idx) => (
                  <button
                    key={s.short}
                    type="button"
                    onClick={() => setI(idx)}
                    className={`rounded px-1 py-1 transition ${
                      idx === i ? "font-bold text-navy-900" : "hover:text-navy-900"
                    } ${idx === tideSteps.length - 1 ? "text-alert" : ""}`}
                  >
                    {s.short}
                  </button>
                ))}
              </div>

              <p className="mt-5 min-h-[3.5rem] text-lg leading-relaxed text-ink" aria-live="polite">
                {step.note}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl bg-sand-100 p-6 ring-1 ring-navy-900/10 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="max-w-2xl font-serif text-xl font-bold leading-snug text-navy-900 sm:text-2xl">
            Every property floods at a different height. Find out where yours does before December 24.
          </p>
          <a
            href="#request"
            className="shrink-0 rounded-full bg-coral px-6 py-3 font-semibold text-white transition hover:bg-coral-dark"
          >
            Schedule a consultation
          </a>
        </div>
        <p className="mt-3 text-xs text-mist">
          Photos are from the TideSafe demo at a Newport Harbor home. Tide heights are feet above MLLW.
        </p>
      </div>
    </section>
  );
}
