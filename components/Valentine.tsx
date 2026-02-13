"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Valentine() {
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(2), 3000),
      setTimeout(() => {
        setPhase(3);
        // Trigger shake effect logic if desired via a class on body
      }, 6000)
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const shakeVariants = {
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 0.4 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/valentia_winking.jpg')` }}
      />
      <div className="vignette-overlay absolute inset-0 z-10" />

      <AnimatePresence mode="wait">
        <motion.div 
          key={phase}
          variants={phase === 3 ? shakeVariants : {}}
          animate={phase === 3 ? "shake" : { opacity: 1 }}
          initial={{ opacity: 0, scale: 1.2 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="relative z-20 text-center px-4"
        >
          {phase === 1 && (
            <h2 className="font-medieval text-7xl md:text-[10rem] text-red-900 tracking-tighter">
              YOU CHOSE DESIRE.
            </h2>
          )}
          {phase === 2 && (
            <h2 className="font-medieval text-7xl md:text-[10rem] text-red-800 tracking-widest">
              NOW HANDLE IT.
            </h2>
          )}
          {phase === 3 && (
            <h2 className="font-grand text-6xl md:text-[9rem] text-red-600 drop-shadow-[0_0_50px_red]">
              ARE YOU BRAVE ENOUGH?
            </h2>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}