"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { playClick } from "@/components/SoundManager";

export default function HomePage() {
  const [isOpening, setIsOpening] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    if (isOpening) return;

    setIsOpening(true);

    setTimeout(() => {
      router.push("/open");
    }, 800);
  };

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">

      {/* Background */}
      <motion.img
        src="/castle-bgimg.jpg"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3 }}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Castle"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-20 h-full flex flex-col items-center justify-center">

        {/* Envelope */}
        <motion.div
          initial={{ x: -600, opacity: 0, rotate: -6 }}
          animate={{
            x: 0,
            opacity: 1,
            rotate: 0,
            y: isOpening ? -25 : 0,
            scale: isOpening ? 1.08 : 1,
          }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src={isOpening ? "/envelope_open.png" : "/envelope_closed.png"}
            className="w-[420px] md:w-[580px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)]"
            alt="Envelope"
          />

          <span
            className="absolute bottom-[12%] right-[16%]
                       font-italic-serif italic
                       text-[11px] md:text-sm
                       text-black"
          >
            ~ from Anthonia
          </span>

          {isOpening && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.8, 2.4],
              }}
              transition={{ duration: 1.4 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div
                className="w-96 h-96 md:w-[520px] md:h-[520px]
                           rounded-full
                           bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.6)_35%,rgba(255,255,255,0.2)_60%,transparent_75%)]
                           blur-3xl"
              />
            </motion.div>
          )}
        </motion.div>

        {/* Buttons */}
        <div className="mt-14 flex flex-col gap-6 w-full max-w-[320px]">

          <button
            onClick={() => {
              playClick();
              handleOpen();
            }}
            disabled={isOpening}
            className="py-8 tracking-[0.35em] font-[20px]
                       text-black
                       bg-gradient-to-b from-[#f5d08c] to-[#caa95f]
                       shadow-[0_18px_50px_rgba(0,0,0,0.7)]
                       hover:scale-105 active:scale-95
                       transition-all duration-300"
          >
            OPEN
          </button>

          <button
            onClick={() => {
              playClick();
              router.push("/ignore");
            }}
            className="py-4 tracking-[0.35em] font-grand
                       text-white
                       bg-gradient-to-b from-[#9b111e] to-[#4a0000]
                       shadow-[0_18px_50px_rgba(0,0,0,0.7)]
                       hover:scale-105 active:scale-95
                       transition-all duration-300"
          >
            IGNORE
          </button>

        </div>
      </div>
    </main>
  );
}