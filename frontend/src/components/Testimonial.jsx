// // src/sections/TestimonialsSection.jsx
// import { useEffect, useMemo, useState } from "react";
// import Carousel from "./carosol";

// /** Replace these with your real testimonials */
// const TESTIMONIALS = [
//   {
//     id: 1,
//     name: "Aditi Sharma",
//     role: "Product Designer, NovaWorks",
//     quote:
//       "The UI components are insanely smooth. We shipped a polished MVP in days instead of weeks.",
//     avatar: "https://i.pravatar.cc/80?img=5",
//   },
//   {
//     id: 2,
//     name: "Rahul Verma",
//     role: "Frontend Lead, PixelForge",
//     quote:
//       "Animations feel premium and never janky. Our bounce rate dropped noticeably after integrating.",
//     avatar: "https://i.pravatar.cc/80?img=12",
//   },
//   {
//     id: 3,
//     name: "Sophia Lee",
//     role: "Founder, Flow Studio",
//     quote:
//       "Clean API, great defaults, and the right kind of flexibility. This saved us so much time.",
//     avatar: "https://i.pravatar.cc/80?img=32",
//   },
//   {
//     id: 4,
//     name: "Arjun Mehta",
//     role: "Engineering Manager, CloudZen",
//     quote:
//       "From micro-interactions to full carousels—everything just works. Dev experience = A+.",
//     avatar: "https://i.pravatar.cc/80?img=21",
//   },
//   {
//     id: 5,
//     name: "Maya Kapoor",
//     role: "Creative Director, Lumen",
//     quote:
//       "Looks world-class out of the box. Clients love the motion and polish across the site.",
//     avatar: "https://i.pravatar.cc/80?img=8",
//   },
// ];

// function useResponsiveWidth(defaultWidth = 320) {
//   const [w, setW] = useState(defaultWidth);
//   useEffect(() => {
//     const compute = () => {
//       if (typeof window === "undefined") return;
//       const vw = window.innerWidth;
//       // clamp between 280 and 420 for nice proportions
//       const target = Math.max(280, Math.min(420, Math.floor(vw * 0.85)));
//       setW(target);
//     };
//     compute();
//     window.addEventListener("resize", compute);
//     return () => window.removeEventListener("resize", compute);
//   }, []);
//   return w;
// }

// export default function TestimonialsSection() {
//   const baseWidth = useResponsiveWidth(320);

//   // Map your domain data -> Carousel item shape
//   const items = useMemo(
//     () =>
//       TESTIMONIALS.map((t) => ({
//         id: t.id,
//         title: t.name,
//         description: (
//           <>
//             <span className="block text-xs/relaxed opacity-80">{t.role}</span>
//             <span className="block mt-2">“{t.quote}”</span>
//           </>
//         ),
//         icon: (
//           <span className="flex h-[28px] w-[28px] items-center justify-center overflow-hidden rounded-full ring-1 ring-white/20">
//             <img
//               src={t.avatar}
//               alt={t.name}
//               className="h-full w-full object-cover"
//               loading="lazy"
//             />
//           </span>
//         ),
//       })),
//     []
//   );

//   return (
//     <section className="relative w-full py-16 md:py-24 bg-[#0a0a0a]">
//       <div className="mx-auto max-w-6xl px-4">
//         <div className="mb-10 md:mb-14 text-center">
//           <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
//             Loved by teams who ship fast
//           </h2>
//           <p className="mt-3 text-sm md:text-base text-white/70">
//             Real feedback from designers and engineers using our animated
//             building blocks in production.
//           </p>
//         </div>

        

//         {/* Optional: a second row with round style for variety */}
//         <div className="mt-12 grid place-items-center">
//           <div
//             style={{
//               height: `${baseWidth}px`,
//               position: "relative",
//               maxWidth: `${baseWidth}px`,
//             }}
//           >
//             <Carousel
//               items={items}
//               baseWidth={baseWidth}
//               autoplay={true}
//               autoplayDelay={1000}
//               pauseOnHover={true}
//               loop={true}
//               round={true}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

















