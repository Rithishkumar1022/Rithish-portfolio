import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { resumeData } from "../data/resume";

export function ExperiencePro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-32 bg-white relative overflow-hidden"
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
            Career Journey
          </p>
          <h2 className="text-5xl lg:text-6xl tracking-tight text-neutral-900 mb-6">
            Work &
            <br />
            <span className="text-neutral-400">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.a
                href={exp.link}
                className="block relative"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-12 gap-8 py-8 border-b border-neutral-200 group-hover:border-neutral-900 transition-colors">
                  {/* Period */}
                  <div className="md:col-span-3">
                    <p className="text-sm text-neutral-400 uppercase tracking-wider">
                      {exp.period}
                    </p>
                    <p className="text-xs text-neutral-400 mt-1">
                      {exp.location}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-7 space-y-2">
                    <h3 className="text-2xl text-neutral-900 group-hover:text-neutral-600 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-neutral-600">{exp.company}</p>
                    <p className="text-sm text-neutral-500 leading-relaxed pt-2">
                      {exp.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="md:col-span-2 flex items-center justify-end">
                    <motion.div
                      className="w-12 h-12 rounded-full border border-neutral-200 group-hover:border-neutral-900 group-hover:bg-neutral-900 flex items-center justify-center transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <svg
                        className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors"
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
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <motion.button
            className="group flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-full text-sm hover:bg-neutral-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Download Resume</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}