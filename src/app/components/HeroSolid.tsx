import { motion, useScroll, useTransform } from "framer-motion";
import heroImg from "../../assets/0fc11f5ef144c210fdcda694dd943377af547960.png";
import { ArrowDown } from "lucide-react";
import { BackgroundRipple } from "./ui/BackgroundRipple";

const textVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function SplitText({ text, className, stroke = false }: { text: string, className?: string, stroke?: boolean }) {
  return (
    <motion.h1 
      initial="hidden"
      animate="visible"
      className={`${className} flex flex-wrap`}
    >
      {text.split("").map((char, i) => (
         <motion.span
            key={`${char}-${i}`}
            custom={i}
            variants={textVariants}
            className="inline-block"
            style={stroke ? { WebkitTextStroke: "1px rgba(37, 99, 235, 0.6)", color: "transparent" } : {}}
         >
           {char === " " ? "\u00A0" : char}
         </motion.span>
      ))}
    </motion.h1>
  );
}

export function HeroSolid() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section 
      id="index" 
      className="relative w-full min-h-screen bg-white flex flex-col items-center pt-16 md:pt-32 pb-16 md:pb-20 px-4 md:px-8 overflow-hidden"
    >
      
      {/* TOP TEXT */}
      <div className="w-full max-w-[1800px] flex flex-col md:flex-row justify-between items-start md:items-end relative z-10 mb-4 md:mb-12 overflow-visible pointer-events-none">
          <div className="flex flex-col overflow-visible pointer-events-none">
              <SplitText 
                text="RITHISH" 
                className="text-[12vw] md:text-[10vw] leading-[0.85] font-black tracking-tighter text-primary uppercase"
              />
          </div>
          
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
             className="mt-4 md:mt-0 md:text-right pointer-events-none"
          >
              <h2 className="text-foreground font-medium text-base md:text-xl mb-2">Software Engineer</h2>
              <p className="text-muted-foreground text-xs md:text-sm font-mono uppercase tracking-widest max-w-xs md:ml-auto">
                  Crafting Digital Experiences<br/>
                  Through Code &<br/>
                  Creative Design
              </p>
          </motion.div>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="relative w-full max-w-[1400px] h-[40vh] md:h-[65vh] overflow-hidden bg-muted rounded-lg pointer-events-none">
          <motion.div 
            style={{ y, opacity }} 
            className="w-full h-full"
          >
             <motion.img 
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                src={heroImg} 
                alt="Rithish Kumar" 
                className="w-full h-full object-cover object-center"
             />
             {/* Gradient Overlay for integration */}
             <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />
          </motion.div>

          {/* Floating Label */}
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/80 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-border shadow-lg"
              >
                  <span className="text-[10px] md:text-xs font-mono text-foreground uppercase tracking-widest">
                      Est. 2025 — Chennai
                  </span>
              </motion.div>
          </div>
      </div>

      {/* BOTTOM TEXT */}
      <div className="w-full max-w-[1800px] flex flex-col md:flex-row justify-between items-start md:items-end relative z-10 pt-4 md:pt-12 gap-4 md:gap-0 pointer-events-none">
           <div className="flex flex-col gap-6 md:gap-8">
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
               className="flex gap-3 md:gap-4 items-center"
             >
               <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
               <span className="text-muted-foreground font-mono text-[10px] md:text-xs uppercase tracking-widest">Available for hire</span>
             </motion.div>

             <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
               className="text-foreground font-bold text-lg md:text-2xl max-w-2xl pb-4"
               style={{ lineHeight: '1.8' }}
             >
               Engineering digital perfection through rigorous design & code.
             </motion.p>
           </div>

           <div className="pointer-events-none">
               <SplitText 
                 text="KUMAR" 
                 stroke={true}
                 className="text-[12vw] md:text-[10vw] leading-[0.85] font-black tracking-tighter uppercase"
               />
           </div>
      </div>

    </section>
  );
}