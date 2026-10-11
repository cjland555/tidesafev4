"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

export default function Countdown() {
  const target = new Date(site.countdownTarget).getTime();
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units: [string, number | undefined][] = [
    ["Days", t?.days],
    ["Hours", t?.hours],
    ["Min", t?.minutes],
    ["Sec", t?.seconds],
  ];

  return (
    <div role="timer" aria-label="Time until the December 24 king tide" className="flex gap-2 sm:gap-3">
      {units.map(([label, v]) => (
        <div
          key={label}
          className="w-16 rounded-xl border border-white/15 bg-white/5 py-3 text-center sm:w-20"
        >
          <div className="font-serif text-3xl tabular-nums text-white sm:text-4xl">
            {v === undefined ? "—" : String(v).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-sand-200/80">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
