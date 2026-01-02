import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { resumeData } from "../data/resume";

export function ProjectsPro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-32 bg-neutral-50 relative overflow-hidden"
      style={{ position: 'relative' }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-4">
            Featured Work
          </p>
          <h2 className="text-5xl lg:text-6xl tracking-tight text-neutral-900 mb-6">
            Selected
            <br />
            <span className="text-neutral-400">Projects</span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            A collection of projects that showcase my expertise in software 
            development, design, and problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.a
                href={project.link}
                className="block relative"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-neutral-900/5 transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-neutral-900/10">
                  {/* Image Placeholder */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-200 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-neutral-900"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={
                        hoveredIndex === index
                          ? { scale: 1, opacity: 0.05 }
                          : { scale: 0, opacity: 0 }
                      }
                      transition={{ duration: 0.4 }}
                    />
                    
                    {/* Project Number */}
                    <div className="absolute top-6 right-6">
                      <span className="text-6xl font-medium text-neutral-900/5">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-neutral-400 uppercase tracking-wider">
                          {project.period}
                        </span>
                        <motion.svg
                          className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transition-colors"
                          animate={
                            hoveredIndex === index
                              ? { x: 4, y: -4 }
                              : { x: 0, y: 0 }
                          }
                          transition={{ duration: 0.3 }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 17L17 7M17 7H7M17 7V17"
                          />
                        </motion.svg>
                      </div>
                      
                      <h3 className="text-xl text-neutral-900 leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <motion.a
            href={resumeData.social.github}
            className="group flex items-center gap-3 px-8 py-4 border border-neutral-300 text-neutral-900 rounded-full text-sm hover:border-neutral-900 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View More Projects</span>
            <motion.svg
              className="w-4 h-4"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}