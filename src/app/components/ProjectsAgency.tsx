import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { resumeData } from "../data/resume";

export function ProjectsAgency() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-32 bg-gradient-to-b from-black to-[#0a0a0a] overflow-hidden"
      style={{ position: 'relative' }}
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-20"
        >
          <span className="inline-block text-sm text-white/40 uppercase tracking-[0.3em] mb-6">
            Selected Works
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Featured{" "}
            <span className="italic bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Projects Showcase */}
        <div className="space-y-32">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.3 }}
              className="group relative"
            >
              {/* Project Number - Large Background */}
              <div className="absolute -top-16 left-0 md:-left-12 pointer-events-none">
                <motion.span
                  className="text-[180px] md:text-[280px] font-bold leading-none bg-gradient-to-b from-white/[0.03] to-transparent bg-clip-text text-transparent select-none"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: index * 0.3 + 0.2 }}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.span>
              </div>

              <motion.a
                href={project.link}
                className="block relative"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                  {/* Left Side - Content */}
                  <div className={`lg:col-span-5 space-y-8 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    {/* Period Badge */}
                    <motion.div
                      className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
                      whileHover={{ scale: 1.05, x: 4 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse" />
                      <span className="text-sm text-white/60 uppercase tracking-[0.2em]">
                        {project.period}
                      </span>
                    </motion.div>

                    {/* Title & Description */}
                    <div className="space-y-6">
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.3 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-4 py-2 bg-white/5 border border-white/10 text-white/80 rounded-full text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* CTA Link */}
                    <motion.div
                      className="flex items-center gap-3 text-white/60 group-hover:text-white transition-colors pt-4"
                      whileHover={{ x: 8 }}
                    >
                      <span className="text-sm uppercase tracking-[0.2em] font-medium">
                        View Project
                      </span>
                      <motion.svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </motion.svg>
                    </motion.div>
                  </div>

                  {/* Right Side - Visual */}
                  <div className={`lg:col-span-7 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 group-hover:border-white/20 transition-all">
                      {/* Gradient Background */}
                      <motion.div
                        className={`absolute inset-0 ${
                          index === 0 
                            ? 'bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20'
                            : index === 1
                            ? 'bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20'
                            : 'bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20'
                        }`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />

                      {/* Animated Grid Pattern */}
                      <div className="absolute inset-0 opacity-30">
                        <motion.div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                            backgroundSize: "40px 40px",
                          }}
                          animate={{
                            backgroundPosition: ["0% 0%", "100% 100%"],
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </div>

                      {/* Floating Geometric Shapes */}
                      <motion.div
                        className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white/20 rounded-full"
                        animate={{
                          y: [0, -30, 0],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.div
                        className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-white/20 rounded-2xl"
                        animate={{
                          y: [0, 30, 0],
                          rotate: [0, -180, -360],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Corner Arrow Icon */}
                      <div className="absolute top-8 right-8">
                        <motion.div
                          className="w-16 h-16 rounded-full border-2 border-white/30 backdrop-blur-sm flex items-center justify-center group-hover:border-white group-hover:bg-white transition-all"
                          whileHover={{ rotate: 45, scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg
                            className="w-7 h-7 text-white group-hover:text-black transition-colors"
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

                      {/* Bottom Label */}
                      <div className="absolute bottom-8 left-8 right-8">
                        <motion.div
                          className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          initial={{ y: 20 }}
                          whileHover={{ y: 0 }}
                        >
                          <p className="text-white font-medium">Interactive Preview</p>
                          <p className="text-white/60 text-sm">Click to explore project</p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Line */}
                <motion.div
                  className="mt-12 h-px bg-white/5"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                  style={{ transformOrigin: "left" }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformOrigin: "left" }}
                  />
                </motion.div>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-32 text-center space-y-8"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-white/60">Available for new projects</span>
          </div>

          <div className="space-y-4">
            <p className="text-2xl text-white/60">
              Interested in working together?
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Let's Talk</span>
              <svg
                className="w-6 h-6"
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
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}