import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  // --- Scrollspy (robust with sticky header) ---
  useEffect(() => {
    const ids = ["#home", "#about", "#projects", "#skills", "#contact"];
    const sections = ids.map((h) => document.querySelector(h)).filter(Boolean);
    if (!sections.length) return;

    const onScroll = () => {
      const headerH = document.querySelector("nav")?.offsetHeight || 88;
      const pos = window.scrollY + headerH + 1; // account for header height
      let current = "#home";

      for (const el of sections) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (pos >= top && pos < bottom) {
          current = `#${el.id}`;
          break;
        }
      }

      // at very bottom → force #contact active
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = "#contact";
      }

      setActive(current);
    };

    onScroll(); // set on load
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // --- Smooth scroll WITH offset + close mobile ---
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;

    const headerH = document.querySelector("nav")?.offsetHeight || 88;
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerH + 1;

    setActive(href); // instant feedback
    window.history.pushState(null, "", href);
    window.scrollTo({ top, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-900/95 text-white backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-red-500 font-extrabold tracking-tight shadow-lg shadow-red-500/20">
              MR
            </div>
            <span className="text-lg font-semibold">Mazen • Portfolio</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 md:flex">
            {links.map(({ name, href }) => {
              const isActive = active === href;
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={[
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      "hover:bg-white/10 hover:shadow",
                      isActive ? "bg-white/10 ring-1 ring-red-400/40 text-red-200" : "text-white",
                    ].join(" ")}
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className={`h-6 w-6 transition ${open ? "rotate-90" : ""}`}
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
            >
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden pb-4 px-4">
          <ul className="space-y-2">
            {links.map(({ name, href }) => {
              const isActive = active === href;
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={[
                      "block rounded-xl px-4 py-3 text-sm font-medium transition",
                      "hover:bg-white/10",
                      isActive ? "bg-white/10 ring-1 ring-red-400/40 text-red-200" : "text-white",
                    ].join(" ")}
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="block w-full rounded-xl bg-red-500 px-4 py-3 text-center text-sm font-semibold shadow-lg shadow-red-500/30 hover:bg-red-600 active:scale-[.99] transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}

      {/* subtle bottom accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
    </nav>
  );
}
