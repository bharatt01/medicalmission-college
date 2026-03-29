import { useRef, useEffect, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Users, Briefcase, MapPin, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { icon: Users, value: 8000, suffix: "+", label: "Students Trained" },
  { icon: Briefcase, value: 1100, suffix: "+", label: "Job Partners" },
  { icon: MapPin, value: 2, suffix: "+", label: "Campuses" },
  { icon: TrendingUp, value: 98, suffix: "%", label: "Placement Rate" },
];

const Counter = ({ target, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      motionValue.set(target);
    }
  }, [inView, target, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });

    return () => unsubscribe();
  }, [springValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="relative -mt-16 lg:-mt-24 z-30 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal
              key={stat.label}
              delay={i * 0.1}
              direction="up"
              distance={30}
            >
              <div className="group relative overflow-hidden rounded-[2rem] p-6 lg:p-10 text-center transition-all duration-500 hover:-translate-y-2">
                
                {/* Glass Background */}
                <div className="absolute inset-0 bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.05)]" />

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-red-600/5 via-transparent to-transparent" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <stat.icon size={28} strokeWidth={2.5} />
                  </div>

                  {/* Counter */}
                  <div className="text-3xl lg:text-5xl font-black text-slate-900 mb-2 tracking-tighter">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <div className="text-xs lg:text-sm text-red-600/80 font-black uppercase tracking-[0.15em]">
                    {stat.label}
                  </div>
                </div>

                {/* Background Icon */}
                <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:rotate-12 transition-transform duration-700">
                  <stat.icon size={100} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;