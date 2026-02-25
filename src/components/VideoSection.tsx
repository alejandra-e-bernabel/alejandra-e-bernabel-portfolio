import { motion } from "framer-motion";
import workVideo from "@/assets/work-video.mp4";

const VideoSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 section-dark">
      {/* Marquee banner */}
      <div className="overflow-hidden mb-12">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="font-display text-sm md:text-base uppercase tracking-[0.3em] mx-8 text-background/60">
              ✦ Developer · Engineer · Leader · Creator ✦ Developer · Engineer · Leader · Creator
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border-4 border-yellow w-full max-w-md mx-auto"
          >
            <video
              className="w-full aspect-[9/16] object-contain bg-black"
              controls
              playsInline
              preload="metadata"
            >
              <source src={workVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* About Me Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-background">
                About <span className="gradient-text-yellow">Me</span>
              </h2>
              <div className="w-20 h-1 bg-yellow rounded-full mb-6" />
            </div>

            <div className="space-y-4 text-background/80">
              <p className="text-lg leading-relaxed">
                I'm a software engineer passionate about building scalable systems and leading
                teams to deliver impactful solutions. Currently pursuing my MS in Computer Science
                at Georgia Tech while working as Head of Development & Infrastructure.
              </p>

              <p className="text-lg leading-relaxed">
                My journey spans full-stack development, cloud architecture, and AI/ML integration.
                I thrive on solving complex technical challenges and mentoring others to grow in
                their careers.
              </p>

              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, reading a good book, or winning a deck-building game.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
