import { techs } from "../lib/Tech";

const categories = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "cloud", label: "Cloud" },
  { key: "ai/ml", label: "AI/ML" },
  { key: "tool", label: "Tool" },
  { key: "deployment", label: "Deployment" },
  { key: "other", label: "Other" },
];

function TechCategory({ categoryKey, label }: { categoryKey: string; label: string }) {
  const filtered = techs.filter((t) => t.category === categoryKey);
  if (filtered.length === 0) return null;
  return (
    <div className="flex flex-row items-start">
      <div className="text-2xl text-gray-300 font-semibold min-w-[120px]">
        <p>{label}</p>
      </div>
      <div className="flex flex-wrap items-start justify-start gap-4 ml-20 mb-10">
        {filtered.map((t) => (
          <div
            key={t.name}
            className="flex items-center gap-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-center"
          >
            {t.icon}
            <span>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Stack() {
  return (
    <section id="stack" className="snap-section mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-semibold mb-6">My Stack</h1>
        {categories.map((cat) => (
          <TechCategory key={cat.key} categoryKey={cat.key} label={cat.label} />
        ))}
      </div>
    </section>
  );
}

export default Stack;