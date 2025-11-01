import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Shuffle from "./text";

/**
 * Seedream 4.0 — Landing (Replica-inspired)
 * Background image now loaded from /public assets
 * Ensure: /public/bg-layers/orange-bg.jpg or any equivalent file exists.
 */

export default function LandingSeedream() {
  /** Smooth scroll (Lenis) **/
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, lerp: 0.12 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(id);
  }, []);

  /** Pointer parallax **/
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateY = useTransform(mouseX, [-0.5, 0, 0.5], [-10, 0, 10]);
  const rotateX = useTransform(mouseY, [-0.5, 0, 0.5], [6, 0, -6]);

  function onPointerMove(e) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
    const y = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  }

  const parallax = (depth = 20) => ({
    x: useTransform(mouseX, [-0.5, 0.5], [depth, -depth]),
    y: useTransform(mouseY, [-0.5, 0.5], [depth, -depth]),
  });

  const silhouetteCount = 4;
  const BG_URL = "/images/main-bg.jpg"; // public background image
  // const MODEL_URL = "/images/hero1.png";

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      {/* Background image from public */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_URL})` }}
      />

      {/* Gradient and lighting overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

      {/* NAVBAR */}
      {/* <header className="absolute left-0 right-0 top-0 z-40 h-16"> */}
      <header
  className="fixed top-0 left-0 right-0 z-50 h-16     transition-all duration-300"
>
        <div className="mx-auto flex max-w-7xl h-full items-center justify-between px-6 py-0 text-white/90 font-manrope">
          
          {/* CHANGED: replaced text spans with logo image */}
          <div className="flex items-center gap-3 text-sm">
            {/* NEW: logo image */}
            <img
              src="/logo/logo.png" 
              alt="Nilotpala Logo"
              className="h-40 w-auto object-contain"
              //  className="
              //   h-12 md:h-14 lg:h-14 w-auto object-contain  scale-[1.15] md:scale-[1.25] -translate-y-[1px]   "
            />
          </div>

          <nav className="hidden gap-6 md:flex">
            {["Home", "Top Seed", "Seed Edge", "Research", "News", "Join Us"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white">EN</span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">Hindi</span>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <main
        ref={ref}
        onPointerMove={onPointerMove}
        className="relative isolate flex min-h-screen items-center overflow-hidden"
      >
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-12 md:gap-6">
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="md:col-span-6 lg:col-span-5"
          >
            <Shuffle
              text="Nilotpala"
              className="text-white text-[5rem]"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
            />

            <p className="mt-5 max-w-xl text-sm leading-6 text-white/85 md:text-[15px]">
              As a new-generation image creation model, Seedream 4.0 integrates image generation and
              editing into a unified architecture with flexible multimodal reasoning and up to 4K output.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["explore", "Become Seller"].map((btn) => (
                <motion.button
                  key={btn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md hover:bg-white/20 transition"
                >
                  {btn}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
