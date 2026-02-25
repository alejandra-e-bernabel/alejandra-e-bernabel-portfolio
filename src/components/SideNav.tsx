import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "personal", label: "Beyond Code" },
  { id: "contact", label: "Contact" },
];

const SideNav = () => {
  const [active, setActive] = useState("hero");
  const [compactProgress, setCompactProgress] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (!heroSection) return;

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      const scrollPosition = window.scrollY;

      // Create a smooth transition zone (200px range)
      const transitionStart = heroBottom - 300;
      const transitionEnd = heroBottom;
      const transitionRange = transitionEnd - transitionStart;

      if (scrollPosition < transitionStart) {
        setCompactProgress(0);
      } else if (scrollPosition > transitionEnd) {
        setCompactProgress(1);
      } else {
        const progress = (scrollPosition - transitionStart) / transitionRange;
        setCompactProgress(Math.max(0, Math.min(1, progress)));
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed left-5 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center">
      {/* Vertical connecting line - fades in as we scroll */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-pink-500/20 -translate-x-1/2"
        style={{
          scaleY: compactProgress,
          originY: 0,
          opacity: compactProgress
        }}
      />

      <div className="relative flex flex-col gap-3">
        {sections.map(({ id, label }) => {
          const isActive = active === id;
          const isHovered = hoveredId === id;

          // More gradual label visibility - fade out earlier and show when hovered
          const isCompactMode = compactProgress > 0.8;
          const showLabel = !isCompactMode || isHovered;

          // Calculate label opacity based on scroll progress (fades between 0.3-0.8)
        //   const labelOpacity = isHovered
        //     ? 1
        //     : Math.max(0, Math.min(1, (0.8 - compactProgress) / 0.5));

          // Calculate smooth interpolation values based on progress
          const circleSize = isHovered
            ? 0.5
            : 0.5 + (0.5 * compactProgress);

          return (
            <motion.button
              key={id}
              onClick={() => scrollTo(id)}
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative flex items-center rounded-full border-2 overflow-hidden ${
                isActive
                  ? "bg-pink-500 border-pink-500 text-black"
                  : "bg-white backdrop-blur-sm border-pink-500/30 text-black hover:border-pink-500 hover:text-foreground"
              }`}
              animate={{
                scale: isActive ? 1.05 : 1,
                width: showLabel ? "auto" : "2.5rem",
                height: "2.5rem",
              }}
              style={{
                paddingLeft: showLabel ? "1rem" : "0.625rem",
                paddingRight: showLabel ? "1rem" : "0.625rem",
              }}
              whileHover={{ scale: 1.08 }}
            //   whileTap={{ scale: 0.95 }}
            //   transition={{
            //     duration: 0.5,
            //     ease: "easeInOut",
            //   }}
            >
              <div className="flex items-center justify-center h-full">
                {/* Circle indicator - always visible */}
                <motion.div
                  className={`rounded-full shrink-0 ${
                    isActive ? "bg-pink-500" : "bg-pink-500/40"
                  }`}
                  animate={{
                    width: `${circleSize}rem`,
                    height: `${circleSize}rem`,
                  }}
                  style={{
                    marginRight: showLabel ? "0.5rem" : "0",
                  }}
                //   transition={{ duration: 0.5, ease: "easeInOut" }}
                />

                {/* Label - animates width and opacity together */}
                <motion.span
                  className="text-xs font-display font-semibold uppercase tracking-wider whitespace-nowrap overflow-hidden"
                  animate={{
                    // opacity: labelOpacity,
                    width: showLabel ? "auto" : 0,
                  }}
                //   transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {label}
                </motion.span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
};

export default SideNav;
