import { site } from "@/lib/site";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-navy-900/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" aria-label="TideSafe home" className="text-navy-900">
          <Logo tone="light" />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-navy-900/80 md:flex">
          <a href="#see-it" className="hover:text-navy-900">See the risk</a>
          <a href="#services" className="hover:text-navy-900">Assessments</a>
          <a href="#faq" className="hover:text-navy-900">FAQ</a>
        </nav>
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href={site.phoneHref}
            className="hidden text-sm font-semibold text-navy-900 hover:text-coral sm:block"
          >
            {site.phoneDisplay}
          </a>
          <a
            href="#request"
            className="rounded-full bg-coral px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-coral-dark"
          >
            Schedule a consultation
          </a>
        </div>
      </div>
    </header>
  );
}
