// Hero: creative finish — gradient title, glow avatar, floating chips, scroll hint
// If import issues with ReactTyped: use `import ReactTyped from "react-typed";`
import { ReactTyped } from "react-typed";
import me from "../assets/me.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 text-white scroll-mt-24"
    >
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-red-500/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" aria-hidden="true" />

      {/* content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[75vh] py-16">
        <div className="grid gap-12 md:grid-cols-2 place-items-center">
          {/* LEFT: text */}
          <div className="text-center md:text-left">
            {/* top pill */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to Frontend / Full-Stack internships
            </span>

            {/* name with gradient */}
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold">
              <span className="bg-gradient-to-r from-red-400 via-pink-300 to-amber-200 bg-clip-text text-transparent">
                Mazen Ramadan
              </span>
            </h1>

            <p className="mt-3 max-w-2xl text-white/80 mx-auto md:mx-0">
              I turn ideas into fast, clean web apps.
            </p>

            {/* Typed roles */}
            <div className="mt-3 text-lg sm:text-xl text-white/80" role="status" aria-live="polite">
              <ReactTyped
                strings={[
                  "Full-Stack Web Developer",
                  "React & Tailwind on the Frontend",
                  "Laravel & MySQL on the Backend",
                  "Quick Learner — Builds Weekly",
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={1200}
                loop
                smartBackspace
                showCursor
                cursorChar="|"
              />
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="#projects" className="rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold shadow-lg shadow-red-500/30 hover:bg-red-600 transition">
                View Projects
              </a>
              <a href="#contact" className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold ring-1 ring-white/15 hover:bg-white/15 transition">
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT: circular photo with glow + floating chips */}
          <div className="w-full flex justify-center md:justify-end">
            <div className="relative">
              {/* soft glow ring */}
              <div
                className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-red-500/30 to-indigo-500/20 blur-2xl"
                aria-hidden="true"
              />
              <img
                src={me}
                alt="Mazen Ramadan headshot"
                loading="eager"
                className="h-56 w-56 sm:h-64 sm:w-64 md:h-80 md:w-80 rounded-full object-cover ring-2 ring-white/20 shadow-2xl shadow-black/30 transition-transform duration-300 hover:scale-105"
              />

              {/* floating skill chips (decorative) */}
              <span className="absolute -left-6 top-6 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/15 backdrop-blur hidden sm:block">
                React ⚛️
              </span>
              <span className="absolute -right-6 top-10 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/15 backdrop-blur hidden md:block">
                Tailwind 🌬️
              </span>
              <span className="absolute -left-4 bottom-10 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/15 backdrop-blur hidden md:block">
                Laravel 🟥
              </span>
              <span className="absolute -right-4 -bottom-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/15 backdrop-blur hidden sm:block">
                MySQL 🗄️
              </span>
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="mt-10 flex justify-center">
          <a
            href="#projects"
            className="group inline-flex flex-col items-center gap-2 text-xs text-white/60 hover:text-white transition"
          >
            <span className="opacity-80">Scroll to projects</span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 group-hover:bg-white/10 transition">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
