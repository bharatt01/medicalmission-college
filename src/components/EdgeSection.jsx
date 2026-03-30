import ScrollReveal from "./ScrollReveal";
import { Building2, Microscope, GraduationCap, CheckCircle2 } from "lucide-react";

const edges = [
  {
    icon: Building2,
    title: "Clinical Residencies",
    desc: "Direct access to 15+ Tier-1 hospitals in Faridabad & NCR for clinical rotations and high-priority placements.",
    stat: "15+",
    statLabel: "Partner Hospitals",
    features: ["Apollo", "Fortis", "Metro Group"]
  },
  {
    icon: Microscope,
    title: "Modern Lab Ecosystem",
    desc: "Simulation-driven learning with ₹2Cr+ investment in diagnostic imaging and pathology automation.",
    stat: "₹2Cr+",
    statLabel: "Infrastructure",
    features: ["AI Diagnostics", "Simulation Lab"]
  },
  {
    icon: GraduationCap,
    title: "Board-Certified Faculty",
    desc: "Learn from PhD professors and active medical practitioners who bring real hospital cases to the classroom.",
    stat: "40+",
    statLabel: "Medical Mentors",
    features: ["PhD Professors", "Industry Leads"]
  },
];

const EdgeSection = () => {
  return (
    <section id="edge" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background Decor - Subtle Red radial glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <ScrollReveal>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-4 block">
              The Institution Advantage
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-slate-900 mb-6">
              The <span className="italic text-red-600">Faridabad</span> Edge
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-slate-600 font-medium">
              We bridge the gap between academic theory and clinical mastery with local hospital integrations.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {edges.map((e, i) => (
            <ScrollReveal key={e.title} delay={i * 0.15} direction="up" distance={30}>
              <div className="group h-full relative p-8 lg:p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-red-600/30 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(225,29,72,0.12)]">
                
                {/* Icon Box */}
                <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center text-white mb-8 shadow-lg shadow-red-600/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                  <e.icon size={32} strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                  {e.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                  {e.desc}
                </p>

                {/* Micro-Features List */}
                <ul className="space-y-3 mb-8">
                  {e.features.map(feat => (
                    <li key={feat} className="flex items-center gap-2 text-xs font-bold text-slate-500">
                      <CheckCircle2 size={14} className="text-red-600" />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Bottom Stat Footer */}
                <div className="mt-auto pt-8 border-t border-slate-50">
                  <p className="text-3xl font-black text-red-600 tracking-tighter group-hover:scale-105 transition-transform origin-left">
                    {e.stat}
                  </p>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mt-1">
                    {e.statLabel}
                  </p>
                </div>

                {/* Decorative background element */}
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <e.icon size={120} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EdgeSection;