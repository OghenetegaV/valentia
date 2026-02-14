"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { playClick } from "@/components/SoundManager";

export default function ValentinePage() {
  const [showLetter, setShowLetter] = useState(false);
  const router = useRouter();

  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* Dynamic Background */}
      <img
        src={showLetter ? "/valentia_winking.png" : "/valentia_roses.png"}
        alt="Valentia"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
      />

      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />

      {/* Extra Dark Layer when letter opens */}
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
          top: "28px",
          left: "28px",
          zIndex: 9999,
        }}
        className="px-6 py-3 text-lg font-grand text-[#f5e6c8] bg-black/40 backdrop-blur-md rounded-[12px] hover:scale-105 transition"
      >
        ← Back
      </Link>

      {/* ===== CENTERED MAIN PANEL ===== */}
      {!showLetter && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full px-6"
        >
          <div className="relative w-full max-w-2xl mx-auto text-center bg-black/40 border border-white/10 backdrop-blur-md px-12 py-16 shadow-[0_40px_120px_rgba(0,0,0,0.8)]">

            <h1 className="font-italic-serif text-[clamp(2rem,6vw,5rem)] text-[#f5e6c8] italic leading-tight drop-shadow-[0_0_30px_rgba(255,215,150,0.6)]">
              Choose a path
            </h1>

            <div className="my-12 flex justify-center gap-8 flex-wrap">

              <button
                onClick={() => {
                  playClick();
                  setShowLetter(true);
                }}
                className="px-8 py-3 font-grand tracking-[0.15em] bg-gradient-to-b from-[#e6c88a] to-[#b89a5e] text-black shadow-[0_15px_50px_rgba(0,0,0,0.6)] hover:scale-105 transition-all duration-300"
              >
                READ ME
              </button>

              <button
                onClick={() => {
                  playClick();
                  router.push("/gallery-val");
                }}
                className="px-8 py-3 font-grand tracking-[0.15em] bg-gradient-to-b from-[#8b0000] to-[#4a0000] text-white shadow-[0_15px_50px_rgba(0,0,0,0.6)] hover:scale-105 transition-all duration-300"
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
            className="fixed inset-0 z-50 bg-black/60"
            onClick={() => setShowLetter(false)}
          >

            {/* PERFECT CENTER */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(10%, 50%)",
                width: "92vw",
                maxWidth: "650px",
              }}
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
                  You had your chance to leave… <br />If you made it this far just stop fighting it. <br /><br />
                   <span className="uppercase">You’re so in love with me and I love you right back💌</span> <br /><br />

                  🌹 Hi 🌹 <br /><br />

                  At this point Valentine is probably already coming to a close but I’ve genuinely been trapped with work and couldn’t get around to making this in time. And honestly? I’d much rather be trapped in your arms. I’m not even joking. I’d pick that over deadlines any day. <br /><br />

                  It’s the season of Love and we’re allowed to be true to what we feel without pretending to be cool about it. So here it is, I cherish you. Deeply… Calmly… INTENTIONALLY. <br /><br />

                  Aren’t you so lucky there’s distance between us? Because if there wasn’t any… you’d already be in the process of becoming a Parent lol🫦 <br /><br />

                  But really, I definitely have love for you. The real kind. The steady kind. So if you ever need to talk or you randomly miss me, just know I automatically miss you too. No hesitation. No pride. Just mutual missing💐 <br /><br />

                  Have a beautiful day and keep your heart warm. And if it ever feels cold, run to me. I’ll love you back to warmth gently and completely ❤️‍🔥 <br /><br />

                  Every single word I’m saying, I mean with utmost sincerity. <br /><br />

                  I LOVE YOU 💌 <br /><br />
                  -Anthonia
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