import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Building2, MapPin, Calendar, ExternalLink } from "lucide-react";
import { resumeData } from "../data/resume";

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      id="experience" 
      ref={containerRef} 
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      style={{ position: 'relative' }}
    >
      <div className="container px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-secondary" />
            <span className="text-sm tracking-wider uppercase text-muted-foreground">
              Career Journey
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold">
            <span className="text-foreground">Professional</span>
            <br />
            <span className="text-primary">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-foreground/10">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary via-secondary to-primary"
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-16 lg:space-y-24">
            {resumeData.experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative grid lg:grid-cols-2 gap-8 ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 lg:left-1/2 top-8 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                      className="relative"
                    >
                      <div className="w-16 h-16 rounded-full bg-white border-4 border-primary flex items-center justify-center shadow-lg">
                        <Building2 className="w-7 h-7 text-primary" />
                      </div>
                      {/* Pulse effect */}
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                        className="absolute inset-0 rounded-full bg-primary"
                      />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`${
                      isEven ? "lg:col-start-1" : "lg:col-start-2"
                    } ${
                      isEven ? "lg:text-right lg:pr-16" : "lg:pl-16"
                    } pl-24 lg:pl-0`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-8 rounded-3xl border border-foreground/5 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 group"
                    >
                      {/* Period badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-4 ${isEven ? "lg:ml-auto" : ""}`}>
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                          {exp.period}
                        </span>
                      </div>

                      {/* Company name */}
                      <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {exp.company}
                      </h3>

                      {/* Role */}
                      <div className="text-xl font-medium mb-3 text-secondary">
                        {exp.role}
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                        {isEven && <div className="flex-1 lg:block hidden" />}
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Link */}
                      <a
                        href={exp.link}
                        className={`inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-4 transition-all duration-300 group/link ${
                          isEven ? "lg:ml-auto" : ""
                        }`}
                      >
                        <span>Learn More</span>
                        <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                      </a>
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className={`hidden lg:block ${isEven ? "lg:col-start-2" : "lg:col-start-1"}`} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Currently exploring new opportunities
            </span>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}