import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Georgia Institute of Technology",
    degree: "MS Computer Science",
    specialization: "Artificial Intelligence",
    period: "Expected Dec 2026",
    gpa: "4.0 GPA",
    highlights: [
      "AI Specialization",
      "Graduate Research Assistant",
      "Collaborative Wellness Lab",
    ],
  },
  {
    school: "University of Central Florida",
    degree: "BS Mathematics",
    specialization: "Minor in Computer Science",
    period: "Graduated 2022",
    gpa: "Cum Laude",
    highlights: ["Burnett Honors Scholar", "Cum Laude", "Mathematics + CS"],
  },
];

const EducationSection = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-2 text-foreground">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-pink-600 rounded-full mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl border-2 border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-pink-500/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-xl bg-pink-600/10 text-pink-600 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {edu.school}
                  </h3>
                  <p className="text-pink-600 text-sm font-semibold">
                    {edu.degree}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {edu.specialization}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-pink-600 text-white text-xs border-0">
                  {edu.period}
                </Badge>
                <Badge className="bg-yellow-500 text-black text-xs border-0">
                  {edu.gpa}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-2">
                {edu.highlights.map((h) => (
                  <Badge
                    key={h}
                    variant="outline"
                    className="text-xs border-foreground/15 text-foreground/60"
                  >
                    {h}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
