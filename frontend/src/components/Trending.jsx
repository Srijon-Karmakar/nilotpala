import React, { useEffect, useMemo, useState } from "react";
import FlowingMenu from "./flowingMenu"; // <-- adjust path if different
import { ArrowRight, RefreshCw } from "lucide-react";

// Optional: change to your brand tokens
const BRAND = { primary: "#ff9d4d", dark: "#002B5B" };

export default function TrendingPage() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  // --- OPTIONAL API FETCH ---
  // If you have an endpoint like /api/products/trending, uncomment the effect.
  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        setStatus("loading");
        // Replace with your real endpoint:
        // const res = await fetch("/api/products/trending");
        // if (!res.ok) throw new Error("Failed to load trending products");
        // const json = await res.json();
        // if (isMounted) setProducts(json?.data || json || []);

        // For now, we'll simulate a response:
        await new Promise(r => setTimeout(r, 700));
        const demo = [
          { id: "p1", name: "Raphaaa Pro Jacket", slug: "raphaaa-pro-jacket", image: "https://picsum.photos/900/600?random=21" },
          { id: "p2", name: "Velocity Runner", slug: "velocity-runner", image: "https://picsum.photos/900/600?random=22" },
          { id: "p3", name: "Ultralite Backpack", slug: "ultralite-backpack", image: "https://picsum.photos/900/600?random=23" },
          { id: "p4", name: "Studio Headphones", slug: "studio-headphones", image: "https://picsum.photos/900/600?random=24" },
        ];
        if (isMounted) setProducts(demo);
        setStatus("success");
      } catch (err) {
        if (isMounted) {
          setErrorMsg(err?.message || "Something went wrong.");
          setStatus("error");
        }
      }
    })();
    return () => { isMounted = false; };
  }, []);

  // Map to FlowingMenu shape
  const items = useMemo(() => {
    const list = (products || []).map(p => ({
      link: p.slug ? `/product/${p.slug}` : "#",
      text: p.name || "Product",
      image: p.image || "https://picsum.photos/900/600?random=99",
    }));
    // Fallback if API returns empty
    if (!list.length) {
      return [
        { link: "#", text: "Mojave Bottle",    image: "https://picsum.photos/900/600?random=11" },
        { link: "#", text: "Sonoma Hoodie",    image: "https://picsum.photos/900/600?random=12" },
        { link: "#", text: "Monterey Shoes",   image: "https://picsum.photos/900/600?random=13" },
        { link: "#", text: "Sequoia Backpack", image: "https://picsum.photos/900/600?random=14" },
      ];
    }
    return list;
  }, [products]);

  return (
    <main className="min-h-screen text-[#ffbc85] bg-[#ffbc85] dark:bg-[#b5570b]">
      {/* Page Header */}
      <header className="border-b border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-[#000000] backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-wide text-white dark:text-white">Explore</p>
              <h1 className="text-2xl md:text-3xl font-bold" style={{ color: BRAND.primary }}>
                Trending Products
              </h1>
              {/* <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mt-1">
                Hover an item to reveal the flowing marquee preview.
              </p> */}
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/"
                className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-manrope bg-[#ff7300] text-[#000000] hover:bg-[#0C2B59] transition"
                title="Back to Home"
              >
                Home <ArrowRight size={16} />
              </a>
              <button
                onClick={() => window.location.reload()}
                className="font-manrope inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium border border-slate-300 dark:border-white/20 text-slate-700 dark:text-slate-200 hover:bg-slate-50/70 dark:hover:bg-white/5 transition"
                title="Refresh"
              >
                <RefreshCw size={16} />
                Refresh
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Status bar */}
      {status === "loading" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Loading trending items…
          </div>
        </div>
      )}
      {status === "error" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="text-sm text-red-600 dark:text-red-400">
            Failed to load trending items. {errorMsg}
          </div>
        </div>
      )}

      {/* Flowing menu viewport */}
      <section className="relative w-full h-[480px] md:h-[600px] mt-6">
        {/* Skeleton while loading */}
        {status === "loading" ? (
          <div className="w-full h-full">
            <div className="grid grid-rows-4 h-full">
              {[0,1,2,3].map(i => (
                <div key={i} className="relative overflow-hidden">
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <FlowingMenu items={items} />
        )}

        {/* Subtle overlay for depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 dark:to-white/5" />
      </section>

      {/* Footer spacer */}
      <div className="h-10" />
    </main>
  );
}
