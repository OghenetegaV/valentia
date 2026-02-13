"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ValentinePage() {
  const [showLetter, setShowLetter] = useState(false);
  const router = useRouter();

  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* Background */}
      <img
        src="/valentia_winking.png"
        alt="Valentia"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Base Gradient */}
      <div className="absolute inset-0 
                      bg-gradient-to-b 
                      from-black/70 
                      via-black/40 
                      to-black/85" />

      {/* Extra Dark Layer (fades in only when letter opens) */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: showLetter ? 0.6 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Back Button (fixed color + visibility) */}
      <div className="absolute top-6 left-6 z-40">
        <Link
          href="/"
          className="text-[#f5e6c8] hover:text-white
                     tracking-wider text-sm
                     transition"
        >
          ← Back
        </Link>
      </div>

      {/* Main Panel (hidden when letter opens) */}
      {!showLetter && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-20 flex items-center justify-center px-6"
        >
          <div className="relative w-full max-w-2xl text-center 
                          bg-black/40 
                          border border-white/10
                          backdrop-blur-md
                          px-10 py-14
                          shadow-[0_40px_120px_rgba(0,0,0,0.8)]">

            <h1
              className="font-italic-serif 
                         text-[clamp(2rem,6vw,5rem)] 
                         text-[#f5e6c8] 
                         italic
                         drop-shadow-[0_0_30px_rgba(255,215,150,0.6)]"
            >
              For You.
            </h1>

            <p className="mt-6 text-white/70 tracking-wide">
              A single rose carries more than petals.
            </p>

            <div className="mt-12 flex justify-center gap-8 flex-wrap">

              <button
                onClick={() => setShowLetter(true)}
                className="px-8 py-3 font-grand tracking-[0.15em]
                           bg-gradient-to-b from-[#e6c88a] to-[#b89a5e]
                           text-black
                           shadow-[0_15px_50px_rgba(0,0,0,0.6)]
                           hover:scale-105
                           hover:shadow-[0_25px_60px_rgba(230,200,138,0.6)]
                           active:scale-95
                           transition-all duration-300"
              >
                READ MY HEART
              </button>

              <button
                onClick={() => router.push("/gallery")}
                className="px-8 py-3 font-grand tracking-[0.15em]
                           bg-gradient-to-b from-[#8b0000] to-[#4a0000]
                           text-white
                           shadow-[0_15px_50px_rgba(0,0,0,0.6)]
                           hover:scale-105
                           hover:shadow-[0_25px_60px_rgba(139,0,0,0.6)]
                           active:scale-95
                           transition-all duration-300"
              >
                WALK WITH ME
              </button>

            </div>
          </div>
        </motion.div>
      )}

      {/* Scroll Overlay */}
      <AnimatePresence>
        {showLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setShowLetter(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="relative w-[95vw] max-w-[900px]"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src="/scroll.png"
                alt="Scroll"
                className="w-full drop-shadow-[0_60px_140px_rgba(0,0,0,0.9)]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div
                className="absolute
                           left-[14%] right-[14%]
                           top-[18%] bottom-[22%]
                           flex flex-col items-center justify-center
                           text-center"
              >
                <p className="font-serif text-[#3b2b1f] text-xl md:text-2xl leading-relaxed">
                  My love,
                  <br /><br />
                  If I could place this rose into your hands,
                  I would not hesitate.
                  <br /><br />
                  Beauty fades.
                  Intention does not.
                </p>

                <button
                  onClick={() => setShowLetter(false)}
                  className="mt-12 text-base text-[#3b2b1f] tracking-wide underline"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}