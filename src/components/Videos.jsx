import React from "react";
import ScrollReveal from "./ScrollReveal";

const VideoCardsSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-red-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* GRID (fixed layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="order-1">
            
            <ScrollReveal>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-4 block">
                Media & Insights
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-slate-900 mb-6">
                Watch Our{" "}
                <span className="text-red-600 italic font-serif">
                  Journey
                </span>{" "}
                in Action
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Explore our latest videos featuring real student journeys,
                expert insights, and behind-the-scenes learning experiences.
                Get a closer look at how we transform ambition into real-world
                healthcare success.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <button className="mt-8 px-8 py-4 rounded-2xl bg-red-600 text-white font-black hover:bg-red-700 transition-all shadow-lg shadow-red-600/20 hover:-translate-y-1 active:scale-95">
                Visit YouTube Channel →
              </button>
            </ScrollReveal>
          </div>

          {/* RIGHT VIDEO */}
          <div className="order-2">
            <ScrollReveal delay={0.2}>
              <div className="group relative rounded-[2rem] overflow-hidden border border-slate-200 bg-white shadow-[0_30px_60px_-15px_rgba(225,29,72,0.15)] transition-all duration-500 hover:-translate-y-2">
                
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                {/* Video */}
                <div className="relative aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/nrm8Rjgsy4k"
                    title="YouTube Video"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                {/* Caption */}
                <div className="relative z-20 p-6">
                  <h4 className="text-lg font-black text-slate-900">
                    Medical Mission Campus Life
                  </h4>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    Real insights. Real students. Real growth.
                  </p>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoCardsSection;