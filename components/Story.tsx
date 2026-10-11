import { site } from "@/lib/site";

// Copy from the TideSafe flyer, in Brett's words.
export default function Story() {
  return (
    <section className="bg-sand-100 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="eyebrow text-brass">Why TideSafe exists</p>
        <div className="mt-5 border-l-4 border-navy-900 pl-5 sm:pl-8">
          <h2 className="font-serif text-2xl leading-snug font-bold text-navy-900 sm:text-3xl">
            For 38 years, my parents have lived on Newport Harbor and have experienced countless
            high tides.
          </h2>
          <div className="mt-6 space-y-4 font-serif text-lg leading-relaxed text-ink sm:text-xl">
            <p>
              During the July 22, 2026 king tide, the predicted tide was 6.97 feet and it caused
              flooding and damage to some bayfront homes. Additional king tides are expected in
              November, December, and January. The highest of these is predicted to be about 7 feet.
            </p>
            <p>
              If the current Super El Niño Kelvin wave raises background sea levels by another 6 to
              12 inches, conditions could approach an 8-foot tide scenario on December 24. We are
              taking steps now to protect their home with a 15-inch sandbag barrier.
            </p>
            <p>
              That experience is why we started TideSafe: to help other waterfront homeowners
              understand their flood risk and prepare <em>before</em> extreme high tides arrive.
            </p>
          </div>
          <p className="mt-8 font-serif text-xl italic text-navy-900">{site.founder}, Founder</p>
        </div>
      </div>
    </section>
  );
}
