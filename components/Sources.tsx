import { sources } from "@/lib/site";

export default function Sources() {
  return (
    <section className="border-t border-navy-900/10 bg-sand-100 py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="eyebrow text-navy-900">Sources</h2>
        <ul className="mt-5 space-y-2.5 text-sm">
          {sources.map((s) => (
            <li key={s.url}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-700 underline decoration-navy-700/30 underline-offset-4 hover:decoration-navy-700"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs leading-relaxed text-mist">
          Tide heights are NOAA predictions in feet above Mean Lower Low Water (MLLW). Kelvin wave
          effects are estimates. Real water levels also depend on wind, waves and atmospheric
          pressure.
        </p>
      </div>
    </section>
  );
}
