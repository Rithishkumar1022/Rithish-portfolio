import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";
import { resumeData } from "../data/resume";

export function FooterCreative() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-foreground text-white overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 container px-6 lg:px-12 py-24">
        {/* Top section - CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            Let's Create
            <br />
            <span className="text-primary">Something Amazing</span>
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
            href={`mailto:${resumeData.email}`}
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-full hover:bg-secondary transition-all duration-300 group text-lg font-medium"
          >
            <Mail className="w-6 h-6" />
            <span>Get In Touch</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>

        {/* Middle section - Info grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 pb-20 border-b border-white/10">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-4">{resumeData.name}</h3>
            <p className="text-white/70 leading-relaxed">
              {resumeData.role} based in Chennai, creating innovative digital solutions.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold mb-4 text-white/90">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Experience", href: "#experience" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold mb-4 text-white/90">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${resumeData.email}`}
                  className="text-white/70 hover:text-primary transition-colors duration-300 text-sm"
                >
                  {resumeData.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${resumeData.phone}`}
                  className="text-white/70 hover:text-primary transition-colors duration-300 text-sm"
                >
                  {resumeData.phone}
                </a>
              </li>
              <li className="text-white/70 text-sm">
                {resumeData.location}
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-bold mb-4 text-white/90">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href={resumeData.social.github}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={resumeData.social.linkedin}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={`mailto:${resumeData.email}`}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <span>© {currentYear} {resumeData.name}. Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>in Chennai</span>
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border border-white/10" />
          ))}
        </div>
      </div>
    </footer>
  );
}
