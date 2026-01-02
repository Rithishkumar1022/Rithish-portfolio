import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { resumeData } from "../data/resume";

export function ExperienceAgency() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-32 bg-gradient-to-b from-black to-[#0a0a0a] overflow-hidden"
      style={{ position: 'relative' }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-12 lg:mb-20"
        >
          <span className="inline-block text-xs sm:text-sm text-white/40 uppercase tracking-[0.3em] mb-4 lg:mb-6">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
            Professional{" "}
            <span className="italic bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-6 sm:space-y-8">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="group relative"
            >
              <motion.a
                href={exp.link}
                className="block"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
              >
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden group-hover:border-white/30 transition-all duration-500">
                  {/* Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0"
                    animate={{ opacity: activeIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Animated Border Gradient */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.3), transparent)",
                      backgroundSize: "200% 100%",
                    }}
                    animate={{
                      backgroundPosition: activeIndex === index ? ["0% 0%", "200% 0%"] : "0% 0%",
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />

                  <div className="relative z-10 p-6 sm:p-8 lg:p-12">
                    <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                      {/* Left - Index & Period */}
                      <div className="lg:col-span-3 space-y-4 sm:space-y-6">
                        {/* Large Index */}
                        <motion.div
                          className="relative inline-block"
                          whileHover={{ scale: 1.05 }}
                        >
                          <span className="text-[80px] sm:text-[120px] md:text-[160px] font-bold leading-none bg-gradient-to-br from-white/10 to-white/[0.02] bg-clip-text text-transparent select-none">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          {/* Glowing Accent */}
                          <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
                            animate={{
                              scale: activeIndex === index ? [1, 1.5, 1] : 1,
                              opacity: activeIndex === index ? [0.5, 1, 0.5] : 0,
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </motion.div>

                        {/* Period Badge */}
                        <motion.div
                          className="inline-block"
                          whileHover={{ scale: 1.05, x: 4 }}
                        >
                          <div className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm">
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                              <span className="text-xs sm:text-sm text-blue-300 font-medium uppercase tracking-wider">
                                {exp.period}
                              </span>
                            </div>
                          </div>
                        </motion.div>

                        {/* Decorative Line */}
                        <motion.div
                          className="hidden lg:block w-px h-32 bg-gradient-to-b from-white/20 via-white/10 to-transparent ml-8"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: activeIndex === index ? 1 : 0 }}
                          transition={{ duration: 0.5 }}
                          style={{ transformOrigin: "top" }}
                        />
                      </div>

                      {/* Middle - Content */}
                      <div className="lg:col-span-6 space-y-4 sm:space-y-6">
                        {/* Role */}
                        <div>
                          <motion.h3
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight"
                            animate={{
                              backgroundImage: activeIndex === index
                                ? "linear-gradient(to right, rgb(96, 165, 250), rgb(168, 85, 247))"
                                : "none",
                            }}
                            style={{
                              WebkitBackgroundClip: activeIndex === index ? "text" : "unset",
                              WebkitTextFillColor: activeIndex === index ? "transparent" : "unset",
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {exp.role}
                          </motion.h3>

                          {/* Company */}
                          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                            <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full" />
                            <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-medium">
                              {exp.company}
                            </p>
                          </div>

                          {/* Location */}
                          <div className="flex items-center gap-2 text-white/50">
                            <svg
                              className="w-4 h-4"
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
                            <span className="text-xs sm:text-sm">{exp.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Animated Underline */}
                        <motion.div
                          className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: activeIndex === index ? 1 : 0 }}
                          transition={{ duration: 0.5 }}
                          style={{ transformOrigin: "left" }}
                        />
                      </div>

                      {/* Right - CTA */}
                      <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-between h-full">
                        {/* Arrow Button */}
                        <motion.div
                          className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl border-2 border-white/20 backdrop-blur-sm flex items-center justify-center group-hover:border-white group-hover:bg-white transition-all duration-300"
                          whileHover={{ rotate: 45, scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg
                            className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white group-hover:text-black transition-colors"
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

                        {/* View Details Link */}
                        <motion.div
                          className="hidden lg:flex items-center gap-2 text-white/50 group-hover:text-white transition-colors mt-auto"
                          animate={{ x: activeIndex === index ? [0, 8, 0] : 0 }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <span className="text-sm uppercase tracking-[0.2em] font-medium">
                            View Details
                          </span>
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
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Glow Effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Corner Orb */}
                  <motion.div
                    className="absolute -bottom-12 -right-12 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                      scale: activeIndex === index ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.a>

              {/* Connector Line (except for last item) */}
              {index < resumeData.experience.length - 1 && (
                <motion.div
                  className="ml-8 lg:ml-24 mt-6 sm:mt-8 mb-6 sm:mb-8 h-12 sm:h-16 w-px bg-gradient-to-b from-white/20 to-transparent"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  style={{ transformOrigin: "top" }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats/Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-white/10"
        >
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <div className="text-center sm:text-left">
              <motion.p
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-3"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                2+
              </motion.p>
              <p className="text-xs sm:text-sm text-white/50 uppercase tracking-[0.2em]">
                Years Experience
              </p>
            </div>

            <div className="text-center sm:text-left">
              <motion.p
                className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 sm:mb-3"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                {resumeData.experience.length}
              </motion.p>
              <p className="text-xs sm:text-sm text-white/50 uppercase tracking-[0.2em]">
                Companies Worked
              </p>
            </div>

            <div className="text-center sm:text-left">
              <motion.p
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-3"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                ∞
              </motion.p>
              <p className="text-xs sm:text-sm text-white/50 uppercase tracking-[0.2em]">
                Passion & Dedication
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}