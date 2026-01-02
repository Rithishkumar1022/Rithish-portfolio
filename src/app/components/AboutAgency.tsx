import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { resumeData } from "../data/resume";

export function AboutAgency() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-32 bg-gradient-to-b from-[#0a0a0a] to-black overflow-hidden"
      style={{ position: 'relative' }}
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-20"
        >
          <span className="inline-block text-sm text-white/40 uppercase tracking-[0.3em] mb-6">
            About Me
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            Building{" "}
            <span className="italic bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              innovative solutions
            </span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {resumeData.skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
            >
              <div className="absolute top-6 right-6 text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
                {skill}
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm text-white/40 uppercase tracking-[0.3em] mb-6">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {resumeData.tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm text-white/40 uppercase tracking-[0.3em] mb-6">
                Education
              </h3>
              {resumeData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="border-l-2 border-blue-400/50 pl-6 mb-6"
                >
                  <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                  <p className="text-white/60 mb-1">{edu.school}</p>
                  <p className="text-sm text-white/40">{edu.period}</p>
                  {edu.score && (
                    <p className="text-sm text-blue-400 mt-2 font-medium">{edu.score}</p>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm text-white/40 mb-1">Based in</p>
                    <p className="text-white">{resumeData.location}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
