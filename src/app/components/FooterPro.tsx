import { motion } from "motion/react";
import { resumeData } from "../data/resume";

export function FooterPro() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255 255 255) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl tracking-tight">{resumeData.alias}</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {resumeData.role}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs text-neutral-400 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "Projects", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs text-neutral-400 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${resumeData.email}`}
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {resumeData.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${resumeData.phone}`}
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {resumeData.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-xs text-neutral-400 uppercase tracking-wider">
              Follow Me
            </h4>
            <div className="flex gap-3">
              {Object.entries(resumeData.social).map(([platform, url]) => (
                <motion.a
                  key={platform}
                  href={url}
                  className="w-10 h-10 rounded-full border border-neutral-700 hover:border-white hover:bg-white flex items-center justify-center text-neutral-400 hover:text-neutral-900 transition-colors capitalize text-xs"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {platform.slice(0, 2)}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500">
            © {currentYear} {resumeData.name}. All rights reserved.
          </p>
          <p className="text-xs text-neutral-500">
            Designed & Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
