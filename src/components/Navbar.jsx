import { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (href) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    { label: "Courses", href: "/courses", type: "page" },
    { label: "Why Us", href: "#edge", type: "anchor" },
    { label: "Placements", href: "#partners", type: "anchor" },
    { label: "Contact", href: "#admissions", type: "anchor" },
  ];

  // 🔥 FINAL CLASS (NO DEFAULT UNDERLINE GUARANTEED)
  const linkClass = `relative text-sm font-semibold uppercase tracking-wide cursor-pointer
  text-black transition-colors duration-300
  no-underline !no-underline hover:no-underline focus:no-underline active:no-underline
  hover:text-red-600
  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600
  after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/80 backdrop-blur-xl shadow-lg border-b border-red-100"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group no-underline">
          <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-black text-xl">+</span>
          </div>
          <span className="font-black text-2xl tracking-tight text-black">
            Medical<span className="text-red-600">Mission</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {links.map((l) =>
              l.type === "page" ? (
                <Link key={l.href} to={l.href} className={linkClass}>
                  {l.label}
                </Link>
              ) : (
                <span
                  key={l.href}
                  onClick={() => scrollToSection(l.href)}
                  className={linkClass}
                >
                  {l.label}
                </span>
              )
            )}
          </div>

          <div className="flex items-center gap-4 border-l border-gray-200 pl-8">
            <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-black">
              <PhoneCall size={16} className="text-red-600" />
              +91 12345 67890
            </div>

            <span
              onClick={() => scrollToSection("#admissions")}
              className="px-6 py-2.5 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition-all hover:shadow-lg hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              Enrol Now
            </span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2.5 rounded-xl bg-red-50 text-red-600 active:scale-90 transition-transform"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 md:hidden bg-white border-b px-6 py-8 shadow-xl space-y-4"
          >
            {links.map((l) =>
              l.type === "page" ? (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-lg font-semibold text-black py-3 border-b no-underline"
                >
                  {l.label}
                </Link>
              ) : (
                <span
                  key={l.href}
                  onClick={() => scrollToSection(l.href)}
                  className="block text-lg font-semibold text-black py-3 border-b cursor-pointer"
                >
                  {l.label}
                </span>
              )
            )}

            <div className="pt-4">
              <span
                onClick={() => scrollToSection("#admissions")}
                className="block text-center rounded-xl bg-red-600 px-5 py-4 text-lg font-semibold text-white cursor-pointer"
              >
                Enrol Now
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;