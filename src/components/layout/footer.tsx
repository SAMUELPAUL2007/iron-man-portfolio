import Link from "next/link";
import { Globe, MessageSquare, Share2, ExternalLink } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/suits", label: "Suits" },
  { href: "/technology", label: "Technology" },
  { href: "/timeline", label: "Timeline" },
  { href: "/gallery", label: "Gallery" },
  { href: "/connect", label: "Connect" },
];

const socials = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: MessageSquare, href: "#", label: "Forum" },
  { icon: Share2, href: "#", label: "Share" },
  { icon: ExternalLink, href: "#", label: "Links" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-iron-dark">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-iron-red text-white text-sm font-black">IM</span>
              Iron Man
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-400">
              Genius. Billionaire. Playboy. Philanthropist. Tony Stark — the man in the iron suit who proved that heroism is a choice.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition-all hover:border-iron-arc/50 hover:text-iron-arc hover:shadow-[0_0_20px_rgba(0,191,255,0.2)]"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Pages</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-400 transition-colors hover:text-iron-arc">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Info</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>Stark Industries HQ</li>
              <li>Malibu Point, CA</li>
              <li>Avengers Tower, NYC</li>
              <li className="text-iron-arc">jarvis@stark.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-neutral-500">
          &copy; {new Date().getFullYear()} Iron Man Portfolio. Stark Industries. &ldquo;Iron Man&rdquo; is a trademark of Marvel Characters, Inc.
        </div>
      </div>
    </footer>
  );
}
