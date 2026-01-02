import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { resumeData } from "../data/resume";

export function SkillsInteractive() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const allItems = [
    ...resumeData.skills.map(s => ({ type: 'skill', name: s })),
    ...resumeData.tools.map(t => ({ type: 'tool', name: t }))
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-primary/5 to-white overflow-hidden">
      <div className="container px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-secondary" />
            <span className="text-sm tracking-wider uppercase text-muted-foreground">
              Expertise
            </span>
            <div className="h-px w-12 bg-secondary" />
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Skills &</span>
            <br />
            <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hover over the tags to interact with them
          </p>
        </motion.div>

        {/* Interactive tag cloud */}
        <div
          ref={containerRef}
          className="relative min-h-[600px] flex items-center justify-center"
        >
          {/* Magnetic cursor follower */}
          <motion.div
            style={{ x, y }}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl pointer-events-none -translate-x-16 -translate-y-16"
          />

          {/* Skills and tools grid */}
          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 w-full max-w-5xl">
            {allItems.map((item, index) => {
              const isSkill = item.type === 'skill';
              const rotation = Math.random() * 4 - 2; // Random rotation between -2 and 2 degrees

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.15,
                    rotate: rotation * 2,
                    zIndex: 10,
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="relative group cursor-pointer"
                  style={{ rotate: rotation }}
                >
                  <div
                    className={`
                      relative p-6 lg:p-8 rounded-2xl lg:rounded-3xl border-2 
                      transition-all duration-300
                      ${isSkill 
                        ? 'bg-white border-primary/20 hover:border-primary hover:shadow-2xl hover:shadow-primary/20' 
                        : 'bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/20 hover:border-secondary hover:shadow-2xl hover:shadow-secondary/20'
                      }
                    `}
                  >
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: isSkill
                          ? 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, transparent 100%)'
                          : 'linear-gradient(135deg, rgba(200,116,85,0.1) 0%, transparent 100%)',
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10 text-center">
                      {/* Icon/Number */}
                      <motion.div
                        className={`
                          w-12 h-12 lg:w-16 lg:h-16 rounded-full mx-auto mb-4 
                          flex items-center justify-center text-lg lg:text-xl font-bold
                          ${isSkill 
                            ? 'bg-primary/10 text-primary' 
                            : 'bg-secondary/10 text-secondary'
                          }
                        `}
                        animate={{
                          rotate: hoveredIndex === index ? 360 : 0,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </motion.div>

                      {/* Name */}
                      <div className="font-bold text-base lg:text-lg text-foreground group-hover:scale-110 transition-transform duration-300">
                        {item.name}
                      </div>

                      {/* Type badge */}
                      <div className="mt-3">
                        <span
                          className={`
                            text-xs px-3 py-1 rounded-full
                            ${isSkill 
                              ? 'bg-primary/10 text-primary' 
                              : 'bg-secondary/10 text-secondary'
                            }
                          `}
                        >
                          {item.type}
                        </span>
                      </div>
                    </div>

                    {/* Particles effect on hover */}
                    {hoveredIndex === index && (
                      <>
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`absolute w-2 h-2 rounded-full ${
                              isSkill ? 'bg-primary' : 'bg-secondary'
                            }`}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0],
                              x: [0, (Math.random() - 0.5) * 100],
                              y: [0, (Math.random() - 0.5) * 100],
                            }}
                            transition={{
                              duration: 1,
                              delay: i * 0.1,
                              repeat: Infinity,
                            }}
                            style={{
                              left: '50%',
                              top: '50%',
                            }}
                          />
                        ))}
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-8 mt-16"
        >
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">Skills</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-secondary" />
            <span className="text-sm text-muted-foreground">Tools</span>
          </div>
        </motion.div>
      </div>

      {/* Background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"
      />
    </section>
  );
}
