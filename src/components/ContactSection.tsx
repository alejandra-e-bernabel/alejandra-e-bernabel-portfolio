import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/alejandra-e-bernabel",
    icon: <Github className="w-5 h-5" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alejandra-e-bernabel/",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    label: "Email",
    href: "mailto:alejandra.e.bernabel@gmail.com",
    icon: <Mail className="w-5 h-5" />,
  },
];

const ContactSection = () => {
  return (
    <footer className="py-24 px-4 md:px-8 section-dark">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Let's <span className="text-yellow">Connect</span>
          </h2>

          <div className="flex items-center justify-center gap-4 mb-16 flex-wrap">
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full border-2 border-background/20 text-background/80 hover:bg-yellow-500 hover:text-yellow-foreground hover:border-yellow transition-all duration-300 group"
                whileHover={{ y: -2 }}
              >
                {link.icon}
                <span className="text-sm font-semibold">{link.label}</span>
                <ArrowUpRight className="w-3 h-3" />
              </motion.a>
            ))}
          </div>

          <div className="text-background/40 text-xs">
            <p>Designed & built by Alejandra Bernabel</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default ContactSection;
