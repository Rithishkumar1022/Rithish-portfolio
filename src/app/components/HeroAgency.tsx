import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { resumeData } from "../data/resume";
import { Github, Linkedin, Instagram, MapPin } from "lucide-react";
import profileImage from "../../assets/0fc11f5ef144c210fdcda694dd943377af547960.png";

export function HeroAgency() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" style={{ position: 'relative' }}>
      <motion.div
        ref={containerRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
        style={{ position: 'relative' }}
      >
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"
          animate={{
            x: -mousePosition.x * 2,
            y: -mousePosition.y * 2,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <motion.div
          style={{ opacity, position: 'relative' }}
          className="container mx-auto px-6 lg:px-12 relative z-10"
        >
          <div className="grid lg:grid-cols-12 gap-12 items-center min-h-screen py-32">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-12">
              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-white/60 uppercase tracking-[0.2em]">
                  Available for work
                </span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h1 className="text-7xl md:text-8xl xl:text-9xl font-bold tracking-tighter text-white leading-[0.9]">
                    {resumeData.name.split(" ")[0]}
                  </h1>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex items-center gap-6"
                >
                  <h1 className="text-7xl md:text-8xl xl:text-9xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-[0.9]">
                    {resumeData.name.split(" ")[1]}
                  </h1>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="hidden md:block w-20 h-20 rounded-full border border-white/20 flex-shrink-0"
                  >
                    <div className="w-full h-full flex items-center justify-center text-xs text-white/40 uppercase tracking-wider">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path
                          id="curve"
                          d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                          fill="none"
                        />
                        <text className="text-[8px] fill-white/60 uppercase tracking-[0.3em]">
                          <textPath href="#curve">
                            Portfolio • 2026 • Portfolio • 2026 •
                          </textPath>
                        </text>
                      </svg>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Role */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed"
              >
                {resumeData.summary}
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="#projects"
                  className="group relative px-8 py-4 bg-white text-black rounded-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>

                <motion.a
                  href="#contact"
                  className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/5 transition-colors backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Talk
                </motion.a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10"
              >
                {[
                  { value: "2+", label: "Years Exp." },
                  { value: resumeData.projects.length, label: "Projects" },
                  { value: "100%", label: "Dedication" },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                    <p className="text-sm text-white/40 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:col-span-5 relative"
            >
              <motion.div
                style={{ scale, y, position: 'relative' }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden"
              >
                {/* Image */}
                <img
                  src={profileImage}
                  alt={resumeData.name}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-white" />
                    <span className="text-white">Chennai, India</span>
                  </div>
                  <div className="flex gap-3">
                    {Object.entries(resumeData.social)
                      .filter(([platform]) => ['github', 'linkedin', 'instagram'].includes(platform))
                      .map(([platform, url]) => {
                        const IconComponent = 
                          platform === 'github' ? Github : 
                          platform === 'linkedin' ? Linkedin : 
                          Instagram;
                      
                        return (
                          <motion.a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <IconComponent className="w-5 h-5" />
                          </motion.a>
                        );
                      })}
                  </div>
                </motion.div>

                {/* Decorative Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-white/10" />
              </motion.div>

              {/* Floating Decoration */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
              />
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-white rounded-full mx-auto"
                />
              </div>
              <span className="text-xs text-white/40 uppercase tracking-[0.3em]">
                Scroll
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}