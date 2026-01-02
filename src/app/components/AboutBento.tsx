import { motion } from "motion/react";
import { Code, Palette, Rocket, Users, Zap, Heart } from "lucide-react";
import { resumeData } from "../data/resume";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function AboutBento() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-secondary" />
            <span className="text-sm tracking-wider uppercase text-muted-foreground">
              About Me
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold">
            <span className="text-foreground">Crafting Digital</span>
            <br />
            <span className="text-primary">Experiences</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Large card - Bio */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:row-span-2 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 lg:p-12 rounded-3xl border border-foreground/5 hover:border-primary/20 transition-all duration-500 group"
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">Who I Am</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {resumeData.summary}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Based in <span className="text-primary font-medium">{resumeData.location}</span>, 
                  I blend technical expertise with creative problem-solving to build innovative solutions.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href={`mailto:${resumeData.email}`}
                  className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300"
                >
                  <span className="font-medium">Let's collaborate</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Skills card */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-3xl border border-foreground/5 hover:border-secondary/20 transition-all duration-500 group hover:shadow-2xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Code className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Skills</h3>
            <div className="space-y-2">
              {resumeData.skills.slice(0, 4).map((skill, i) => (
                <div key={i} className="text-sm text-muted-foreground">
                  • {skill}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-secondary/10 to-primary/10 p-8 rounded-3xl border border-foreground/5 hover:border-primary/20 transition-all duration-500 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white rounded-full text-xs font-medium text-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Education card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-foreground text-white p-8 rounded-3xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <div className="text-2xl font-bold mb-2">{resumeData.education[0].degree}</div>
              <div className="text-white/70">{resumeData.education[0].school}</div>
              <div className="text-sm text-white/50 mt-2">{resumeData.education[0].period}</div>
            </div>
          </motion.div>

          {/* Philosophy card */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-3xl border border-foreground/5 hover:border-primary/20 transition-all duration-500 group hover:shadow-2xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Rocket className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Philosophy</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Innovation through exploration and continuous learning
            </p>
          </motion.div>

          {/* Collaboration card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-3xl hover:scale-[1.02] transition-all duration-500 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Let's Work</h3>
            <p className="text-sm text-white/90 leading-relaxed">
              Open to opportunities and collaborations
            </p>
          </motion.div>
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-foreground/10"
        >
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">{resumeData.projects.length}+</div>
            <div className="text-sm text-muted-foreground">Projects Built</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-secondary mb-2">{resumeData.experience.length}+</div>
            <div className="text-sm text-muted-foreground">Experiences</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">{resumeData.skills.length}+</div>
            <div className="text-sm text-muted-foreground">Skills</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-secondary mb-2">1</div>
            <div className="text-sm text-muted-foreground">Degree</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
