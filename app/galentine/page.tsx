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
        href="/open"
        onClick={() => {
          playClick();
        }}
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
            text-[#000]
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
              onClick={() => {
                playClick();
                setShowLetter(true);
              }}
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
              onClick={() => {
                    playClick();
                    router.push("/gallery-gal");
                  }}
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

      {/* ===== SCROLL OVERLAY ===== */}
      <AnimatePresence>
        {showLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/60"
            onClick={() => setShowLetter(false)}
          >

            {/* PERFECT CENTER */}
            <div
              className="
                absolute
                top-[50%] left-[50%]
                translate-x-[9%] translate-y-[35%]

                md:top-1/2 md:left-1/2
                md:-translate-x-1/2 md:-translate-y-1/2

                w-[92vw]
                max-w-[650px]
              "
              onClick={(e) => e.stopPropagation()}
            >

              <motion.img
                src="/scroll.png"
                alt="Scroll"
                className="w-full drop-shadow-[0_40px_100px_rgba(0,0,0,0.9)]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.8 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.45 }}
              />

              {/* SCROLL CONTENT AREA (Scrollable) */}
              <div
                style={{
                  position: "absolute",
                  top: "20%",
                  left: "16%",
                  right: "16%",
                  bottom: "22%",
                  overflowY: "auto",
                  paddingRight: "6px",
                }}
                className="text-center"
              >
                <p className="font-serif text-[#3b2b1f] text-base md:text-lg leading-relaxed">
                  Hi love 💖 <br /><br />

                  If you’re here, just know you’re a certified precious human and I genuinely value you so much. And honestly… what better way to say that than by geeking out and making an animated representation of my heart for you? 😂 Because if I can’t express love dramatically and slightly unhinged, is it even me? <br /><br />

                  I mean… if you’re seeing this, you already know I love my Anime badddd. Like unnecessarily deep. And I’m saying it now with full chest, I love you the same way… maybe even more😭 <br /><br />

                  I really can’t wait to see where our friendship takes us. Soft life? Chaotic adventures? Random 2am voice notes? The possibilities are endless. <br /><br />

                  Just know this, I’ll always be on your side. Hyping you. Defending you. Supporting your delusions within reason 😌 <br /><br />

                  Love you girl. For real for real 💖 <br /><br />

                  ~Anthonia ✨
                </p>

                <button
                  onClick={() => setShowLetter(false)}
                  className="mt-8 text-sm text-[#3b2b1f] underline"
                >
                  Close
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}