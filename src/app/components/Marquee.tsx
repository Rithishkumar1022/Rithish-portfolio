import { motion } from "framer-motion";

export function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-primary py-3 md:py-4 border-y border-primary/20">
      <div className="flex whitespace-nowrap overflow-hidden select-none">
        <motion.div 
            animate={{ x: "-50%" }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            className="flex w-fit"
        >
          {/* First Copy */}
          <div className="flex gap-4 md:gap-8 items-center pr-4 md:pr-8">
            {Array(4).fill("RITHISH KUMAR — SOFTWARE ENGINEER — UI/UX DESIGNER — ").map((text, i) => (
              <span key={`a-${i}`} className="text-white font-mono text-xs md:text-sm uppercase tracking-widest font-bold">
                  {text}
              </span>
            ))}
          </div>
          {/* Second Copy for Seamless Loop */}
          <div className="flex gap-4 md:gap-8 items-center pr-4 md:pr-8">
            {Array(4).fill("RITHISH KUMAR — SOFTWARE ENGINEER — UI/UX DESIGNER — ").map((text, i) => (
              <span key={`b-${i}`} className="text-white font-mono text-xs md:text-sm uppercase tracking-widest font-bold">
                  {text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}