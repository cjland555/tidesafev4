import Image from "next/image";
import { site } from "@/lib/site";

const FLYER = "/TideSafe-Flyer.pdf";

// The flyer's navy bottom bar, plus a download card for the flyer itself.
export default function ContactBand() {
  return (
    <section className="bg-sand-50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_auto]">
        <div className="flex flex-col justify-between gap-8 rounded-2xl bg-navy-900 p-7 text-white shadow-xl shadow-navy-900/15 sm:p-10">
          <div className="flex items-start gap-5">
            <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl ring-2 ring-white/40 sm:flex" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
                <path d="M3.5 9.5h17M8 3v4M16 3v4M8 13h.01M12 13h.01M16 13h.01M8 16.5h.01M12 16.5h.01" />
              </svg>
            </span>
            <div>
              <p className="font-serif text-2xl leading-snug font-bold sm:text-3xl">
                Before the next king tide, understand your property&apos;s true exposure.
              </p>
              <a href="#request" className="kicker mt-3 inline-block text-sm font-semibold text-sand-400 hover:text-white">
                Schedule a consultation
              </a>
            </div>
          </div>
          <ul className="flex flex-col gap-4 border-t border-white/15 pt-6 text-base sm:flex-row sm:flex-wrap sm:gap-8">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-2.5 font-semibold hover:text-sand-400">
                <Icon d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1Z" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 font-semibold hover:text-sand-400">
                <Icon d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5ZM3.5 6.5l8.5 6.5 8.5-6.5" stroke />
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5 font-semibold">
              <Icon d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0c2.5 2.4 3.8 5.4 3.8 9s-1.3 6.6-3.8 9m0-18c-2.5 2.4-3.8 5.4-3.8 9s1.3 6.6 3.8 9M3.5 9h17M3.5 15h17" stroke />
              tidesafe.net
            </li>
          </ul>
        </div>

        <a
          href={FLYER}
          download
          className="group flex items-center gap-5 rounded-2xl bg-white p-5 shadow-lg shadow-navy-900/5 ring-1 ring-navy-900/10 transition hover:ring-navy-900/25 lg:w-[25rem] lg:self-center"
        >
          <div className="relative aspect-[440/569] w-24 shrink-0 overflow-hidden rounded-md shadow-md ring-1 ring-navy-900/10 lg:w-32">
            <Image src="/flyer-thumb.webp" alt="TideSafe flyer preview" fill sizes="128px" className="object-cover" />
          </div>
          <div>
            <p className="font-serif text-xl font-bold text-navy-900">Download the flyer</p>
            <p className="mt-1 text-sm text-mist">PDF, 8.5 × 11 in, 3.4 MB. Print it or share it with a neighbor.</p>
            <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-coral group-hover:text-coral-dark">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19.5h14" />
              </svg>
              Download PDF
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}

function Icon({ d, stroke = false }: { d: string; stroke?: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      className="shrink-0 text-sand-400"
      fill={stroke ? "none" : "currentColor"}
      stroke={stroke ? "currentColor" : "none"}
      strokeWidth="1.7"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
