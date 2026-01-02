import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { resumeData } from "../data/resume";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.8,
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
    >
      {text.split("").map((char, i) => (
         <motion.span
            key={`${char}-${i}`}
            custom={i}
            variants={textVariants}
            className="inline-block"
         >
           {char === " " ? "\u00A0" : char}
         </motion.span>
      ))}
    </motion.h2>
  );
}

function ProjectItem({ project, index }: { project: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  return (
    <motion.div 
      ref={ref} 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="group relative pb-16 md:pb-24 border-b border-border last:border-0 last:pb-0"
    >
      <div className="flex flex-col gap-8 md:gap-10">
         
         {/* Header with Index and Period */}
         <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4 md:gap-6">
               <span className="font-mono text-5xl md:text-6xl lg:text-7xl font-black text-muted/40 md:group-hover:text-muted transition-colors duration-700">
                 0{index + 1}
               </span>
               <div className="flex flex-col gap-1">
                  <div className="overflow-hidden">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary md:group-hover:text-secondary transition-colors duration-500 uppercase tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs md:text-sm text-muted-foreground uppercase tracking-widest">
                    {project.period}
                  </span>
               </div>
            </div>
         </div>

         {/* Description */}
         <p className="text-foreground md:text-muted-foreground md:group-hover:text-foreground text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl pl-0 md:pl-24 transition-colors duration-500">
           {project.description}
         </p>

         {/* Tech Stack & Link */}
         <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-between md:items-center pl-0 md:pl-24">
            <div className="flex flex-wrap gap-2">
               {project.tech.map((t: string, i: number) => (
                 <span key={i} className="px-4 py-2 text-xs font-mono text-muted-foreground border border-border md:group-hover:border-primary/30 md:group-hover:text-foreground transition-all duration-500 uppercase tracking-wider rounded-md">
                   {t}
                 </span>
               ))}
            </div>
            <a 
               href={project.link} 
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary active:text-primary transition-colors duration-300 pb-1 border-b border-border hover:border-primary active:border-primary w-fit group/link"
            >
               <span className="font-mono text-xs md:text-sm uppercase tracking-widest">View Project</span>
               <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-500" />
            </a>
         </div>

         {/* Decorative Line - Desktop only */}
         <div className="hidden md:block h-px w-0 group-hover:w-full bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 transition-all duration-1500 ease-out" />

      </div>
    </motion.div>
  );
}

export function WorkGrid() {
  return (
    <section id="works" className="bg-white text-foreground py-16 md:py-24 lg:py-32 relative z-10 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
           
           {/* Left Sidebar (Sticky) */}
           <div className="lg:w-1/3">
              <div className="lg:sticky lg:top-32">
                 <div className="flex items-center gap-4 mb-6 md:mb-8">
                    <div className="h-px w-8 md:w-12 bg-border"></div>
                    <span className="font-mono text-xs md:text-sm text-muted-foreground uppercase tracking-widest">Selected Works</span>
                 </div>
                 
                 <div className="mb-6 md:mb-8">
                    <SplitText 
                       text="THE" 
                       className="text-[12vw] md:text-[8vw] lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-foreground" 
                    />
                    <SplitText 
                       text="ARCHIVE" 
                       className="text-[12vw] md:text-[8vw] lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-foreground" 
                    />
                 </div>
                 
                 <p className="text-muted-foreground text-base md:text-lg max-w-sm leading-relaxed mb-8 md:mb-12">
                    A curated selection of engineering challenges and digital experiences. 
                    Focusing on stability, performance, and monolithic design.
                 </p>

                 <div className="hidden lg:flex flex-col gap-2">
                    {resumeData.projects.map((p, i) => (
                       <div key={i} className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors cursor-default">
                          <span className="font-mono text-xs">0{i + 1}</span>
                          <span className="text-sm uppercase tracking-wider">{p.title}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Right Content (Scrollable) */}
           <div className="lg:w-2/3 flex flex-col gap-16 md:gap-24 relative">
              {resumeData.projects.map((project, index) => (
                 <ProjectItem key={index} project={project} index={index} />
              ))}
           </div>

        </div>

      </div>
    </section>
  );
}