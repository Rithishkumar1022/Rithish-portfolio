import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { resumeData } from "../data/resume";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
        >
          {/* Logo/Name Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% auto",
              }}
            >
              {resumeData.alias}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-white/60 mt-4 uppercase tracking-[0.3em] text-sm"
            >
              {resumeData.role}
            </motion.p>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-64 md:w-80 relative">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {/* Progress Percentage */}
            <motion.p
              className="text-white/40 text-sm text-center mt-4 tabular-nums"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {progress}%
            </motion.p>
          </div>

          {/* Loading Spinner */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-12 h-12 border-2 border-white/10 border-t-blue-400 rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
