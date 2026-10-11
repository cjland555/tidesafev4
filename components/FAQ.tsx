import { faqs } from "@/lib/site";

export default function FAQ() {
  return (
    <section id="faq" className="bg-sand-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="eyebrow text-brass">Questions</p>
        <h2 className="mt-3 font-serif text-3xl leading-tight font-bold text-navy-900 sm:text-4xl">
          What waterfront owners ask us
        </h2>
        <div className="mt-10 divide-y divide-navy-900/10 border-y border-navy-900/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium text-navy-900 [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-navy-900/15 text-xl leading-none transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 pr-12 leading-relaxed text-mist">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
