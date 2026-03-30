import { useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
const Navigate = useNavigate();  

  const links = [
    { label: "Courses", href: "/courses", type: "page" },
    { label: "Why Us", href: "/why-us", type: "page" },
    { label: "Placements", href: "/placements", type: "page" },
    { label: "Contact", href: "/contact", type: "page" },
  ];

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

  const isActive = (href, type) => type === "page" && location.pathname === href;

  const linkClass = (active) =>
    `relative inline-flex items-center text-xs font-bold uppercase tracking-[0.15em] cursor-pointer
     transition-all duration-300 pb-1 ${active ? "text-red-600" : "text-black"} 
     hover:text-red-600 no-underline`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] py-4 bg-red-50/95 backdrop-blur-md border-b border-red-200/50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group no-underline">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center shadow-md group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-black text-xl">+</span>
          </div>
          <span className="font-black text-2xl tracking-tighter text-black uppercase">
            Medical<span className="text-red-600">Mission</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {links.map((l) => {
              const active = isActive(l.href, l.type);
              return (
                <Link key={l.href} to={l.href} className={linkClass(active)}>
                  {l.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-red-600 transition-all duration-300
                    ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-6 border-l border-red-200 pl-8">
            <div className="hidden lg:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/70">
              <PhoneCall size={14} className="text-red-600" />
              +91 8750768101
            </div>

            <button
              onClick={() => Navigate("/contact")   }
              className="px-6 py-2.5 rounded-none bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-red-600 transition-all active:scale-95"
            >
              Enrol Now
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg bg-red-100 text-red-600 active:scale-90 transition-transform"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 md:hidden bg-white border-b border-red-200 px-6 py-8 shadow-2xl space-y-4"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-bold uppercase tracking-widest text-black py-4 border-b border-gray-50 no-underline"
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => Navigate("/contact")}
              className="block w-full text-center bg-red-600 px-5 py-4 text-sm font-bold uppercase tracking-widest text-white no-underline"
            >
              Enrol Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;