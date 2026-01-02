import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { resumeData } from "../data/resume";

export function ContactPro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formState);
  };

  const contactInfo = [
    {
      label: "Email",
      value: resumeData.email,
      href: `mailto:${resumeData.email}`,
    },
    {
      label: "Phone",
      value: resumeData.phone,
      href: `tel:${resumeData.phone}`,
    },
    {
      label: "Location",
      value: "Chennai, India",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-32 bg-neutral-50 relative overflow-hidden"
      style={{ position: 'relative' }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                Get In Touch
              </p>
              
              <h2 className="text-5xl lg:text-6xl tracking-tight text-neutral-900">
                Let's work
                <br />
                <span className="text-neutral-400">together</span>
              </h2>
            </div>

            <p className="text-lg text-neutral-600 leading-relaxed max-w-md">
              Have a project in mind or want to collaborate? I'd love to hear 
              from you. Let's create something amazing together.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 pt-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="block group"
                >
                  <p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">
                    {info.label}
                  </p>
                  <p className="text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    {info.value}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4 pt-8"
            >
              {Object.entries(resumeData.social).map(([platform, url]) => (
                <motion.a
                  key={platform}
                  href={url}
                  className="w-12 h-12 rounded-full border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-900 flex items-center justify-center text-neutral-600 hover:text-white transition-colors capitalize text-xs"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {platform.slice(0, 2)}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs text-neutral-500 uppercase tracking-wider"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-neutral-200 focus:border-neutral-900 outline-none text-neutral-900 placeholder:text-neutral-400 transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs text-neutral-500 uppercase tracking-wider"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-neutral-200 focus:border-neutral-900 outline-none text-neutral-900 placeholder:text-neutral-400 transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs text-neutral-500 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  rows={6}
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-neutral-200 focus:border-neutral-900 outline-none text-neutral-900 placeholder:text-neutral-400 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-neutral-900 text-white rounded-full text-sm hover:bg-neutral-800 transition-colors mt-8"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>

              <p className="text-xs text-neutral-400 text-center pt-4">
                I'll get back to you within 24 hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}