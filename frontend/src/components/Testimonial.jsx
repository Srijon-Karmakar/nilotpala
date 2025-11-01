// src/sections/TestimonialSection.jsx
import React, { useMemo } from "react";
import InfiniteMenu from "./matrixMenu"; // <-- change to './InfiniteMenu' if it's in the same folder

/**
 * TestimonialSection
 * - Uses InfiniteMenu with items: { image, link, title, description }
 * - You can pass your own items via props, or it falls back to demo items.
 */
export default function TestimonialSection({ items: externalItems = [] }) {
  // exact usage shape you provided
  const items = useMemo(() => {
    if (externalItems.length) return externalItems;
    return [
      {
        image: "https://picsum.photos/300/300?grayscale",
        link: "https://google.com/",
        title: "Item 1",
        description: "This is pretty cool, right?",
      },
      {
        image: "https://picsum.photos/400/400?grayscale",
        link: "https://google.com/",
        title: "Item 2",
        description: "This is pretty cool, right?",
      },
      {
        image: "https://picsum.photos/500/500?grayscale",
        link: "https://google.com/",
        title: "Item 3",
        description: "This is pretty cool, right?",
      },
      {
        image: "https://picsum.photos/600/600?grayscale",
        link: "https://google.com/",
        title: "Item 4",
        description: "This is pretty cool, right?",
      },
    ];
  }, [externalItems]);

  return (
    <section className="relative w-full py-14 bg-[#b5570b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A4D8C] dark:text-white">
            Testimonials
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl">
            What people are saying about Nilotpala.
          </p>
          <div className="mt-3 w-24 h-[3px] bg-[#1A4D8C] dark:bg-[#FFD884] rounded-full" />
        </div>

        {/* === Your required usage === */}
        <div style={{ height: "400px", position: "relative" }}>
          <InfiniteMenu items={items}/>
        </div>
      </div>
    </section>
  );
}
