import React from "react";
import ScrollReveal from "./ScrollReveal";

const ScrollLoadingPlacement = () => {
  const companies = [
    "Fortis Hospital",
    "NIMS Hospital",
    "Dr. Poswal Orthopedic Hospital",
    "QRG Morengo Hospital",
    "Umang Super-speciality Hospital",
    "Manavta Hospital",
    "Gaurav Hospital",
    "Shivam Diagnostic Center",
    "Pawan Hospital",
    "Ashirwad Hospital",
    "Apex Hospital",
    "Sunshine Hospital",
    "Anshu Hospital",
    "Drishti Pathlab",
    "Vashistha Pathlab",
    "Focus Diagnostic Center",
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-[#f3e8ea]">

      {/* 🔴 Ambient Red Glow */}
      <div className="absolute top-[-150px] left-[-100px] w-[600px] h-[600px] bg-red-500/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-red-400/15 blur-[140px] rounded-full" />

      {/* 🔴 Red Depth Layer (instead of black) */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/5 via-transparent to-red-900/10" />

      {/* 🧊 Full Glass Background */}
      <div className="absolute inset-0 backdrop-blur-[60px] bg-white/20" />

      {/* ✨ Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <ScrollReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600 mb-4 block">
              Placement Network
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
              Trusted <span className="text-red-600 italic">Hiring Partners</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-slate-700 leading-relaxed">
              We collaborate with leading healthcare organizations to create
              real-world career opportunities.
            </p>
          </ScrollReveal>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <ScrollReveal key={company} delay={index * 0.05}>
              <div className="group relative">

                <div
                  className="
                  relative rounded-2xl 
                  bg-white/50 
                  backdrop-blur-xl 
                  border border-white/40 
                  px-5 py-6 
                  text-center 
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:bg-white/70
                  hover:shadow-[0_20px_40px_-15px_rgba(220,38,38,0.25)]
                "
                >
                  {/* inner shine */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent opacity-60" />

                  {/* hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-red-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

                  <p className="relative z-10 text-sm lg:text-base font-semibold text-slate-800 group-hover:text-red-600 transition">
                    {company}
                  </p>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* FOOTER */}
        <ScrollReveal delay={0.3}>
          <p className="text-center mt-20 text-slate-700">
            Trusted by{" "}
            <span className="text-red-600 font-bold text-lg">
              1100+ Healthcare Organizations
            </span>
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default ScrollLoadingPlacement;