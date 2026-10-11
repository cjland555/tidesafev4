"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/lib/site";

export default function VideoEmbed() {
  const [play, setPlay] = useState(false);

  return (
    <section className="bg-navy-900 py-20 text-sand-50 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[2fr_3fr]">
        <div>
          <p className="eyebrow text-sand-400">Watch the demo</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight font-bold sm:text-4xl">
            How a 15-inch barrier holds back the harbor.
          </h2>
          <p className="mt-4 text-sand-200/90">
            Our demo at a Newport Harbor home walks through each rising tide level and the sandbag
            protection it takes to keep the water out.
          </p>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-2xl bg-black shadow-2xl">
          {play ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${site.youtubeId}?autoplay=1&rel=0`}
              title="TideSafe king tide sandbag barrier demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlay(true)}
              className="group absolute inset-0 h-full w-full"
              aria-label="Play the TideSafe demo video"
            >
              <Image
                src="/photos-v4/tide-7-5.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 660px, 100vw"
                className="object-cover opacity-80 transition group-hover:opacity-90"
              />
              <span className="absolute inset-0 bg-navy-950/30" />
              <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-sand-50/95 shadow-xl transition group-hover:scale-105">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#0b1f33" aria-hidden="true">
                  <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
