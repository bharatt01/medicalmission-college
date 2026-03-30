import React from "react";
import ScrollReveal from "../components/ScrollReveal";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PlacementPage = () => {
 const companies = [
  { name: "Fortis Hospital", img: "/Images/hospital1.jpg" },
  { name: "NIMS Hospital", img: "/Images/hospital2.jpg" },
  { name: "QRG Morengo Hospital", img: "/Images/hospital3.jpg" },
  { name: "Umang Hospital", img: "/Images/hospital4.jpg" },
  { name: "Apex Hospital", img: "/Images/hospital5.jpg" },
  { name: "Sunshine Hospital", img: "/Images/hospital6.jpg" },
  { name: "Manavta Hospital", img: "/Images/hospital7.jpg" },
  { name: "Gaurav Hospital", img: "/Images/hospital8.jpg" },
  { name: "Shivam Diagnostic", img: "/Images/hospital9.jpg" },
  { name: "Pawan Hospital", img: "/Images/hospital10.jpg" },
  { name: "Ashirwad Hospital", img: "/Images/hospital11.jpg" },
  { name: "Drishti Pathlab", img: "/Images/hospital12.jpg" },
];

  const studentStories = [
    {
      name: "Rohit Sharma",
      position: "Lab Technician",
      company: "Fortis Hospital",
      image: "/Images/student1.jpg",
      quote: "Training here made me confident from day one.",
    },
    {
      name: "Anjali Mehta",
      position: "Nursing Staff",
      company: "NIMS Hospital",
      image: "/Images/student2.jpg",
      quote: "Best decision of my career journey.",
    },
    {
      name: "Vikram Singh",
      position: "Radiology Assistant",
      company: "QRG Hospital",
      image: "/Images/student3.jpg",
      quote: "Real hospital exposure changed everything.",
    },
  ];

  return (
    <>
      <Navbar />
<div className="mt-24">
      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center text-white">
        <img
          src="/Images/placement.jpg"
          alt="placement"
          className="absolute inset-0 w-full h-full object-cover"
        />

<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
<div className="absolute inset-0 bg-red-600/20" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl lg:text-6xl font-black font-serif mb-6">
            100% Placement Support
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            We connect our students with top hospitals and healthcare
            organizations across the region.
          </p>
        </div>
      </section>

      {/* COMPANIES */}
   {/* COMPANIES */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <ScrollReveal>
      <h2 className="text-4xl font-black text-center mb-16">
        Our Hiring Partners
      </h2>
    </ScrollReveal>

    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      spaceBetween={30}
    >
      {[...Array(Math.ceil(companies.length / 6))].map((_, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">

            {companies.slice(i * 6, i * 6 + 6).map((c, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  
                  {/* Image */}
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 flex items-end p-6">
                    <h3 className="text-white text-lg font-bold">
                      {c.name}
                    </h3>
                  </div>

                </div>
              </ScrollReveal>
            ))}

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

      {/* STUDENT STORIES */}
      <section className="py-24 bg-[#f8f0f0]">
        <div className="max-w-7xl mx-auto px-6">

          <ScrollReveal>
            <h2 className="text-4xl font-black text-center mb-16">
              Student Success Stories
            </h2>
          </ScrollReveal>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500 }}
            loop
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 3 },
            }}
          >
            {studentStories.map((s, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  
                  {/* Image */}
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-60 object-cover"
                  />

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h4 className="font-black text-lg">{s.name}</h4>
                    <p className="text-red-600 text-sm mb-2">
                      {s.position}
                    </p>
                    <p className="text-gray-500 text-sm mb-3">
                      {s.company}
                    </p>
                    <p className="italic text-gray-600 text-sm">
                      "{s.quote}"
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-red-600 text-white text-center">
        <h2 className="text-4xl font-black mb-6">
          Start Your Career Today
        </h2>
        <p className="mb-6 text-lg">
          Join our program and get placed in top hospitals.
        </p>
        <button className="bg-white text-red-600 px-8 py-3 rounded-xl font-bold hover:scale-105 transition">
          Apply Now
        </button>
      </section>
</div>
      <Footer />
    </>
  );
};

export default PlacementPage;