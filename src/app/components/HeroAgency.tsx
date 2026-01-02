import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { resumeData } from "../data/resume";
import { Github, Linkedin, Instagram, MapPin, ArrowUpRight } from "lucide-react";
import profileImage from "../../assets/0fc11f5ef144c210fdcda694dd943377af547960.png";

export function HeroAgency() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

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
    <section id="hero" className="relative bg-[#0a0a0a]">
      <motion.div
        ref={containerRef}
        className="relative min-h-[100dvh] flex items-center overflow-hidden"
      >
        {/* Cinematic Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"
            animate={{
              x: mousePosition.x * 2,
              y: mousePosition.y * 2,
            }}
            transition={{ type: "spring", stiffness: 40 }}
          />
          <motion.div
            className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"
            animate={{
              x: -mousePosition.x * 2,
              y: -mousePosition.y * 2,
            }}
            transition={{ type: "spring", stiffness: 40 }}
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        <motion.div
          style={{ opacity }}
          className="container mx-auto px-6 lg:px-12 relative z-10"
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[100dvh] py-12 lg:py-20">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 lg:space-y-10 relative">
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-white/80 tracking-widest uppercase">
                  Available for new projects
                </span>
              </motion.div>

              {/* Main Title */}
              <div className="space-y-1">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.9]">
                    {resumeData.name.split(" ")[0]}
                  </h1>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-[0.9]">
                    {resumeData.name.split(" ")[1]}
                  </h1>
                </motion.div>
              </div>

              {/* Minimal Summary */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-sm sm:text-base md:text-lg text-white/50 max-w-lg leading-relaxed font-light border-l-2 border-white/10 pl-6"
              >
                {resumeData.summary}
              </motion.p>

              {/* Interactive CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <motion.a
                  href="#projects"
                  className="group relative px-8 py-4 bg-white text-black rounded-full overflow-hidden text-sm font-semibold tracking-wide"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Work
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>

                <motion.a
                  href="#contact"
                  className="px-8 py-4 rounded-full border border-white/10 text-white/80 hover:bg-white/5 hover:text-white transition-all backdrop-blur-sm text-sm font-medium tracking-wide"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Me
                </motion.a>
              </motion.div>
            </div>

            {/* Right Image Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 relative mt-12 lg:mt-0"
            >
              <div className="relative z-10 group">
                {/* Main Image Container */}
                <motion.div
                  style={{ scale, y: "0%" }}
                  className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 shadow-2xl shadow-purple-500/10"
                >
                  <img
                    src={profileImage}
                    alt={resumeData.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Cinematic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                  {/* Glass Card - Positioned absolutely within the relative container */}
                  <div className="absolute inset-x-4 bottom-4 z-20">
                     <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 text-white/90 mb-2">
                            <MapPin className="w-4 h-4 text-blue-400" />
                            <span className="text-sm font-medium tracking-wide">Chennai, India</span>
                          </div>
                          <p className="text-xs text-white/50">Open to remote opportunities</p>
                        </div>
                        
                        <div className="flex gap-2">
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
                                  className="p-2 rounded-lg bg-white/5 hover:bg-white/20 border border-white/10 text-white/70 hover:text-white transition-colors"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <IconComponent className="w-4 h-4" />
                                </motion.a>
                              );
                            })}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Decorative Backdrops */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-2xl -z-10 opacity-60" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}