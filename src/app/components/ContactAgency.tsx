import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { resumeData } from "../data/resume";

export function ContactAgency() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-32 bg-gradient-to-b from-[#0a0a0a] to-black overflow-hidden"
      style={{ position: 'relative' }}
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12 max-w-6xl mx-auto">
          {/* Available Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-white/60 uppercase tracking-[0.2em]">
              Available for opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-sm text-white/40 uppercase tracking-[0.3em]">
              Get In Touch
            </p>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Let's{" "}
              <span className="italic bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                create together
              </span>
            </h2>
            <motion.a
              href={`mailto:${resumeData.email}`}
              className="block text-3xl md:text-4xl lg:text-5xl font-bold text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{ wordBreak: 'break-all' }}
            >
              {resumeData.email}
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8"
          >
            {[
              { name: "LINKEDIN", url: resumeData.social.linkedin },
              { name: "GITHUB", url: resumeData.social.github },
              { name: "WHATSAPP", url: resumeData.social.whatsapp },
              { name: "INSTAGRAM", url: resumeData.social.instagram },
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/40 uppercase tracking-[0.2em] hover:text-white transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                whileHover={{ y: -2 }}
              >
                {social.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-white/40"
          >
            © {new Date().getFullYear()} {resumeData.name}. All Rights Reserved.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
