import Image from "next/image";
import Countdown from "./Countdown";
import { kingTides, kelvinWaveRange } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-white pt-16">
      {/* Photo on the right, fading into white behind the headline (like the flyer) */}
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-[62%] lg:block">
        <Image
          src="/photos-v4/tide-8-0.webp"
          alt=""
          fill
          priority
          sizes="62vw"
          className="object-cover object-[35%_center] [mask-image:linear-gradient(to_right,transparent_0%,black_38%)]"
        />
      </div>
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-sand-50 via-white to-sand-100" />

      <div className="mx-auto max-w-6xl px-4 pb-14 pt-12 sm:px-6 sm:pt-20 lg:pb-20">
        <div className="max-w-xl">
          <h1 className="font-serif text-[2.6rem] leading-[1.05] font-bold tracking-tight text-navy-900 sm:text-6xl">
            Know Your Flood Height. Protect What Matters.
          </h1>
          <div className="mt-6 h-px w-full max-w-md bg-gradient-to-r from-navy-900/30 to-transparent" />
          <p className="kicker mt-5 text-sm leading-relaxed text-mist sm:text-base">
            Private flood-risk assessments for Newport Harbor waterfront homes.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink">
            NOAA predicts a 7.0′ king tide on December 24, and this year&apos;s El Niño Kelvin wave
            could add 6 to 12 inches. We&apos;ll show you exactly where water would enter your
            property, and how to keep it out.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#request"
              className="rounded-full bg-coral px-7 py-4 text-center font-semibold text-white shadow-lg shadow-coral/20 transition hover:bg-coral-dark"
            >
              Schedule a consultation
            </a>
            <a
              href="#see-it"
              className="rounded-full border border-navy-900/20 bg-white/80 px-7 py-4 text-center font-medium text-navy-900 transition hover:border-navy-900/40"
            >
              See the rising tide
            </a>
          </div>
        </div>

        {/* Phone/tablet: the photo sits under the copy */}
        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-2xl lg:hidden">
          <Image
            src="/photos-v4/tide-8-0.webp"
            alt="An 8-foot tide at a Newport Harbor home, held back by a sandbag barrier behind the fence"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-12 rounded-2xl bg-navy-900 p-5 text-sand-50 shadow-xl shadow-navy-900/15 sm:p-7 lg:mt-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="eyebrow mb-3 text-sand-400">Until the Dec 24 king tide</p>
              <Countdown />
            </div>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-4">
              {kingTides.map((t) => (
                <div key={t.iso} className={`px-4 py-3 ${t.peak ? "bg-alert/25" : "bg-navy-950/60"}`}>
                  <div className="text-xs font-semibold text-sand-200">{t.date}</div>
                  <div className="mt-1 font-serif text-xl font-bold text-white">
                    {t.noaa.toFixed(2)}′
                  </div>
                  <div className="text-[0.7rem] leading-snug text-sand-200/80">
                    up to {(t.noaa + kelvinWaveRange.max).toFixed(2)}′ with Kelvin wave
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
