import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "motion/react";
import { useState } from "react";
import { resumeData } from "../data/resume";
import { downloadResume } from "../utils/resumeUtils";
import { X, Download, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";

export function NavbarAgency() {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumePreviewOpen, setResumePreviewOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoom(1);

  const closeResumePreview = () => {
    setResumePreviewOpen(false);
    setZoom(1);
  };

  const navItems = [
    { name: "Work", id: "projects" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="mx-6 lg:mx-12 mt-6">
          <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-white tracking-tight relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                  {resumeData.alias}
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
              </motion.button>

              {/* Center Navigation */}
              <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1">
                {navItems.slice(0, 3).map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="px-6 py-2 text-sm text-white/60 hover:text-white rounded-full hover:bg-white/10 transition-all relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>

              {/* Right Side Actions */}
              <div className="hidden lg:flex items-center gap-3">
                {/* View Resume */}
                <motion.button
                  onClick={() => setResumePreviewOpen(true)}
                  className="flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/5 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>Resume</span>
                </motion.button>

                {/* Hire Me CTA */}
                <motion.a
                  href={`mailto:${resumeData.email}`}
                  className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Hire Me</span>
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </motion.a>
              </div>

              {/* Mobile Contact Button */}
              <motion.a
                href={`mailto:${resumeData.email}`}
                className="hidden md:flex lg:hidden items-center justify-center w-10 h-10 bg-white text-black rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden text-white w-10 h-10 flex items-center justify-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {mobileMenuOpen ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-6 right-6 z-40 md:hidden"
          >
            <div className="bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-6 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.a
                href={`mailto:${resumeData.email}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-medium mt-4"
              >
                <span>Hire Me</span>
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Preview */}
      <AnimatePresence>
        {resumePreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[100] flex items-center justify-center p-4"
            onClick={closeResumePreview}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-5xl bg-gradient-to-b from-[#0a0a0a] to-black border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 lg:p-6 border-b border-white/10 bg-black/50 backdrop-blur-xl">
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white">Resume</h3>
                  <p className="text-xs lg:text-sm text-white/60 mt-1">{resumeData.name}</p>
                </div>

                <div className="flex items-center gap-2 lg:gap-3">
                  {/* Zoom Controls */}
                  <div className="hidden sm:flex items-center gap-2 bg-white/5 rounded-full p-1">
                    <motion.button
                      onClick={handleZoomOut}
                      className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={zoom <= 0.75}
                      title="Zoom Out"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </motion.button>

                    <span className="text-xs text-white/60 min-w-[3rem] text-center">
                      {Math.round(zoom * 100)}%
                    </span>

                    <motion.button
                      onClick={handleZoomIn}
                      className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={zoom >= 2.5}
                      title="Zoom In"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </motion.button>

                    <motion.button
                      onClick={handleResetZoom}
                      className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-all ml-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      title="Reset Zoom"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Download Button */}
                  <motion.button
                    onClick={() => downloadResume(resumeData.resumeUrl)}
                    className="flex items-center gap-2 px-3 lg:px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full text-sm font-medium transition-all shadow-lg shadow-purple-500/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Download</span>
                  </motion.button>

                  {/* Close Button */}
                  <motion.button
                    onClick={closeResumePreview}
                    className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Resume Image Container with High Quality Rendering */}
              <div className="relative overflow-auto max-h-[75vh] bg-gradient-to-b from-white/5 to-white/10 p-4 lg:p-8">
                <motion.div
                  className="relative mx-auto"
                  style={{
                    width: `${zoom * 100}%`,
                    transformOrigin: 'top center'
                  }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <motion.img
                    src={resumeData.resumeUrl}
                    alt="Rithish Kumar Resume"
                    className="w-full h-auto rounded-xl shadow-2xl shadow-black/50"
                    style={{
                      imageRendering: '-webkit-optimize-contrast',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)',
                      willChange: 'transform',
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    loading="eager"
                    decoding="sync"
                  />

                  {/* Quality Enhancement Overlay */}
                  <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-white/10" />
                </motion.div>

                {/* Mobile Zoom Controls */}
                <div className="sm:hidden fixed bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/80 backdrop-blur-xl rounded-full p-2 border border-white/10">
                  <motion.button
                    onClick={handleZoomOut}
                    className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-all disabled:opacity-50"
                    whileTap={{ scale: 0.95 }}
                    disabled={zoom <= 0.75}
                  >
                    <ZoomOut className="w-5 h-5" />
                  </motion.button>

                  <span className="text-sm text-white/80 min-w-[3.5rem] text-center font-medium">
                    {Math.round(zoom * 100)}%
                  </span>

                  <motion.button
                    onClick={handleZoomIn}
                    className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-all disabled:opacity-50"
                    whileTap={{ scale: 0.95 }}
                    disabled={zoom >= 2.5}
                  >
                    <ZoomIn className="w-5 h-5" />
                  </motion.button>

                  <motion.button
                    onClick={handleResetZoom}
                    className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-all ml-1"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Maximize2 className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 lg:p-6 border-t border-white/10 bg-black/50 backdrop-blur-xl">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-xs lg:text-sm text-white/60">
                      Last updated: January 2026
                    </p>
                    <p className="text-xs text-white/40 mt-1">
                      Tip: Use zoom controls for better readability
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <motion.a
                      href={`mailto:${resumeData.email}`}
                      className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact Me
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}