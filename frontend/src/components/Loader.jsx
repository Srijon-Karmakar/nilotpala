import React, { useEffect } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }) {
  useEffect(() => {
    gsap.fromTo(
      ".loader-text",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    const timeout = setTimeout(() => {
      gsap.to(".loader", {
        opacity: 0,
        duration: 1.5,
        ease: "power3.inOut",
        onComplete,
      });
    }, 3000);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div className="loader fixed inset-0 flex items-center justify-center bg-[#955409] z-[9999]">
      <h1 className="loader-text text-white text-[9vw] font-logo">Nilotpala</h1>
    </div>
  );
}
