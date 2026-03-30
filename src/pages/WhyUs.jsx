import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import {
  Building2,
  Microscope,
  GraduationCap,
  CheckCircle2,
  Users,
  Stethoscope,
  Award,
} from "lucide-react";

const edges = [
  {
    icon: Building2,
    title: "Clinical Residencies",
    desc: "Direct access to 15+ Tier-1 hospitals in NCR for real-world clinical exposure.",
    stat: "15+",
    statLabel: "Partner Hospitals",
    features: ["Apollo", "Fortis", "Metro Group"],
  },
  {
    icon: Microscope,
    title: "Modern Lab Ecosystem",
    desc: "Hands-on training with advanced diagnostic labs and simulation systems.",
    stat: "₹2Cr+",
    statLabel: "Infrastructure",
    features: ["AI Diagnostics", "Simulation Lab"],
  },
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    desc: "Learn from experienced doctors and PhD-level educators.",
    stat: "40+",
    statLabel: "Mentors",
    features: ["Doctors", "Industry Experts"],
  },
];

const highlights = [
  {
    icon: Users,
    title: "Student-Centric Learning",
    desc: "Small batches ensure personal attention and better understanding.",
  },
  {
    icon: Stethoscope,
    title: "Hospital Exposure",
    desc: "Real patient interaction and live case studies.",
  },
  {
    icon: Award,
    title: "Placement Focused",
    desc: "Dedicated placement support with industry tie-ups.",
  },
];

const WhyUsPage = () => {
  return (
    <>
      <Navbar />
  <div className="mt-24">
      {/* HERO */}
      <section className="relative h-[75vh] flex items-center overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-105"
    style={{ backgroundImage: "url('/Images/whyus-hero.jpg')" }}
  />

  {/* Base Dark Layer (for readability) */}
  <div className="absolute inset-0 bg-black/50" />

  {/* RED OVERLAY (Correct way) */}
  <div className="absolute inset-0 bg-gradient-to-r from-red-700/70 via-red-600/40 to-transparent" />

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6">

    <div className="max-w-2xl">
      
    <h1 className="text-5xl lg:text-6xl font-black font-serif text-white mb-6 leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
  Why Choose <span className="text-white">Medical Mission</span>
</h1>

      <p className="text-white/85 text-lg mb-8">
        We don’t just teach — we build careers with real hospital exposure,
        expert mentorship, and strong placement support.
      </p>

      <button className="px-8 py-3 bg-white text-red-600 font-semibold rounded-xl hover:bg-gray-100 transition shadow-lg">
        Explore Programs
      </button>

    </div>
  </div>
</section>

      {/* EDGE SECTION */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-slate-900">
                Our Competitive Edge
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {edges.map((e, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="group h-full p-8 rounded-3xl bg-white border border-slate-100 hover:border-red-600/30 transition-all duration-500 hover:shadow-xl">

                  <div className="w-14 h-14 bg-red-600 text-white rounded-xl flex items-center justify-center mb-6">
                    <e.icon size={28} />
                  </div>

                  <h3 className="text-xl font-black mb-3">{e.title}</h3>
                  <p className="text-slate-600 mb-4">{e.desc}</p>

                  <ul className="mb-6 space-y-2">
                    {e.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 size={14} className="text-red-600" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="text-red-600 font-black text-2xl">
                    {e.stat}
                  </div>
                  <p className="text-xs text-slate-400 uppercase">
                    {e.statLabel}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-24 bg-[#f8f0f0]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl font-black text-slate-900">
                What Makes Us Different
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((h, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
                  <h.icon className="text-red-600 mb-4" size={32} />
                  <h3 className="font-black text-lg mb-2">{h.title}</h3>
                  <p className="text-slate-600 text-sm">{h.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-red-600 text-white text-center">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-4xl font-black">1000+</h3>
            <p className="text-sm">Students Placed</p>
          </div>
          <div>
            <h3 className="text-4xl font-black">95%</h3>
            <p className="text-sm">Placement Rate</p>
          </div>
          <div>
            <h3 className="text-4xl font-black">15+</h3>
            <p className="text-sm">Hospitals</p>
          </div>
          <div>
            <h3 className="text-4xl font-black">5+</h3>
            <p className="text-sm">Years Experience</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-white">
        <h2 className="text-4xl font-black mb-6">
          Start Your Medical Career Today
        </h2>
        <p className="text-slate-600 mb-6">
          Join Medical Mission and transform your future.
        </p>
        <button className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition">
          Apply Now
        </button>
      </section>
</div>
      <Footer />
    </>
  );
};

export default WhyUsPage;