"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Galentine() {
  const [showLetter, setShowLetter] = useState(false);
  const router = useRouter();

  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* Background */}
      <img
        src="/valentia_heart.png"
        alt="Valentia holding heart"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Headline + Buttons */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 z-10 text-center w-full px-6">

        <h1
          className="font-italic-serif 
                     text-[clamp(1rem,6vw,7rem)] 
                     text-white italic leading-tight
                     drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
        >
          You hold a piece of my heart.
        </h1>

        {/* Minimal Text Buttons */}
        <div className="mt-12 flex justify-center gap-12">

          <button
            onClick={() => setShowLetter(true)}
            className="group relative text-white text-lg tracking-wide"
          >
            Read Me
            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>

          <button
            onClick={() => router.push("/gallery")}
            className="group relative text-rose-300 text-lg tracking-wide"
          >
            Come Along
            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-rose-300 transition-all duration-300 group-hover:w-full"></span>
          </button>

        </div>
      </div>

      {/* Letter Overlay */}
      <AnimatePresence>
        {showLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setShowLetter(false)}
          >

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-[92vw] max-w-[600px]"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Scroll */}
              <motion.img
                src="/scroll.png"
                alt="Scroll"
                className="w-full"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Scroll Content Area */}
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
                  This is not a confession — it is a promise.
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