import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { FaLightbulb, FaBook, FaRocket, FaTrophy } from "react-icons/fa";

const steps = [
  {
    icon: FaLightbulb,
    title: "Discover",
    desc: "Explore new opportunities in healthcare.",
  },
  {
    icon: FaBook,
    title: "Learn",
    desc: "Gain strong medical knowledge with expert guidance.",
  },
  {
    icon: FaRocket,
    title: "Apply",
    desc: "Work in real hospital environments.",
  },
  {
    icon: FaTrophy,
    title: "Achieve",
    desc: "Build a successful healthcare career.",
  },
];

const JourneySection = () => {
  return (
    <section className="relative py-24 bg-[#fafafa] overflow-hidden">

      {/* subtle red glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-red-600/5 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <ScrollReveal>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-4 block">
              Your Journey
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              From Student to{" "}
              <span className="text-red-600 italic">Professional</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-slate-600 mt-4">
              A structured pathway designed to transform beginners into skilled
              healthcare professionals.
            </p>
          </ScrollReveal>
        </div>

        {/* JOURNEY LINE */}
        <div className="relative">

          {/* horizontal line */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-200 to-transparent" />

          <div className="grid md:grid-cols-4 gap-10">

            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <ScrollReveal key={i} delay={i * 0.15}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="text-center relative"
                  >

                    {/* ICON */}
                    <div className="relative z-10 mx-auto w-16 h-16 rounded-2xl bg-white border border-red-100 flex items-center justify-center shadow-md group-hover:shadow-lg transition">
                      <Icon className="text-red-600" size={22} />
                    </div>

                    {/* CONNECT DOT */}
                    <div className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-600 rounded-full" />

                    {/* CARD */}
                    <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-100 hover:border-red-200 transition shadow-sm hover:shadow-lg">
                      <h3 className="font-black text-lg text-slate-900 mb-2">
                        {step.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    {/* STEP NUMBER */}
                    <div className="absolute -top-2 right-4 text-[60px] font-black text-red-50 select-none">
                      {i + 1}
                    </div>

                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default JourneySection;