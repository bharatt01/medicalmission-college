import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { X } from "lucide-react";

const GallerySlider = () => {
  const galleryImages = [
    "/Images/gnew2.jpg",
    "/Images/gnew8.jpg",
    "/Images/g6.jpg",
    "/Images/g77.jpg",
    "/Images/gnew4.jpg",
    "/Images/g88.jpg",
    "/Images/gnew6.jpg",
    "/Images/gnew7.jpg",
  ];

  const [showModal, setShowModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal = (index) => {
    setModalIndex(index);
    setShowModal(true);
  };

  return (
    <section className="relative py-28 bg-[#f8f0f0] overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-400/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black tracking-tight text-black mb-4 font-serif">
            Our <span className="text-red-600 italic">Gallery</span>
          </h2>
          <p className="text-black font-black tracking-tight max-w-xl mx-auto">
            Moments from our campus life and hands-on student experiences.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {galleryImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="group relative rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                onClick={() => openModal(index)}
              >
                <div className="relative rounded-3xl bg-white/50 backdrop-blur-md border border-white/30 p-2 h-72 flex items-center justify-center overflow-hidden">
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover rounded-3xl transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="xl"
        contentClassName="bg-transparent border-0 p-0"
      >
        <div className="relative">
          <img
            src={galleryImages[modalIndex]}
            alt="Full"
            className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
          />
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition"
          >
            <X size={20} />
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default GallerySlider;