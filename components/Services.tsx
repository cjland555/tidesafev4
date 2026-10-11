"use client";

import { services, type ServiceKey } from "@/lib/site";

export const SERVICE_EVENT = "tidesafe:select-service";

function choose(key: ServiceKey) {
  window.dispatchEvent(new CustomEvent<ServiceKey>(SERVICE_EVENT, { detail: key }));
}

function CheckCircle({ color }: { color: string }) {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill={color} />
      <path d="M5.8 10.4 8.6 13.2 14.2 7.2" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Flyer order: $800 first (teal), then $3,100 (navy).
const order: ServiceKey[] = ["elevation", "certified"];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <h2 className="font-serif text-3xl leading-tight font-bold text-navy-900 sm:shrink-0 sm:text-4xl">
            Choose Your Property Assessment
          </h2>
          <span className="hidden h-0.5 flex-1 rounded bg-gradient-to-r from-sand-400 to-transparent sm:block" aria-hidden="true" />
        </div>
        <p className="mt-4 max-w-2xl text-lg text-mist">
          Two ways to know your flood height, depending on what you already know about past high
          tides on your property.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {order.map((key) => {
            const s = services.find((x) => x.key === key)!;
            const color = key === "elevation" ? "#0e7c96" : "#13294b";
            return (
              <article
                key={s.key}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg shadow-navy-900/5 ring-1 ring-navy-900/10"
              >
                <div className="h-2" style={{ background: color }} aria-hidden="true" />
                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  <h3 className="text-sm font-bold uppercase tracking-[0.06em] text-navy-900 sm:text-base">
                    {s.name}
                  </h3>
                  <p className="mt-3 font-serif text-5xl font-bold" style={{ color }}>
                    {s.price}
                  </p>
                  <ul className="mt-6 space-y-3 text-ink">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <CheckCircle color={color} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t border-navy-900/10 pt-5 font-serif italic leading-relaxed text-mist">
                    Best {s.forWho.replace(/^For /, "for ")}
                  </p>
                  <div className="mt-auto pt-7">
                    <a
                      href="#request"
                      onClick={() => choose(s.key)}
                      className="block rounded-full px-6 py-3.5 text-center font-semibold text-white transition hover:brightness-110"
                      style={{ background: color }}
                    >
                      Choose this assessment
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
