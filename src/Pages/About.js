// Simple, responsive About section for your portfolio.
// - Uses only .js
// - Matches dark/red palette
// - Includes short bio, highlights, and CTA buttons

export default function About() {
  const highlights = [
    "Full-Stack: React (Frontend) + Laravel (Backend)",
    "Clean, responsive UIs with Tailwind CSS",
    "REST APIs, basic auth, CRUD, MySQL",
    "Quick learner — shipping projects weekly",
  ];

  return (
    <section id="about" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold">About</h2>
          <div className="mt-2 h-px w-20 bg-gradient-to-r from-red-500/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="grid items-start gap-8 md:grid-cols-5">
          {/* Text */}
          <div className="md:col-span-3">
            <p className="text-white/80 leading-relaxed">
              I’m <span className="font-semibold">Mazen Ramadan</span>, a
              <span className="font-semibold"> Full-Stack Web Developer</span> focused on
              building fast, clean interfaces with <span className="font-semibold">React</span> &{" "}
              <span className="font-semibold">Tailwind</span>, and practical backends with{" "}
              <span className="font-semibold">Laravel + MySQL</span>. I enjoy learning by
              doing—turning ideas into small projects and improving them step by step.
            </p>

            {/* Highlights */}
            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/85">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500/20 ring-1 ring-red-400/30">
                    {/* check icon */}
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
                    <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
                      <a
              aria-disabled="true"
              className="rounded-xl px-5 py-3 text-sm font-semibold bg-white/5 text-white/50 ring-1 ring-white/10 cursor-not-allowed"
            >
              CV coming soon
            </a>
            <a
                href="https://github.com/MazenRamadann"  // your GitHub
                target="_blank" rel="noreferrer"
                className="rounded-xl bg-white/5 px-5 py-3 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10 transition"
            >
                GitHub
            </a>
            <a
                href="https://www.linkedin.com/in/mazen-ramadan-b01b3333b/"  // your LinkedIn
                target="_blank" rel="noreferrer"
                className="rounded-xl bg-white/5 px-5 py-3 text-sm font-semibold ring-1 ring-white/10 hover:bg-white/10 transition"
            >
                LinkedIn
            </a>
            </div>
          </div>

          {/* Side card (photo / stats) */}
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-lg">
              {/* avatar / banner */}
              <div className="h-28 w-full bg-gradient-to-r from-red-500/30 via-pink-500/20 to-amber-400/20" />
              <div className="-mt-10 px-6 pb-6">
                <div className="h-20 w-20 rounded-2xl ring-2 ring-white/20 bg-white/10 backdrop-blur grid place-items-center">
                  <span className="text-lg font-bold">MR</span>
                  
                </div>

                <h3 className="mt-4 text-lg font-semibold">Mazen Ramadan</h3>
                <p className="text-sm text-white/70">Full-Stack Web Developer</p>

                {/* mini stats */}
                <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-xl bg-white/5 py-3 ring-1 ring-white/10">
                    <div className="text-xl font-bold">10+</div>
                    <div className="text-xs text-white/70">Projects</div>
                  </div>
                  <div className="rounded-xl bg-white/5 py-3 ring-1 ring-white/10">
                    <div className="text-xl font-bold">React</div>
                    <div className="text-xs text-white/70">Frontend</div>
                  </div>
                  <div className="rounded-xl bg-white/5 py-3 ring-1 ring-white/10">
                    <div className="text-xl font-bold">Laravel</div>
                    <div className="text-xs text-white/70">Backend</div>
                  </div>
                </div>

                {/* location / education (optional, edit as needed) */}
                <div className="mt-5 space-y-2 text-sm text-white/70">
                {/* location / availability / contact */}
<div className="mt-5 space-y-2 text-sm text-white/70">
  <div>📍 Beirut, Lebanon</div>
  <div>💼 Open to Frontend / Full-Stack Internships</div>
  <div>
    📧 <a href="mailto:mazenramadan2004@gmail.com" className="hover:text-white">mazenramadan2004@gmail.com</a>
  </div>
</div>

                </div>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </section>
  );
}
