import { site } from "@/lib/site";

export default function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-white/10 bg-navy-950/95 p-3 backdrop-blur md:hidden">
      <a
        href={site.phoneHref}
        className="flex-1 rounded-full border border-sand-200/40 py-3 text-center text-sm font-semibold text-sand-50"
      >
        Call
      </a>
      <a
        href="#request"
        className="flex-[2] rounded-full bg-coral py-3 text-center text-sm font-semibold text-white"
      >
        Schedule a consultation
      </a>
    </div>
  );
}
