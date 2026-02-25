import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import profileImg from "@/assets/profile-colorful.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Playful background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 rounded-full"
          style={{ background: "hsl(340 80% 70% / 0.3)" }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-56 h-56 rounded-full"
          style={{ background: "hsl(15 85% 65% / 0.25)" }}
          animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 w-40 h-40 rounded-full"
          style={{ background: "hsl(48 100% 50% / 0.2)" }}
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          className="mx-auto mb-8 w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 bg-pink-600 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={profileImg}
            alt="Alejandra Bernabel"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        <motion.p
          className="font-display text-sm md:text-base tracking-[0.3em] uppercase mb-6 text-foreground/60"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Software Engineer · Leader · Builder
        </motion.p>

        <motion.h1
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-[0.9] text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="gradient-text">Alejandra</span>
          <br />
          <span>Bernabel</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-4 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Head of Development & Infrastructure
        </motion.p>

        <motion.p
          className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          MS Computer Science @ Georgia Tech · Building systems that{" "}
          <span className="text-pink-600 font-semibold">scale</span>
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            {
              href: "https://github.com/alejandra-e-bernabel",
              icon: <Github className="w-5 h-5" />,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/alejandra-e-bernabel/",
              icon: <Linkedin className="w-5 h-5" />,
              label: "LinkedIn",
            },
            {
              href: "mailto:alejandra.e.bernabel@gmail.com",
              icon: <Mail className="w-5 h-5" />,
              label: "Email",
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 border-foreground/20 hover:bg-pink-600 hover:bg-primary hover:text-white transition-all duration-300"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-pink-600" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
