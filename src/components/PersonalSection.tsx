import { motion } from "framer-motion";
import { Cat, Scissors } from "lucide-react";
import catsAll from "@/assets/cats-all.jpg";
import catsFinn from "@/assets/cats-finn.jpg";
import catsPooter from "@/assets/cats-pooter.jpg";
import craftCandles from "@/assets/craft-candles-cola.jpeg";
import craftMilkshake from "@/assets/craft-milkshake.jpeg";
import craftEarrings from "@/assets/craft-earrings.jpeg";

const PersonalSection = () => {
  return (
    <section className="relative py-24 px-4 md:px-8 section-dark overflow-hidden">
      {/* Playful background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 rounded-full"
          style={{ background: "hsl(48 100% 50% / 0.25)" }}
          animate={{ x: [0, 25, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-56 h-56 rounded-full"
          style={{ background: "hsl(340 80% 70% / 0.3)" }}
          animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 w-40 h-40 rounded-full"
          style={{ background: "hsl(20 90% 60% / 0.2)" }}
          animate={{ x: [0, 35, -15, 0], y: [0, -25, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-2 text-foreground">
            Beyond <span className="gradient-text-yellow">Code</span>
          </h2>
          <div className="w-20 h-1 rounded-full mb-4 bg-gradient-to-r from-yellow-400 to-orange-500" />
          <p className="text-foreground/60 mb-10 max-w-2xl">
            Building things doesn't stop at software — here's what I love
            outside of work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl border-2 border-foreground/10 bg-background/60 backdrop-blur-sm p-8 hover:border-yellow/50 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-yellow-500/20 text-yellow-foreground group-hover:bg-yellow-500 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all duration-300">
                <Cat className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Foster Cats
              </h3>
            </div>

            <p className="text-foreground/60 leading-relaxed mb-6">
              I foster cats and help them find their forever homes. Each one has
              a unique personality, and watching them go from scared shelter
              babies to confident, cuddly companions is one of the most
              rewarding things I do.
            </p>

            <div className="grid grid-cols-3 gap-3">
              {[
                { src: catsFinn, alt: "Finn sleeping in milk bed" },
                { src: catsPooter, alt: "Pooter with puzzles" },
                { src: catsAll, alt: "Alejandra with all cats" },
              ].map((item) => (
                <div
                  key={item.alt}
                  className="aspect-square rounded-xl overflow-hidden border-2 border-foreground/5 hover:border-yellow/30 transition-colors"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl border-2 border-foreground/10 bg-background/60 backdrop-blur-sm p-8 hover:border-secondary/50 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-secondary/20 text-orange-400 group-hover:bg-orange-500 group-hover:text-secondary-foreground group-hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all duration-300">
                <Scissors className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Crafting
              </h3>
            </div>

            <p className="text-foreground/60 leading-relaxed mb-6">
              I love creating new things and practicing different crafts. The
              less I know about it, the better! I bring this energy and
              excitement about new challenges into every aspect of my life.
            </p>

            <div className="grid grid-cols-3 gap-3">
              {[
                { src: craftMilkshake, alt: "Strawberry milkshake candle" },
                { src: craftCandles, alt: "Soda-themed candles" },
                { src: craftEarrings, alt: "Duck float earrings" },
              ].map((item) => (
                <div
                  key={item.alt}
                  className="aspect-square rounded-xl overflow-hidden border-2 border-foreground/5 hover:border-secondary/30 transition-colors"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
