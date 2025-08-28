// Simple, responsive footer for your portfolio (.js only).
export default function Footer() {
  const year = new Date().getFullYear();

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // smooth-scroll with sticky header offset (same logic as navbar)
  const handleAnchor = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;
    const headerH = document.querySelector("nav")?.offsetHeight || 88;
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerH + 1;
    window.history.pushState(null, "", href);
    window.scrollTo({ top, behavior: "smooth" });
  };

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer
      className="bg-slate-950 text-white border-t border-white/10"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Top row */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Brand (click scrolls with offset) */}
          <a
            href="#home"
            onClick={(e) => handleAnchor(e, "#home")}
            className="flex items-center gap-3 group"
            aria-label="Back to home"
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-red-500 font-extrabold shadow-lg shadow-red-500/20">
              MR
            </div>
            <span className="text-lg font-semibold">
              <span className="bg-gradient-to-r from-red-400 via-pink-300 to-amber-200 bg-clip-text text-transparent">
                Mazen
              </span>{" "}
              • Portfolio
            </span>
          </a>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-3 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => handleAnchor(e, l.href)}
                    className="rounded-lg px-3 py-1.5 text-white/80 hover:text-white hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/60"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/MazenRamadann"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/60"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.35-1.78-1.35-1.78-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.79.42-1.31.76-1.61-2.67-.31-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.57.12-3.28 0 0 1.01-.32 3.3 1.23a11.45 11.45 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.71.24 2.97.12 3.28.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22 0 1.61-.02 2.9-.02 3.29 0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" clipRule="evenodd"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mazen-ramadan-b01b3333b/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/60"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452H17.21v-5.569c0-1.328-.026-3.036-1.85-3.036-1.853 0-2.136 1.447-2.136 2.943v5.662H9.0V9h3.111v1.561h.044c.434-.823 1.494-1.69 3.074-1.69 3.29 0 3.895 2.165 3.895 4.983v6.598ZM5.337 7.433a1.814 1.814 0 1 1 0-3.628 1.814 1.814 0 0 1 0 3.628ZM6.9 20.452H3.77V9H6.9v11.452Z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom row */}
        <div className="flex flex-col-reverse items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-xs text-white/60">© {year} Mazen Ramadan. All rights reserved.</p>


          <button
            onClick={goTop}
            className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 text-xs ring-1 ring-white/10 hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/60"
            aria-label="Back to top"
            title="Back to top"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19V5" />
              <path d="m5 12 7-7 7 7" />
            </svg>
            Back to top
          </button>
        </div>
      </div>

      {/* subtle accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
    </footer>
  );
}
