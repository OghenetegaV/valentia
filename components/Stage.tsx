"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Garden from "@/components/Garden";

export default function Stage() {
  const [scene, setScene] = useState("opening");
  const [isOpening, setIsOpening] = useState(false);
  const [isHeartbreak, setIsHeartbreak] = useState(false);

  const handleOpen = () => {
    if (isOpening || isHeartbreak) return;

    setIsOpening(true);

    setTimeout(() => {
      setScene("garden");
      setIsOpening(false);
    }, 800); // give time for open animation
  };

  const handleIgnore = () => {
    if (isOpening || isHeartbreak) return;

    setIsHeartbreak(true);

    setTimeout(() => {
      setIsHeartbreak(false);
    }, 4000);
  };

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">

      {/* HEARTBREAK SCREEN */}
        <AnimatePresence>
        {isHeartbreak && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black flex items-center justify-center"
            >
            <div className="flex flex-col items-center justify-center text-center">

                <motion.img
                src="https://media1.tenor.com/m/uTMsWEXApMMAAAAC/cuorespezzato.gif" 
                alt="Heartbreak"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-64 md:w-80 object-contain"
                />

                <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 text-white font-grand tracking-wider text-lg"
                >
                Wow. Cold.
                </motion.p>

            </div>
            </motion.div>
        )}
        </AnimatePresence>

      {!isHeartbreak && (
        <>
          {/* Background */}
          <motion.img
            src="/valentia_garden.png"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3 }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Valentia Garden"
          />

          <div className="absolute inset-0 bg-black/70" />

          <AnimatePresence mode="wait">
            {scene === "opening" && (
              <motion.div
                key="opening"
                className="relative z-20 h-full flex flex-col items-center justify-center"
              >

                {/* Speech Bubble */}
                {!isOpening && (
                  <motion.div
                    initial={{ scale: 0.2, opacity: 0, y: 10 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{
                      delay: 1.2,
                      duration: 0.4,
                      ease: [0.22, 1.4, 0.36, 1]
                    }}
                    className="absolute top-[12%] left-[66%] -translate-x-1/2 z-30"
                  >
                    <div className="relative w-[170px] md:w-[220px]">
                      <img
                        src="/text_bubble.png"
                        alt="Speech Bubble"
                        className="w-full"
                      />
                      <div className="absolute left-[15%] right-[15%] top-[25%] bottom-[35%] flex items-center justify-center text-center">
                        <p className="text-black text-[13px] md:text-xs font-bolder leading-snug">
                          Hey there,<br />
                          I have something for you
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Envelope Wrapper */}
                <div className="relative">

                  {/* Envelope Image Swap */}
                  <motion.img
                    src={
                      isOpening
                        ? "/envelope_open.png"
                        : "/envelope_closed.png"
                    }
                    className="w-[420px] md:w-[580px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)]"
                    alt="Envelope"
                    animate={
                      isOpening
                        ? { y: -25, scale: 1.08 }
                        : { y: 0, scale: 1 }
                    }
                    transition={{ duration: 0.8 }}
                  />

                  {/* Light Burst */}
                  {isOpening && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.8, 2.4]
                      }}
                      transition={{ duration: 1.4 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-96 h-96 md:w-[520px] md:h-[520px]
                                      rounded-full
                                      bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.6)_35%,rgba(255,255,255,0.2)_60%,transparent_75%)]
                                      blur-3xl"
                      />
                    </motion.div>
                  )}
                </div>

                {/* Buttons */}
                <div className="mt-14 flex flex-col gap-6 w-full max-w-[320px]">

                  <button
                    onClick={handleOpen}
                    disabled={isOpening}
                    className="py-4 tracking-[0.35em] font-grand
                               text-black
                               bg-gradient-to-b from-[#f5d08c] to-[#caa95f]
                               shadow-[0_18px_50px_rgba(0,0,0,0.7)]
                               hover:scale-105
                               active:scale-95
                               transition-all duration-300"
                  >
                    OPEN
                  </button>

                  <button
                    onClick={handleIgnore}
                    className="py-4 tracking-[0.35em] font-grand
                               text-white
                               bg-gradient-to-b from-[#9b111e] to-[#4a0000]
                               shadow-[0_18px_50px_rgba(0,0,0,0.7)]
                               hover:scale-105
                               active:scale-95
                               transition-all duration-300"
                  >
                    IGNORE
                  </button>

                </div>
              </motion.div>
            )}

            {scene === "garden" && (
              <motion.div
                key="garden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="relative z-20 h-full w-full"
              >
                <Garden />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </main>
  );
}