import { motion, useScroll, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsVisible(latest > 500);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 backdrop-blur-sm border border-white/10 flex items-center justify-center group"
          whileHover={{ scale: 1.1, rotate: -90 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
