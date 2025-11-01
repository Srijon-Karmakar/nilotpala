import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import DotGrid from "./dotGrid"; 

export default function CategoriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("show");
  }, [isInView, controls]);

  // === animation variants ===
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
  };
  const cardVariants = {
    hidden: (i) => ({
      opacity: 0,
      y: 40,
      x: (i % 2 === 0 ? -1 : 1) * 20,
      scale: 0.96,
    }),
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 110, damping: 14 },
    },
  };

  const categories = [
    {
      id: 1,
      title: "Men",
      desc: "Create breathtaking visuals instantly with advanced generative AI.",
      icon: "🎨",
    },
    {
      id: 2,
      title: "Women",
      desc: "Transform static content into motion-rich experiences.",
      icon: "🎬",
    },
    {
      id: 3,
      title: "Kids",
      desc: "Build and texture immersive 3D environments effortlessly.",
      icon: "🧊",
    },
    {
      id: 4,
      title: "Accessories",
      desc: "Convert written content into expressive, natural-sounding voices.",
      icon: "🎧",
    },
    {
      id: 5,
      title: "Footwear",
      desc: "Turn raw numbers into insight-driven, interactive dashboards.",
      icon: "📊",
    },
    {
      id: 6,
      title: "Sale",
      desc: "Create and iterate live with GPU-accelerated workflows.",
      icon: "⚡",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-[110vh] overflow-hidden bg-[#05050500] text-white font-manrope py-24"
    >
      {/* === React Bits background layer === */}
      <div className="absolute inset-0 -z-10">
        <DotGrid
          dotSize={14}
          gap={9}
          baseColor="#612e08"
          activeColor="#ff6f00"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* === Section heading === */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16 px-6"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r text-white font-fredericka">
          Explore Categories
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-white leading-relaxed font-manrope">
          Discover specialized areas of creation powered by Nilotpala’s next-gen models.
        </p>
      </motion.div>

      {/* === Category cards === */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-6 font-Manrope"
      >
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            custom={i}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotateX: 4,
              translateY: -6,
              boxShadow: "0 30px 80px rgba(255,255,255,0.15)",
            }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-lg p-8"
          >
            <div className="text-5xl mb-4">{cat.icon}</div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3 tracking-tight group-hover:text-white transition-colors">
              {cat.title}
            </h3>
            <p className="text-sm md:text-base text-white/75 leading-relaxed">
              {cat.desc}
            </p>
            <motion.button
              whileHover={{ x: 4 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/20 transition"
            >
              Explore <span aria-hidden>→</span>
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
