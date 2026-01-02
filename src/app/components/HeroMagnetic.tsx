import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { resumeData } from "../data/resume";

export function HeroMagnetic() {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    mouseX.set(distanceX * 0.3);
    mouseY.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background gradient blobs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10 px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Small intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm tracking-wider uppercase text-muted-foreground">
                Portfolio 2026
              </span>
            </motion.div>

            {/* Name with massive typography */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-7xl lg:text-8xl xl:text-9xl font-bold leading-none"
              >
                <span className="block text-foreground">Rithish</span>
                <span className="block text-primary">Kumar</span>
              </motion.h1>
            </div>

            {/* Role with animated underline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative inline-block"
            >
              <h2 className="text-2xl lg:text-4xl font-medium text-foreground/80">
                {resumeData.role}
              </h2>
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-secondary"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg lg:text-xl text-muted-foreground max-w-2xl"
            >
              {resumeData.summary}
            </motion.p>

            {/* CTA Buttons with magnetic effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              {/* Magnetic button */}
              <div
                ref={buttonRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <motion.a
                  href="#projects"
                  style={{ x, y }}
                  className="relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full overflow-hidden group"
                >
                  <span className="relative z-10 font-medium">View My Work</span>
                  <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  <motion.div
                    className="absolute inset-0 bg-primary/80"
                    initial={{ scale: 0 }}
                    animate={{ scale: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.a>
              </div>

              <a
                href={`mailto:${resumeData.email}`}
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-foreground text-foreground rounded-full hover:bg-foreground hover:text-white transition-colors duration-300"
              >
                <span className="font-medium">Get In Touch</span>
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-4 pt-8"
            >
              <a
                href={resumeData.social.github}
                className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={resumeData.social.linkedin}
                className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${resumeData.email}`}
                className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Right side - Decorative elements */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              {/* Large circle with gradient */}
              <div className="w-full aspect-square rounded-full bg-gradient-to-br from-primary via-secondary to-primary/50 opacity-20" />
              
              {/* Floating stats */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute top-1/4 -right-8 bg-white p-6 rounded-2xl shadow-2xl border border-foreground/5"
              >
                <div className="text-4xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-1/4 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-foreground/5"
              >
                <div className="text-4xl font-bold text-secondary">4+</div>
                <div className="text-sm text-muted-foreground">Experiences</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-wider text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-foreground/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
