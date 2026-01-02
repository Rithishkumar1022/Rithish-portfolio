import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { resumeData } from "../data/resume";

export function ProjectsHorizontal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section 
      id="projects" 
      ref={containerRef} 
      className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-primary/5 overflow-hidden"
      style={{ position: 'relative' }}
    >
      <div className="container px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-secondary" />
            <span className="text-sm tracking-wider uppercase text-muted-foreground">
              Selected Work
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold">
            <span className="text-foreground">Featured</span>
            <br />
            <span className="text-primary">Projects</span>
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => {
            const yOffset = useTransform(
              scrollYProgress,
              [0, 1],
              [100 * (index % 2), -100 * (index % 2)]
            );

            return (
              <motion.div
                key={index}
                style={{ y: yOffset }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl overflow-hidden border border-foreground/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl">
                  {/* Project number */}
                  <div className="absolute top-6 right-6 z-10">
                    <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Image placeholder with gradient */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    />
                    {/* Animated grid pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="grid grid-cols-6 grid-rows-6 h-full w-full">
                        {[...Array(36)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="border border-foreground/20"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.01 }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Period */}
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                      {project.period}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/5 text-primary text-xs font-medium rounded-full border border-primary/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary hover:gap-4 transition-all duration-300 group/link"
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href={resumeData.social.github}
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-white rounded-full hover:bg-primary transition-colors duration-300 group"
          >
            <ExternalLink className="w-5 h-5" />
            <span className="font-medium">View All Projects on GitHub</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
      />
    </section>
  );
}