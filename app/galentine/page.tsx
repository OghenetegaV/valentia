"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { playClick } from "@/components/SoundManager";

export default function Page() {
  const [showLetter, setShowLetter] = useState(false);
  const router = useRouter();

  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* Background */}
      <img
        src="/valentia_heart.png"
        alt="Valentia holding heart"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Base gradient */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Extra dark layer when scroll opens */}
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
            text-black
            shadow-lg
            underline-none
        "
        >
        ← Back
        </Link>

      {/* Headline + Buttons (same vertical position as before) */}
      {!showLetter && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-[28%] left-1/2 -translate-x-1/2 z-20 text-center w-full px-6"
        >
          <h1
            className="font-italic-serif 
                       text-[clamp(2rem,6vw,7rem)] 
                       text-white italic
                       drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
          >
            You hold a piece of my heart.
          </h1>

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
              COME ALONG
            </button>

          </div>
        </motion.div>
      )}

      {/* Scroll Overlay (original size restored) */}
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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="relative w-[92vw] max-w-[600px]"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src="/scroll.png"
                alt="Scroll"
                className="w-full drop-shadow-[0_40px_100px_rgba(0,0,0,0.9)]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div
                className="absolute
                           left-[16%] right-[16%]
                           top-[20%] bottom-[25%]
                           flex flex-col items-center justify-center
                           text-center"
              >
                <p className="font-serif text-[#3b2b1f] text-base md:text-lg leading-relaxed">
                  My dearest,
                  <br /><br />
                  Even in the smallest fragment of love,
                  you have found a home inside my heart.
                  <br /><br />
                  This is not a confession —
                  it is a promise.
                </p>

                <button
                  onClick={() => setShowLetter(false)}
                  className="mt-10 text-sm text-[#3b2b1f] tracking-wide underline"
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