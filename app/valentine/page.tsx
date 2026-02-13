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
        src="/valentia_roses.png"
        alt="Valentia"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Base Gradient */}
      <div className="absolute inset-0 
                      bg-gradient-to-b 
                      from-black/70 
                      via-black/40 
                      to-black/85" />

      {/* Extra Dark Layer when letter opens */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: showLetter ? 0.6 : 0 }}
        transition={{ duration: 0.4 }}
      />

        {/* Back Button */}
        <Link
        href="/"
        style={{
            position: "fixed",
            top: "22px",
            left: "22px",
            zIndex: 9999,
        }}
        className="
            px-10 py-5
            text-4xl
            font-grand
            text-[#f5e6c8]
            shadow-lg
            underline-none
        "
        >
        ← Back
        </Link>

      {/* ===== CENTERED MAIN PANEL ===== */}
      {!showLetter && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute left-1/2 top-1/2 
                     -translate-x-1/2 -translate-y-1/2 
                     z-20 w-full px-6"
        >
          <div
            className="relative w-full max-w-2xl mx-auto
                       text-center
                       bg-black/40 
                       border border-white/10
                       backdrop-blur-md
                       px-12 py-16
                       shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
          >
            <h1
              className="font-italic-serif 
                         text-[clamp(2rem,6vw,5rem)] 
                         text-[#f5e6c8] 
                         italic
                         leading-tight
                         drop-shadow-[0_0_30px_rgba(255,215,150,0.6)]"
            >
              Choose a path
            </h1>

            <div className="my-12 flex justify-center gap-8 flex-wrap">

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
                READ ME
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

      {/* ===== SCROLL OVERLAY ===== */}
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
                className="w-full drop-shadow-[0_60px_140px_rgba(0,0,0,0.9)] opacity-70"
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