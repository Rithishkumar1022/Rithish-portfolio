import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { resumeData } from "../data/resume";

export function NavbarFloating() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        style={{
          backgroundColor,
          backdropFilter: backdropBlur,
          WebkitBackdropFilter: backdropBlur,
        }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled
            ? "shadow-2xl shadow-black/5"
            : ""
        }`}
      >
        <div className={`px-6 py-4 rounded-full border transition-colors duration-300 ${
          isScrolled ? "border-foreground/10" : "border-white/20"
        }`}>
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Logo */}
            <a
              href="#"
              className="font-bold text-lg text-foreground hover:text-primary transition-colors duration-300"
            >
              {resumeData.alias}
            </a>

            {/* Nav links */}
            <div className="flex items-center gap-1">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile navigation toggle */}
          <div className="md:hidden flex items-center justify-between gap-4">
            <a
              href="#"
              className="font-bold text-lg text-foreground"
            >
              {resumeData.alias}
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -20,
          pointerEvents: isOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-3rem)]"
      >
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl border border-foreground/10 shadow-2xl overflow-hidden">
          <div className="p-6 space-y-2">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 rounded-2xl text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile menu backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
        />
      )}
    </>
  );
}