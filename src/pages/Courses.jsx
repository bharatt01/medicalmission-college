import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { 
  Search, 
  Clock, 
  GraduationCap, 
  BookOpen, 
  Stethoscope, 
  Microscope, 
  Activity, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const allCourses = [
  {
    id: 1,
    category: "Nursing",
    title: "B.Sc Nursing",
    duration: "4 Years",
    level: "Degree",
    icon: Stethoscope,
    description: "A comprehensive program focusing on clinical excellence, patient care, and healthcare management.",
    syllabus: ["Anatomy & Physiology", "Nutrition", "Medical-Surgical Nursing", "Community Health"],
    outcomes: ["Staff Nurse", "Nursing Supervisor", "Clinical Instructor"],
    color: "bg-red-600"
  },
  {
    id: 2,
    category: "Technician",
    title: "DMLT",
    duration: "2 Years",
    level: "Diploma",
    icon: Microscope,
    description: "Diploma in Medical Laboratory Technology. Master the art of diagnostics and lab automation.",
    syllabus: ["Hematology", "Clinical Biochemistry", "Microbiology", "Histopathology"],
    outcomes: ["Lab Technician", "Lab Manager", "Research Assistant"],
    color: "bg-slate-900"
  },
  {
    id: 3,
    category: "Technician",
    title: "OT Technician",
    duration: "2 Years",
    level: "Diploma",
    icon: Activity,
    description: "Specialized training in managing operation theatres, surgical instruments, and anesthesia assistance.",
    syllabus: ["OT Management", "Surgical Procedures", "Anesthesia Tech", "Sterilization"],
    outcomes: ["OT Assistant", "Surgical Tech", "Sterilization Expert"],
    color: "bg-red-600"
  },
  {
    id: 4,
    category: "Radiology",
    title: "Radiology & Imaging",
    duration: "2 Years",
    level: "Diploma",
    icon: BookOpen,
    description: "Learn to operate advanced X-Ray, CT, and MRI machines with focus on radiation safety.",
    syllabus: ["Radiographic Physics", "Imaging Tech", "Patient Care", "Radiation Protection"],
    outcomes: ["Radiographer", "CT Scan Tech", "MRI Assistant"],
    color: "bg-slate-900"
  }
];

const CoursesPage = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Nursing", "Technician", "Radiology"];

  const filteredCourses = filter === "All" 
    ? allCourses 
    : allCourses.filter(c => c.category === filter);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 bg-white">
        {/* 1. Header Section */}
        <section className="relative py-20 bg-red-600 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#e11d48_0%,transparent_70%)] opacity-30" />
          </div>
          <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
            <ScrollReveal>
              <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter mb-6">
                Our Medical <span className="text-white italic font-serif">Programs</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-red-100 text-lg max-w-2xl mx-auto font-medium">
                Explore our range of government-approved healthcare courses designed to turn students into clinical experts.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* 2. Filter & Search Bar */}
        <section className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-xl border-b border-slate-100 py-4">
          <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    filter === cat 
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/20" 
                    : "bg-slate-100 text-slate-600 hover:bg-red-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search courses..." 
                className="w-full pl-12 pr-4 py-2.5 rounded-full border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-red-600/20"
              />
            </div>
          </div>
        </section>

        {/* 3. Course List */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-12">
              <AnimatePresence mode="popLayout">
                {filteredCourses.map((course, idx) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    key={course.id}
                    className="group grid lg:grid-cols-12 gap-8 items-center p-8 lg:p-12 rounded-[3rem] border border-slate-100 bg-white hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-500"
                  >
                    {/* Visual Column */}
                    <div className="lg:col-span-4 relative">
                      <div className={`aspect-square rounded-[2rem] ${course.color} flex items-center justify-center text-white shadow-2xl relative overflow-hidden`}>
                        <course.icon size={120} strokeWidth={1} className="opacity-20 absolute scale-150 rotate-12" />
                        <course.icon size={80} className="relative z-10" />
                      </div>
                    </div>

                    {/* Info Column */}
                    <div className="lg:col-span-8 space-y-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-4 py-1 rounded-full bg-red-100 text-red-700 text-xs font-black uppercase tracking-widest">
                          {course.level}
                        </span>
                        <span className="flex items-center gap-2 text-slate-500 text-sm font-bold">
                          <Clock size={16} className="text-red-600" />
                          {course.duration}
                        </span>
                      </div>

                      <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter">
                        {course.title}
                      </h2>
                      
                      <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
                        {course.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-8 py-6 border-y border-slate-100">
                        <div>
                          <h4 className="text-sm font-black uppercase tracking-widest text-red-600 mb-4 flex items-center gap-2">
                            <BookOpen size={16} /> Key Syllabus
                          </h4>
                          <ul className="space-y-2">
                            {course.syllabus.map(s => (
                              <li key={s} className="flex items-center gap-2 text-slate-700 font-medium italic">
                                <CheckCircle2 size={14} className="text-red-600" /> {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-4 flex items-center gap-2">
                            <GraduationCap size={16} /> Career Roles
                          </h4>
                          <ul className="space-y-2">
                            {course.outcomes.map(o => (
                              <li key={o} className="flex items-center gap-2 text-slate-500 font-bold">
                                <ArrowRight size={14} className="text-red-600" /> {o}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <button className="px-8 py-4 rounded-2xl bg-red-600 text-white font-black hover:bg-red-700 transition-all shadow-lg shadow-red-600/20">
                          Download Prospectus
                        </button>
                        <button className="px-8 py-4 rounded-2xl border-2 border-slate-200 font-black text-slate-900 hover:border-red-600 transition-all">
                          Enquire Now
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CoursesPage;