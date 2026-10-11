const steps = [
  {
    n: "01",
    title: "Request an assessment",
    body: "Tell us about your property and what you've seen during past high tides. We'll confirm which assessment fits and schedule a visit.",
  },
  {
    n: "02",
    title: "We survey your property",
    body: "We measure and document the elevations that matter: seawall cap, yard, patio, thresholds, utilities, and every place water could get in.",
  },
  {
    n: "03",
    title: "You get a protection plan",
    body: "You get a clear report showing what floods at 7.0′, 7.5′ and 8.0′, plus the temporary and permanent measures to stop it.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-y border-navy-900/10 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="eyebrow text-brass">How it works</p>
        <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight font-bold text-navy-900 sm:text-4xl">
          Simple for you. Precise where it counts.
        </h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="border-t border-navy-900/15 pt-6">
              <span className="font-serif text-4xl font-bold text-brass">{s.n}</span>
              <h3 className="mt-3 text-lg font-semibold text-navy-900">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-mist">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
