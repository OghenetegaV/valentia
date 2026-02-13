"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function Cursor() {
  const [isPressed, setIsPressed] = useState(false);

  // High-response spring physics
  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    const handleDown = () => setIsPressed(true);
    const handleUp = () => setIsPressed(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-2px", // Precise alignment for small cursors
        translateY: "-2px",
        position: "fixed",
        willChange: "transform",
      }}
    >
      <motion.div
        animate={{
          scale: isPressed ? 0.8 : 1,
          rotate: isPressed ? -10 : 0,
        }}
        className="relative flex items-center justify-center"
      >
        {/* ULTRA SMALL SIZE: w-4 is 16px. Change to w-3 if still too big. */}
        <img 
          src="/cursor.png" 
          alt=""
          className="w-1 h-1 object-contain pointer-events-none"
          style={{ 
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
          }}
        />

        {/* Subtle Glow */}
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 w-1 h-1 bg-[#d4af37]/20 rounded-full blur-md -z-10"
        />
      </motion.div>
    </motion.div>
  );
}