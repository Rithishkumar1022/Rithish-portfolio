import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { resumeData } from "../data/resume";

export function NavbarPro() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "backdrop-blur-xl border-b border-neutral-200/50" : ""
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-neutral-900 tracking-tight"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-lg font-medium">{resumeData.alias}</span>
          </motion.button>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {["About", "Projects", "Experience", "Contact"].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors relative group"
                whileHover={{ y: -1 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-900 transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href={`mailto:${resumeData.email}`}
            className="hidden md:block px-6 py-2.5 bg-neutral-900 text-white text-sm rounded-full hover:bg-neutral-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch
          </motion.a>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-neutral-900">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
