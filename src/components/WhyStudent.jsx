import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Tanisha",
    text: "I learned a lot through fun activities and different teaching methods at Medical Mission.",
    company: "SSB Hospital",
    image: "/Images/TANISHA.png",
  },
  {
    id: 2,
    name: "Rakhi",
    text: "Medical Mission is dedicated to making students job-ready and they deliver on their promises.",
    company: "HealthCare India Pvt. Ltd.",
    image: "/Images/rakhi.jpg",
  },
  {
    id: 3,
    name: "Sandeep Bhagel",
    text: "I used to be shy, but after joining Medical Mission my confidence improved daily.",
    company: "MediTech Ltd.",
    image: "/Images/sandeep bhagel.jpg",
  },
  {
    id: 4,
    name: "Rani",
    text: "A supportive and friendly learning environment that helped me grow professionally.",
    company: "Standup India",
    image: "/Images/RANI.png",
  },
];

const StudentSlider = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[active];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter mb-4">
            Why Students{" "}
            <span className="text-red-600 italic">Love Us</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Real experiences from students who transformed their careers with us.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-10 rounded-[2.5rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(225,29,72,0.15)]">

            {/* Quote */}
            <p className="text-xl text-slate-600 leading-relaxed italic mb-8">
              “{current.text}”
            </p>

            {/* User */}
            <div className="flex flex-col items-center">
              <img
                src={current.image}
                alt={current.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-red-600 mb-4"
              />

              <h4 className="text-lg font-black text-slate-900">
                {current.name}
              </h4>

              <p className="text-sm text-slate-500 font-medium">
                {current.company}
              </p>
            </div>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === active ? "bg-red-600 scale-125" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSlider;