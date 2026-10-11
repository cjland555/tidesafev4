"use client";

import { useEffect, useState, type FormEvent } from "react";
import { track } from "@vercel/analytics";
import { site, type ServiceKey } from "@/lib/site";
import { SERVICE_EVENT } from "./Services";

type Status = "idle" | "sending" | "sent" | "error";

const input =
  "w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-ink placeholder:text-mist/60 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-navy-700/20";
const labelCls = "mb-1.5 block text-sm font-medium text-navy-900";

export default function AssessmentForm() {
  const [service, setService] = useState<ServiceKey | "unsure">("unsure");
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const onSelect = (e: Event) => setService((e as CustomEvent<ServiceKey>).detail);
    window.addEventListener(SERVICE_EVENT, onSelect);
    return () => window.removeEventListener(SERVICE_EVENT, onSelect);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_gotcha")) return; // bot

    if (!site.formspreeId) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      track("assessment_request", { service: String(data.get("service")) });
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="request" className="relative bg-navy-950 py-20 text-sand-50 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div>
          <p className="eyebrow text-sand-400">Request an assessment</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight font-bold sm:text-5xl">
            Get ahead of the December 24 tide.
          </h2>
          <p className="mt-5 text-lg text-sand-200/90">
            Tell us about your property. We&apos;ll reply within one business day to confirm the
            right assessment and set a time to visit.
          </p>
          <dl className="mt-10 space-y-5 text-sand-100">
            <div>
              <dt className="eyebrow text-sand-400">Call or text</dt>
              <dd className="mt-1 text-xl">
                <a href={site.phoneHref} className="hover:text-white">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-sand-400">Email</dt>
              <dd className="mt-1 text-xl">
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-3xl bg-sand-50 p-6 text-ink shadow-2xl sm:p-10">
          {status === "sent" ? (
            <div className="py-10 text-center" role="status">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-900">
                <svg width="26" height="26" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8.5 6.5 12 13 4.5" stroke="#faf7f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-6 font-serif text-3xl text-navy-900">Request received.</h3>
              <p className="mx-auto mt-3 max-w-sm text-mist">
                Thank you. We&apos;ll be in touch within one business day. If it&apos;s urgent, call
                or text {site.phoneDisplay}.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <input type="hidden" name="_subject" value="New TideSafe assessment request" />

              <div className="sm:col-span-2">
                <label htmlFor="name" className={labelCls}>Full name</label>
                <input id="name" name="name" required autoComplete="name" className={input} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="address" className={labelCls}>Property address</label>
                <input id="address" name="address" required autoComplete="street-address" placeholder="e.g. Balboa Island, Newport Beach" className={input} />
              </div>
              <div>
                <label htmlFor="phone" className={labelCls}>Phone</label>
                <input id="phone" name="phone" type="tel" required autoComplete="tel" className={input} />
              </div>
              <div>
                <label htmlFor="email" className={labelCls}>Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" className={input} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="service" className={labelCls}>Assessment</label>
                <select
                  id="service"
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value as ServiceKey | "unsure")}
                  className={input}
                >
                  <option value="unsure">Not sure yet, help me choose</option>
                  <option value="elevation">Property Elevation Assessment ($800)</option>
                  <option value="certified">Certified Survey &amp; Flood Risk Assessment ($3,100)</option>
                </select>
              </div>
              <fieldset className="sm:col-span-2">
                <legend className={labelCls}>Do you know where past high tides reached on your property?</legend>
                <div className="mt-1 flex flex-wrap gap-3">
                  {["Yes", "No", "Not sure"].map((v) => (
                    <label key={v} className="flex cursor-pointer items-center gap-2 rounded-full border border-navy-900/15 bg-white px-4 py-2 text-sm has-[:checked]:border-navy-900 has-[:checked]:bg-navy-900 has-[:checked]:text-white">
                      <input type="radio" name="knows_past_tides" value={v} className="sr-only" defaultChecked={v === "Not sure"} />
                      {v}
                    </label>
                  ))}
                </div>
              </fieldset>
              <div className="sm:col-span-2">
                <label htmlFor="notes" className={labelCls}>
                  Anything we should know? <span className="font-normal text-mist">(optional)</span>
                </label>
                <textarea id="notes" name="notes" rows={3} placeholder="Past flooding, seawall condition, timing…" className={input} />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-full bg-coral px-6 py-4 text-lg font-semibold text-white transition hover:bg-coral-dark disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Schedule a consultation"}
                </button>
                {status === "error" && (
                  <p className="mt-3 text-sm text-coral-dark" role="alert">
                    Sorry, that didn&apos;t go through. Please call or text {site.phoneDisplay} or
                    email <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.
                  </p>
                )}
                <p className="mt-3 text-center text-xs text-mist">
                  We only use your details to contact you about your assessment.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
