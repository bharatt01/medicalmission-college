import { useNavigate } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import {
  FlaskConical,
  HeartPulse,
  Syringe,
  ScanLine,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";

const courses = [
  {
    title: "DMLT",
    slug: "dmlt",
    subtitle: "Diploma in Medical Lab Technology",
    duration: "2 Years",
    desc: "Master diagnostic techniques in haematology, microbiology, and clinical pathology with hands-on lab practice.",
    icon: FlaskConical,
    accentColor: "from-red-600/30 to-red-600/10",
    iconBg: "bg-red-50",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    title: "B.Sc Nursing",
    slug: "bsc-nursing",
    subtitle: "Bachelor of Science in Nursing",
    duration: "4 Years",
    desc: "Comprehensive nursing education with rotations across top hospitals. Build clinical expertise from day one.",
    icon: HeartPulse,
    accentColor: "from-red-600/30 via-red-600/10 to-red-600/5",
    iconBg: "bg-red-100",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    title: "OT Technician",
    slug: "ot-technician",
    subtitle: "Operation Theatre Technology",
    duration: "2 Years",
    desc: "Advanced training in surgical procedures, sterilisation, and OT management in high-pressure environments.",
    icon: Syringe,
    accentColor: "from-red-600/30 to-red-600/10",
    iconBg: "bg-red-50",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Radiology & Imaging",
    slug: "radiology-imaging",
    subtitle: "Diploma in Radiology",
    duration: "2 Years",
    desc: "Learn X-ray, CT, MRI, and ultrasound imaging using modern, industry-grade digital equipment.",
    icon: ScanLine,
    accentColor: "from-red-600/30 to-red-600/10",
    iconBg: "bg-red-50",
    span: "md:col-span-1 md:row-span-1",
  },
];

const CoursesGrid = () => {
  const navigate = useNavigate();

  return (
    <section id="courses" className="relative py-24 lg:py-32 bg-white">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-200 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <SectionHeader />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 lg:mt-20">
          {courses.map((c, i) => (
            <CourseCard key={c.title} course={c} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.5} className="mt-16 text-center">
          <p className="text-slate-500 font-medium">
            Looking for something else?
            <button
              onClick={() => navigate("/courses")}
              className="ml-2 text-red-600 font-bold hover:underline bg-transparent border-none cursor-pointer"
            >
              View all 15+ specialized programs →
            </button>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

function SectionHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <ScrollReveal>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-widest mb-6">
          <GraduationCap size={14} />
          Academic Excellence
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-slate-900 mb-6">
          Programs Designed for{" "}
          <span className="text-red-600 italic">Real-World</span>{" "}
          Healthcare
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Our industry-aligned curricula combine rigorous theory with hands-on clinical training in top-tier NCR hospitals.
        </p>
      </ScrollReveal>
    </div>
  );
}

function CourseCard({ course, index }) {
  const navigate = useNavigate();
  const Icon = course.icon;

  return (
    <ScrollReveal
      delay={index * 0.1}
      direction="up"
      distance={20}
      className={`${course.span} group`}
    >
      <div
        onClick={() => navigate(`/courses/${course.slug}`)}
        className="h-full relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 lg:p-10 flex flex-col justify-between transition-all duration-500 cursor-pointer
                   hover:shadow-[0_30px_60px_-15px_rgba(225,29,72,0.15)] hover:-translate-y-1"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${course.accentColor} opacity-0 group-hover:opacity-70 transition-opacity duration-700`}
        />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-8">
            <div
              className={`w-14 h-14 rounded-2xl ${course.iconBg} flex items-center justify-center text-red-600 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm`}
            >
              <Icon size={28} strokeWidth={2.5} />
            </div>

            <div className="p-2 rounded-full border border-slate-100 text-slate-400 group-hover:text-red-600 group-hover:border-red-600/30 transition-all duration-300">
              <ArrowUpRight size={20} />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              {course.title}
            </h3>

            <p className="text-sm font-bold text-red-600/90 uppercase tracking-wide">
              {course.subtitle}
            </p>

            <p className="text-slate-600 leading-relaxed pt-2">{course.desc}</p>
          </div>
        </div>

        <div className="relative z-10 mt-10 flex items-center justify-between">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
            {course.duration}
          </div>

          <span className="text-sm font-black text-red-600 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
            Apply Now →
          </span>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default CoursesGrid;