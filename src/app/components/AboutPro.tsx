import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { resumeData } from "../data/resume";

export function AboutPro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: resumeData.projects.length.toString() },
    { label: "Technologies", value: resumeData.tools.length.toString() },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-32 bg-white relative overflow-hidden"
      style={{ position: 'relative' }}
    >
      {/* Subtle Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-50 -skew-x-12 transform translate-x-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-sm uppercase tracking-[0.2em] text-neutral-500"
              >
                About Me
              </motion.p>
              
              <h2 className="text-5xl lg:text-6xl tracking-tight text-neutral-900">
                Crafting digital
                <br />
                <span className="text-neutral-400">experiences</span>
              </h2>
            </div>

            <p className="text-lg text-neutral-600 leading-relaxed">
              I'm a software engineer passionate about creating innovative solutions 
              that make a difference. With expertise in full-stack development, UI/UX 
              design, and emerging technologies, I bring ideas to life through code.
            </p>

            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-[0.2em] text-neutral-900">
                Education
              </h3>
              {resumeData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="border-l-2 border-neutral-200 pl-4"
                >
                  <p className="font-medium text-neutral-900">{edu.degree}</p>
                  <p className="text-sm text-neutral-500">{edu.school}</p>
                  <p className="text-xs text-neutral-400 mt-1">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl font-medium text-neutral-900 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-sm uppercase tracking-[0.2em] text-neutral-900">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm hover:bg-neutral-200 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-4"
            >
              <h3 className="text-sm uppercase tracking-[0.2em] text-neutral-900">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 border border-neutral-300 text-neutral-900 rounded-full text-sm hover:border-neutral-900 transition-colors"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="pt-8 border-t border-neutral-200"
            >
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-neutral-400 mt-0.5"
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
                  <p className="text-sm text-neutral-500">Based in</p>
                  <p className="text-neutral-900">{resumeData.location}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}