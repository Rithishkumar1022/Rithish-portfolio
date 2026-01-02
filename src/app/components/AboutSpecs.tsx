import { resumeData } from "../data/resume";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.01, // Faster delay for longer text
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function SplitText({ text, className }: { text: string, className?: string }) {
  return (
    <motion.h2 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`${className} flex flex-wrap`}
      style={{ lineHeight: '0.95' }}
    >
      {text.split(" ").map((word, wIndex) => (
        <span key={`word-${wIndex}`} className="inline-flex mr-[0.35em] pb-1">
            {word.split("").map((char, cIndex) => {
                const globalIndex = wIndex * 10 + cIndex;
                return (
                    <motion.span
                        key={`${char}-${cIndex}`}
                        custom={globalIndex}
                        variants={textVariants}
                        className="inline-block"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                )
            })}
        </span>
      ))}
    </motion.h2>
  );
}

export function AboutSpecs() {
  return (
    <section id="profile" className="relative z-10 bg-white text-foreground py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-[1800px]">
        
        {/* Intro */}
        <div className="mb-20 md:mb-32 max-w-4xl">
            <SplitText 
                text="Engineering digital perfection through rigorous design & code."
                className="text-[7vw] md:text-[5vw] lg:text-[4vw] leading-[0.9] font-bold tracking-tighter mb-8 md:mb-12"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
            >
                <p className="text-lg md:text-xl font-light text-muted-foreground leading-relaxed">
                    {resumeData.summary}
                </p>
            </motion.div>
        </div>

        {/* Specs Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden"
        >
            
            {/* Education */}
            <div className="bg-white p-8 md:p-12 hover:bg-muted transition-colors duration-500">
                 <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6 md:mb-8">Education</h3>
                 {resumeData.education.map((edu, i) => (
                     <div key={i} className="mb-6 md:mb-8 last:mb-0">
                         <h4 className="text-lg md:text-xl font-bold mb-2 text-foreground">{edu.degree}</h4>
                         <p className="text-muted-foreground mb-2">{edu.school}</p>
                         <p className="font-mono text-xs text-muted-foreground">{edu.period} • {edu.score}</p>
                     </div>
                 ))}
            </div>

            {/* Skills */}
            <div className="bg-white p-8 md:p-12 hover:bg-muted transition-colors duration-500">
                 <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6 md:mb-8">Expertise</h3>
                 <ul className="flex flex-col gap-4">
                     {resumeData.skills.map((skill, i) => (
                         <li key={i} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                             <span className="text-base md:text-lg font-medium text-foreground">{skill}</span>
                             <span className="text-xs font-mono text-muted-foreground">0{i+1}</span>
                         </li>
                     ))}
                 </ul>
            </div>

            {/* Tools */}
             <div className="bg-white p-8 md:p-12 hover:bg-muted transition-colors duration-500">
                 <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6 md:mb-8">Toolkit</h3>
                 <div className="flex flex-wrap gap-2">
                     {resumeData.tools.map((tool, i) => (
                         <span key={i} className="px-3 md:px-4 py-1.5 md:py-2 border border-border rounded-full text-xs md:text-sm font-mono text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-default">
                             {tool}
                         </span>
                     ))}
                 </div>
            </div>

        </motion.div>

      </div>
    </section>
  );
}