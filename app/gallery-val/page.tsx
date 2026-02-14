"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function GalleryPage() {
  const [active, setActive] = useState<string | null>(null);

  const photos = [
    // "/valentia_hug.png",
    "/valentia_movies.png",
    "/valentia_popcorn.png",
    "/valentia_songs.png",
    "/valentia_seated.png",
    "/valentia_winking.png",
    "/valentia_heart.png",
    "/valentia_roses.png",
    "/valentia_heartbreak.png",
    "/valentia_sexy.png",

  ];

  return (
    <div className="relative min-h-screen w-full bg-black">

      {/* Background */}
      <div className="fixed inset-0 bg-black" />

      {/* Back Button */}
      <Link
        href="/valentine"
        style={{
            position: "fixed",
            top: "22px",
            left: "22px",
            zIndex: 9999,
        }}
        className="px-10 py-5
            text-4xl
            font-grand
            text-[#e6c88a]
            shadow-lg
            underline-none"
      >
        ← Back
      </Link>

      {/* Title */}
      <div className="relative z-20 text-center pt-32">
        {/* <h1 className="font-italic-serif text-6xl md:text-8xl text-[#e6c88a] italic tracking-wide">
          Fragments
        </h1> */}

        <p className="mt-5 text-[#d4af37] tracking-widest text-xs">
          Not everything was meant to be whole.
        </p>

        <p className="mt-2 text-[#d4af3790] italic tracking-widest text-sm">
          Click images to reveal!
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="relative z-20 mt-20 pb-32 flex flex-wrap justify-center gap-10 px-6">

        {photos.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            onClick={() => setActive(src)}
            className="w-[260px] md:w-[340px] cursor-pointer"
          >
            <img
              src={src}
              alt="Memory"
              className="w-full h-[360px] object-cover
                         blur-[1px] grayscale brightness-90
                         transition duration-300
                         shadow-[0_25px_70px_rgba(0,0,0,0.9)]"
            />
          </motion.div>
        ))}

      </div>

      {/* Fullscreen Reveal */}
      <AnimatePresence>
        {active && (
            <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.98)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 99999,
            }}
            onClick={() => setActive(null)}
            >
            <motion.img
                src={active}
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
                transition={{ duration: 0.35 }}
                style={{
                maxWidth: "95vw",
                maxHeight: "95vh",
                objectFit: "contain",
                }}
            />
            </motion.div>
        )}
        </AnimatePresence>

    </div>
  );
}