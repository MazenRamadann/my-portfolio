// Simple projects grid with demo/code links.
// Replace items with your real projects when ready.
export default function Projects() {
  const items = [
    {
       title: "Portfolio",
      desc: "Personal site with React + Tailwind, typed hero, projects, contact form.",
      img: "https://media.licdn.com/dms/image/v2/D4E2DAQG6kEazoGM4cA/profile-treasury-image-shrink_800_800/B4EZjgJMqNGoAc-/0/1756107166083?e=1757764800&v=beta&t=WT2TDmfRR3oo1ZMnB7S-F9j1yUW3widp5VxrWMJrVns", // replace with your screenshot
      tags: ["React", "Tailwind", "UI", "Formspree"],
      demo: "#",   // e.g. https://mazen.dev
      code: "#", 
    },
    {
    title: "HR System",
      desc: "Employee CRUD, auth, roles/permissions, and departments. Clean UI + REST API.",
      img: "https://media.licdn.com/dms/image/v2/D4E2DAQFQvRsoaXBomg/profile-treasury-image-shrink_800_800/B4EZjgGfgIGYAY-/0/1756106455755?e=1757764800&v=beta&t=yNBhT-R6hmV94FzxRlUDULLQ18YxQbTYS8V_VbWQYU8", // replace with your screenshot
      tags: ["Featured", "Laravel", "PHP", "MySQL", "REST API", "Auth", "CRUD"],
      demo: "#",   // e.g. https://hr.mazen.dev
      code: "#",   // e.g. https://github.com/MazenRamadann/hr-system
    },
    {
      title: "Job Board API",
      desc: "Laravel REST API: auth, CRUD, pagination.",
      img: "https://i.ytimg.com/vi/3xRMUDC74Cw/maxresdefault.jpg",
      tags: ["Laravel", "MySQL"],
      demo: "#",
      code: "#",
    },
  ];

  return (
    <section id="projects" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-6 text-center md:text-left">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="mt-2 h-px w-20 bg-gradient-to-r from-red-500/60 to-transparent mx-auto md:mx-0" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <div key={p.title} className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 shadow hover:shadow-lg transition">
              <img src={p.img} alt={p.title} className="h-44 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.desc}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 ring-1 ring-white/10 text-white/80">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-3">
                  <a href={p.demo} target="_blank" rel="noreferrer"
                     className="rounded-lg bg-red-500 px-3 py-2 text-xs font-semibold shadow-lg shadow-red-500/30 hover:bg-red-600 transition">
                    Live Demo
                  </a>
                  <a href={p.code} target="_blank" rel="noreferrer"
                     className="rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold ring-1 ring-white/15 hover:bg-white/15 transition">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
