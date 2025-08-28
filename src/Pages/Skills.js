// src/components/Skills.js
export default function Skills() {
  const frontend = [
    { name: "React", icon: "⚛️" },
    { name: "JavaScript (ES6+)", icon: "🟨" },
    { name: "Tailwind CSS", icon: "🌬️" },
    { name: "HTML5", icon: "🧱" },
    { name: "CSS3", icon: "🎨" },
  ];
  const backend = [
    { name: "Laravel", icon: "🟥" },
    { name: "PHP", icon: "🐘" },
    { name: "MySQL", icon: "🗄️" },
    { name: "REST APIs", icon: "🔗" },
    { name: "Auth & CRUD", icon: "🛡️" },
  ];
  const tools = [
    { name: "Git & GitHub", icon: "🔧" },
    { name: "VS Code", icon: "🧩" },
    { name: "Postman", icon: "📮" },
    { name: "npm", icon: "📦" },
    { name: "Figma (basic)", icon: "🖌️" },
  ];
  const learning = ["TypeScript", "Next.js", "Redux Toolkit"];

  return (
    <section id="skills" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-6 text-center md:text-left">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="mt-2 h-px w-20 bg-gradient-to-r from-red-500/60 to-transparent mx-auto md:mx-0" />
        </div>

        {/* Currently learning */}
        <div className="mb-8 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
          <p className="text-sm text-white/70">Currently learning:</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {learning.map((x) => (
              <span key={x} className="text-xs px-3 py-1.5 rounded-xl bg-red-500/15 ring-1 ring-red-400/30 text-red-200">
                {x}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <SkillGroup title="Frontend" items={frontend} />
          <SkillGroup title="Backend" items={backend} />
          <SkillGroup title="Tools" items={tools} />
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ title, items }) {
  return (
    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 shadow">
      <h3 className="text-sm font-semibold tracking-wide text-white/80">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map(({ name, icon }) => (
          <span
            key={name}
            className="text-xs px-3 py-1.5 rounded-xl bg-white/10 ring-1 ring-white/10 text-white/80 hover:bg-white/15 hover:ring-white/20 transition"
            title={name}
          >
            <span className="mr-1.5">{icon}</span>{name}
          </span>
        ))}
      </div>
    </div>
  );
}
