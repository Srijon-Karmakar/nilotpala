// src/sections/Footer.jsx
import { useMemo } from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="relative w-full text-white font-manrope">
      {/* Top divider glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative overflow-hidden bg-gradient-to-b from-[#5b2600] via-[#2c1500] to-[#000000]">
        {/* soft radial accent */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(26,77,140,0.25),transparent_60%)] blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 md:py-16">
          {/* Brand + Newsletter */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                
                <h3 className="text-xl font-extrabold tracking-tight">Nilotpala</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">
                a demo description oof the brand
              </p>

              {/* Socials */}
              <div className="mt-5 flex items-center gap-4 text-white/80">
                <a className="hover:text-white transition" href="#" aria-label="Twitter"><FiTwitter /></a>
                <a className="hover:text-white transition" href="#" aria-label="Instagram"><FiInstagram /></a>
                <a className="hover:text-white transition" href="#" aria-label="Facebook"><FiFacebook /></a>
                <a className="hover:text-white transition" href="#" aria-label="LinkedIn"><FiLinkedin /></a>
                <a className="hover:text-white transition" href="#" aria-label="GitHub"><FiGithub /></a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">Product</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><a className="hover:text-white transition" href="#">Overview</a></li>
                <li><a className="hover:text-white transition" href="#">Features</a></li>
                <li><a className="hover:text-white transition" href="#">Pricing</a></li>
                <li><a className="hover:text-white transition" href="#">Roadmap</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">Resources</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><a className="hover:text-white transition" href="#">Docs</a></li>
                <li><a className="hover:text-white transition" href="#">Guides</a></li>
                <li><a className="hover:text-white transition" href="#">API</a></li>
                <li><a className="hover:text-white transition" href="#">Status</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">Company</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><a className="hover:text-white transition" href="#">About</a></li>
                <li><a className="hover:text-white transition" href="#">Careers</a></li>
                <li><a className="hover:text-white transition" href="#">Contact</a></li>
                <li><a className="hover:text-white transition" href="#">Privacy</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-md">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h5 className="text-lg font-semibold">Subscribe to updates</h5>
                <p className="mt-1 text-sm text-white/70">
                  Get release notes, improvements, and tips straight to your inbox.
                </p>
              </div>
              <form
                className="flex w-full max-w-md items-center rounded-xl border border-white/10 bg-black/30 p-1"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full bg-transparent px-3 py-2 text-sm outline-none placeholder:text-white/40"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-white/15 hover:bg-white/20 transition"
                >
                  Subscribe <FiSend className="transition group-hover:translate-x-0.5" />
                </button>
              </form>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
            <p>© {year} PDMS. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a className="hover:text-white transition" href="#">Terms</a>
              <span aria-hidden>•</span>
              <a className="hover:text-white transition" href="#">Privacy</a>
              <span aria-hidden>•</span>
              <a className="hover:text-white transition" href="#">Security</a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="group fixed bottom-6 right-6 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/15 backdrop-blur hover:bg-white/20 transition"
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
}
