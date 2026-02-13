"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Envelope({ isBurning, scene, onOpen }: { isBurning: boolean, scene?: string, onOpen?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (scene === 'garden' && !isBurning) {
      setIsOpen(true);
    }
  }, [scene, isBurning]);

  const handleManualOpen = () => {
    if (!isBurning && !isOpen) {
      setIsOpen(true);
      if (onOpen) onOpen(); // Syncs with parent state if needed
    }
  };

  return (
    <div className="relative w-full max-w-[320px] md:max-w-[380px] aspect-[3/4] perspective-1000 mx-auto">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="sealed"
            onClick={handleManualOpen}
            exit={{ y: -20, opacity: 0, transition: { duration: 0.8 } }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full h-full bg-[#2d0a0a] rounded-lg border-2 border-[#d4af37]/30 shadow-2xl flex flex-col items-center justify-center p-6 overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-dark.png')] pointer-events-none" />
            
            <div className="z-10 text-center pointer-events-none">
              <p className="font-medieval text-[#d4af37] text-xs md:text-sm tracking-[0.3em] uppercase mb-6 md:mb-8 opacity-40">Anthonia</p>
              
              {/* Interactive Wax Seal */}
              <motion.div 
                animate={{ shadow: ["0 0 20px rgba(212,175,55,0)", "0 0 20px rgba(212,175,55,0.4)", "0 0 20px rgba(212,175,55,0)"] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-16 h-16 md:w-20 md:h-20 bg-[#720917] rounded-full border-2 border-[#d4af37] shadow-lg flex items-center justify-center mx-auto mb-6 md:mb-8 relative"
              >
                <span className="font-grand text-2xl md:text-3xl text-[#d4af37]">V</span>
                {/* Visual hint that it can be clicked */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                   <p className="text-[10px] text-[#d4af37]/40 tracking-widest uppercase">Open</p>
                </div>
              </motion.div>
              
              <p className="font-italic-serif text-[#d4af37] text-lg md:text-xl italic opacity-60">To: My Love</p>
            </div>

            {isBurning && (
              <motion.img 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJmZzRreXU0Z3R4bmV3bm56bm56bm56bm56bm56bm56bm56JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/3o7TKMGpxx6r2/giphy.gif"
                className="absolute inset-0 w-full h-full object-cover mix-blend-screen z-20"
              />
            )}
          </motion.div>
        ) : (
          /* OPEN STATE (Same as before) */
          <motion.div
            key="open"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full h-full flex flex-col items-center gap-6 md:gap-8"
          >
            <div className="relative w-full aspect-square max-h-[250px] md:max-h-[300px] rounded-lg border-2 border-[#d4af37]/20 overflow-hidden shadow-2xl">
              <img src="/anthonia-intro.jpg" alt="Anthonia" className="w-full h-full object-cover" />
            </div>

            <motion.div className="bg-[#fdf6e3] p-6 md:p-8 rounded-sm shadow-xl w-full border-l-4 border-[#d4af37]">
              <div className="space-y-4 md:space-y-6 text-center">
                <p className="font-italic-serif text-[#1a0808] text-lg md:text-xl italic">My Dearest,</p>
                <p className="font-italic-serif text-[#1a0808] text-base md:text-lg leading-relaxed">
                  The garden is heavy with the scent of secrets. I am waiting where the shadows meet the light.
                </p>
                <p className="font-medieval text-[#3a1212] text-right mt-4 md:mt-6 tracking-widest uppercase text-sm md:text-base">— Anthonia</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}