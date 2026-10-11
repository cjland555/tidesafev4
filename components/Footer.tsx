import { site } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy-950 pb-28 pt-14 text-sand-200 md:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <Logo tone="dark" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand-200/80">
            Flood risk assessments for waterfront homes on Newport Harbor.
          </p>
        </div>
        <div>
          <h3 className="eyebrow text-sand-400">Serving</h3>
          <p className="mt-3 text-sm leading-relaxed">{site.serviceArea.join(" · ")}</p>
        </div>
        <div>
          <h3 className="eyebrow text-sand-400">Contact</h3>
          <ul className="mt-3 space-y-1 text-sm">
            <li><a className="hover:text-white" href={site.phoneHref}>{site.phoneDisplay}</a></li>
            <li><a className="hover:text-white" href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a className="hover:text-white underline underline-offset-4 decoration-white/30" href="/TideSafe-Flyer.pdf" download>Download the flyer (PDF)</a></li>
          </ul>
          <a
            href="#request"
            className="mt-5 inline-block rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-white hover:bg-coral-dark"
          >
            Schedule a consultation
          </a>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-4 pt-6 text-xs text-sand-200/60 sm:px-6">
        © {new Date().getFullYear()} TideSafe · Newport Beach, California
      </div>
    </footer>
  );
}