// src/sections/TestimonialsSection.jsx
import { useEffect, useMemo, useState } from "react";
import Carousel from "./carosol";
import Waves from "./waveBg";

/** Replace these with your real testimonials */
const TESTIMONIALS = [
  {
    id: 1,
    name: "Aditi Sharma",
    role: "Product Designer, NovaWorks",
    quote:
      "The UI components are insanely smooth. We shipped a polished MVP in days instead of weeks.",
    avatar: "https://i.pravatar.cc/80?img=5",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Frontend Lead, PixelForge",
    quote:
      "Animations feel premium and never janky. Our bounce rate dropped noticeably after integrating.",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "Founder, Flow Studio",
    quote:
      "Clean API, great defaults, and the right kind of flexibility. This saved us so much time.",
    avatar: "https://i.pravatar.cc/80?img=32",
  },
  {
    id: 4,
    name: "Arjun Mehta",
    role: "Engineering Manager, CloudZen",
    quote:
      "From micro-interactions to full carousels—everything just works. Dev experience = A+.",
    avatar: "https://i.pravatar.cc/80?img=21",
  },
  {
    id: 5,
    name: "Maya Kapoor",
    role: "Creative Director, Lumen",
    quote:
      "Looks world-class out of the box. Clients love the motion and polish across the site.",
    avatar: "https://i.pravatar.cc/80?img=8",
  },
];

function useResponsiveWidth(defaultWidth = 320) {
  const [w, setW] = useState(defaultWidth);
  useEffect(() => {
    const compute = () => {
      if (typeof window === "undefined") return;
      const vw = window.innerWidth;
      // clamp between 280 and 420 for nice proportions
      const target = Math.max(280, Math.min(420, Math.floor(vw * 0.85)));
      setW(target);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return w;
}

export default function TestimonialsSection() {
  const baseWidth = useResponsiveWidth(320);

  // Map your domain data -> Carousel item shape
  const items = useMemo(
    () =>
      TESTIMONIALS.map((t) => ({
        id: t.id,
        title: t.name,
        description: (
          <>
            <span className="block text-xs/relaxed opacity-80">{t.role}</span>
            <span className="block mt-2">“{t.quote}”</span>
          </>
        ),
        icon: (
          <span className="flex h-[28px] w-[28px] items-center justify-center overflow-hidden rounded-full ring-1 ring-white/20">
            <img
              src={t.avatar}
              alt={t.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </span>
        ),
      })),
    []
  );

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Waves background (non-interactive) */}
      <Waves
        lineColor="rgba(0, 0, 0, 1)"
        backgroundColor="rgba(255, 104, 0, 0.8)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
        className="pointer-events-none select-none opacity-70"
      />

      {/* Soft gradient overlay for contrast over the waves */}
      <div className="pointer-events-none absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Loved by teams who ship fast
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/70">
            Real feedback from designers and engineers using our animated
            building blocks in production.
          </p>
        </div>

        {/* Main carousel (rounded style as in your snippet) */}
        <div className="mt-12 grid place-items-center">
          <div
            style={{
              height: `${baseWidth}px`,
              position: "relative",
              maxWidth: `${baseWidth}px`,
            }}
          >
            <Carousel
              items={items}
              baseWidth={baseWidth}
              autoplay={true}
              autoplayDelay={1000}
              pauseOnHover={true}
              loop={true}
              round={true}
            />
          </div>
        </div>

        {/* OPTIONAL: Uncomment for a second row with rectangular cards
        <div className="mt-12 grid place-items-center">
          <div
            style={{
              height: "360px",
              position: "relative",
              maxWidth: `${baseWidth}px`,
            }}
          >
            <Carousel
              items={items}
              baseWidth={baseWidth}
              autoplay={true}
              autoplayDelay={3200}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
        </div>
        */}
      </div>
    </section>
  );
}

