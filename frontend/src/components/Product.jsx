import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Silk from "./silk"; 
import CircularCard from './circularCard'

export default function ProductSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) controls.start("show");
    }, [isInView, controls]);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.2 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 80, scale: 0.9 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 14 },
        },
    };

    const products = [
        {
            id: 1,
            name: "Nilotpala Studio",
            desc: "Advanced generative model for creative professionals — render, animate, and stylize visuals in real time.",
            img: "/images/product1.png",
        },
        {
            id: 2,
            name: "Seedream Engine",
            desc: "High-speed AI renderer that powers next-gen content generation with GPU acceleration and 4K fidelity.",
            img: "/images/product2.png",
        },
        {
            id: 3,
            name: "VisionEdge",
            desc: "Visual intelligence platform connecting creators with adaptive, multimodal AI ecosystems.",
            img: "/images/product3.png",
        },
    ];

    return (
        <section
            ref={ref}
            className="relative min-h-[120vh] overflow-hidden bg-[#0a0a0a00] text-white font-manrope py-24"
        >
            {/* === React Bits Background === */}
            <div className="absolute inset-0 -z-10">
                <Silk
                    speed={8.5}
                    scale={1.1}
                    color="#e36212"
                    noiseIntensity={1.2}
                    rotation={0.3}
                />
            </div>

            {/* === Section Title === */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center mb-20 z-10 relative"
            >
                <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white  via-grey/400 to-grey font-fredericka">
                    Explore Our Products
                </h2>
                <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-white/70 leading-relaxed">
                    Harness the full potential of Nilotpala’s Luxury Collection — from Ethnic to Modern.
                </p>
            </motion.div>

            {/* === Product Cards === */}
            {/* <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 grid gap-10 md:grid-cols-3 max-w-7xl mx-auto px-6"
      >
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotateY: 3,
              boxShadow: "0 20px 60px rgba(255,255,255,0.15)",
            }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            className="group relative overflow-hidden rounded-3xl bg-white/10 border border-white/20 backdrop-blur-lg p-6"
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-48 object-cover rounded-2xl mb-5 transition-transform duration-500 group-hover:scale-110"
            />
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-fuchsia-300 group-hover:text-white transition-colors">
              {p.name}
            </h3>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              {p.desc}
            </p>
          </motion.div>
          
        ))}
      </motion.div> */}

            <div style={{ height: '600px', position: 'relative' }}>
                <CircularCard bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
            </div>











        </section>
    );
}
