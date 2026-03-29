import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaBook, FaRocket, FaTrophy } from "react-icons/fa";

const steps = [
  {
    icon: FaLightbulb,
    title: "Discover",
    desc: "Explore new opportunities and open your mind to new possibilities.",
  },
  {
    icon: FaBook,
    title: "Learn",
    desc: "Build strong medical knowledge with structured learning and guidance.",
  },
  {
    icon: FaRocket,
    title: "Apply",
    desc: "Gain real-world experience through clinical training and exposure.",
  },
  {
    icon: FaTrophy,
    title: "Achieve",
    desc: "Step into a successful healthcare career with confidence.",
  },
];

const StudentTimeline = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter mb-4">
            Student’s Path to{" "}
            <span className="text-red-600 italic font-serif">Excellence</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A simple and proven journey that transforms students into skilled healthcare professionals.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 w-[2px] h-full bg-slate-200" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative pl-16"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white shadow-md">
                    <Icon size={18} />
                  </div>

                  {/* Content */}
                  <div className="border border-slate-200 rounded-2xl p-6 bg-white transition hover:shadow-lg">
                    <h3 className="text-xl font-black text-slate-900 mb-2">
                      Step {index + 1}: {step.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default StudentTimeline;