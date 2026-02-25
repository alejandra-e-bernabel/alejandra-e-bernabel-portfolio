import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const useCounter = (end: number, duration = 2000, inView = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, inView]);
  return count;
};

const MetricHighlight = ({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCounter(value, 1500, inView);
  return (
    <div ref={ref} className="text-center">
      <span className="font-display text-3xl font-bold text-pink-600">
        {count}
        {suffix}
      </span>
      <p className="text-xs text-foreground/50 mt-1">{label}</p>
    </div>
  );
};

interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    title: "Head of Development & Infrastructure",
    company: "Kramer America",
    period: "2025 – Present",
    achievements: [
      "Lead all software development and IT infrastructure initiatives",
      "Spearheaded product catalog integration across all sales channels",
      "Reduced cloud costs from $100K to $58K annually",
      "Built and managed CI/CD pipelines reducing deployment time by 98%",
    ],
  },
  {
    title: "Software Engineer",
    company: "Kramer America",
    period: "2023 – 2025",
    achievements: [
      "Developed 67 automation scripts and 5 full-stack internal applications",
      "Saved $200K+ annually through process automation",
      "Built Smartliner e-commerce platform with Redis, PostgreSQL, Docker",
      "Implemented AI-powered data indexing for product catalog",
    ],
  },
  {
    title: "Graduate Research Assistant",
    company: "Georgia Tech — Collaborative Wellness Lab",
    period: "2025",
    achievements: [
      "Primary developer on AI accessibility tool (354+ commits)",
      "Building AI tools for students with intellectual and developmental disabilities",
      "Collaborating with interdisciplinary research team",
    ],
  },
];

const testimonial = {
  quote:
    "Alejandra stepped into my former role and truly made it her own— raising the bar in ways that speak volumes about her capability and growth. She's not just a great teammate; she's a force multiplier for any team lucky enough to have her.",
  author:
    "Max McNally, Former Manager at Kramer America Inc. Former Manager, Kramer America",
};

const ExperienceSection = () => {
  return (
    <section className="py-24 px-4 md:px-8 section-dark">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-2 text-foreground">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-pink-600 rounded-full mb-8" />

          <div className="flex justify-around items-center rounded-2xl border-2 border-white/10 bg-white/5 backdrop-blur-sm p-6 mb-12">
            <MetricHighlight value={98} suffix="%" label="Faster Deployments" />
            <MetricHighlight value={42} suffix="%" label="Cost Reduction" />
            <MetricHighlight
              value={67}
              suffix="+"
              label="Deployed & Active Scripts"
            />
            <MetricHighlight
              value={2035}
              suffix="+"
              label="Organization Commits"
            />
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-pink-600" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.title}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-pink-600" />

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="rounded-2xl border-2 border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-pink-500/40 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <Badge className="bg-primary text-white text-xs border-0">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((a) => (
                      <li
                        key={a}
                        className="text-foreground/60 text-sm flex items-start gap-2"
                      >
                        <span className="text-orange-300 mt-1.5 shrink-0">
                          ▸
                        </span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 relative rounded-2xl border-2 border-pink-600/30 bg-white/5 backdrop-blur-sm p-8"
        >
          <Quote className="w-8 h-8 text-pink-600/40 mb-4" />
          <p className="text-foreground text-lg italic leading-relaxed mb-4">
            "{testimonial.quote}"
          </p>
          <p className="text-muted-foreground text-sm">
            — {testimonial.author}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
