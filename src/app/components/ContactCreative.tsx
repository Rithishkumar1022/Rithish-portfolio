import { motion } from "motion/react";
import { useState, useRef } from "react";
import { Send, Mail, Phone, MapPin, CircleCheck } from "lucide-react";
import { resumeData } from "../data/resume";

export function ContactCreative() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-primary/5 overflow-hidden">
      <div className="container px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-secondary" />
              <span className="text-sm tracking-wider uppercase text-muted-foreground">
                Get In Touch
              </span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-foreground">Let's Start a</span>
              <br />
              <span className="text-primary">Conversation</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Have a project in mind or just want to say hello? I'd love to hear from you.
              Drop me a message and I'll get back to you as soon as possible.
            </p>

            {/* Contact info cards */}
            <div className="space-y-4">
              <motion.a
                href={`mailto:${resumeData.email}`}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-foreground/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Email</div>
                  <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {resumeData.email}
                  </div>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${resumeData.phone}`}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-foreground/5 hover:border-secondary/20 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Phone</div>
                  <div className="font-medium text-foreground group-hover:text-secondary transition-colors">
                    {resumeData.phone}
                  </div>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-foreground/5"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Location</div>
                  <div className="font-medium text-foreground">
                    Chennai, India
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl border border-foreground/5 shadow-2xl p-8 lg:p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10" />
              
              {/* Success state */}
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CircleCheck className="w-10 h-10 text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-primary/5 border border-primary/10 rounded-2xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-primary/5 border border-primary/10 rounded-2xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-6 py-4 bg-primary/5 border border-primary/10 rounded-2xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-medium hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-3 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}