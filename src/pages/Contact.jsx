import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (Integrate with backend later)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <div className="mt-24">
        {/* HERO */}
        <section className="relative h-[70vh] flex items-center overflow-hidden bg-white">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: "url('/Images/contact.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-700/60 via-red-600/40 to-transparent" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <ScrollReveal>
              <h1 className="text-5xl lg:text-6xl font-black text-white drop-shadow-lg">
                Get in <span className="text-red-200 italic">Touch</span>
              </h1>
              <p className="text-white/90 mt-4 text-lg max-w-2xl mx-auto drop-shadow-md">
                Have a question? Want to join our programs or need more information? Reach out to us today!
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* MAIN CONTACT SECTION */}
        <section className="py-24 bg-[#f8f8f8]">
          <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12">

            {/* FORM */}
            <ScrollReveal>
              <form 
                className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100"
                onSubmit={handleSubmit}
              >
                <h2 className="text-3xl font-black text-slate-900 mb-6">Send Us a Message</h2>

                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-600/30 focus:outline-none transition"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-600/30 focus:outline-none transition"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={6}
                    required
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-600/30 focus:outline-none transition resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="mt-6 px-10 py-4 rounded-2xl bg-red-600 text-white font-bold hover:bg-red-700 shadow-lg hover:-translate-y-1 transition"
                >
                  Submit
                </button>
              </form>
            </ScrollReveal>

            {/* CONTACT INFO */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-10">
                <h2 className="text-3xl font-black text-slate-900 mb-6">Contact Information</h2>

                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-xl bg-red-50 text-red-600">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="font-black text-slate-900">Email Us</p>
                    <p className="text-slate-600">info@medicalmission.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-xl bg-red-50 text-red-600">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="font-black text-slate-900">Call Us</p>
                    <p className="text-slate-600">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-xl bg-red-50 text-red-600">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <p className="font-black text-slate-900">Visit Us</p>
                    <p className="text-slate-600">123 Medical Mission Rd, Delhi, India</p>
                  </div>
                </div>

                {/* Optional map */}
                <div className="w-full h-64 rounded-2xl overflow-hidden border border-slate-100 shadow-lg mt-8">
                  <iframe
                    title="Medical Mission Location"
                    className="w-full h-full border-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.999848425619!2d77.21045541508633!3d28.60211998239437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce43c7f2e2d27%3A0xa7b3ee0551a8a037!2sDelhi!5e0!3m2!1sen!2sin!4v1682888100000!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>

          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;