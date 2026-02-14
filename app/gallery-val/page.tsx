"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const photos = [
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

  const next = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % photos.length);
  };

  const prev = () => {
    if (activeIndex === null) return;
    setActiveIndex(
      (activeIndex - 1 + photos.length) % photos.length
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;

    if (diff > 80) prev();
    if (diff < -80) next();

    touchStartX.current = null;
  };

  return (
    <div className="min-h-screen w-full bg-black relative">

      {/* LEFT LIGHT */}
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
          width: "60px",
          backgroundImage: "url('/lights.png')",
          backgroundRepeat: "repeat-y",
          backgroundSize: "contain",
          zIndex: 1000,
          pointerEvents: "none",
          opacity: 0.5,
        }}
      />

      {/* RIGHT LIGHT */}
      <div
        style={{
          position: "fixed",
          right: 0,
          top: 0,
          height: "100vh",
          width: "60px",
          backgroundImage: "url('/lights.png')",
          backgroundRepeat: "repeat-y",
          backgroundSize: "contain",
          zIndex: 1000,
          pointerEvents: "none",
          opacity: 0.5,
        }}
      />

      {/* Back Button */}
      <Link
        href="/valentine"
        style={{
          position: "fixed",
          top: "22px",
          left: "22px",
          zIndex: 2000,
        }}
        className="text-2xl text-[#e6c88a]"
      >
        ← Back
      </Link>

      {/* Title */}
      <div className="text-center pt-48 relative z-20">
        <p className="text-[#d4af37] text-sm tracking-widest">
          Not everything was meant to be whole.
        </p>

        <p className="mt-4 text-[#d4af3780] italic text-base font-bold">
          Click To Reveal
        </p>
      </div>

      {/* Gallery */}
      <div className="mt-20 pb-40 flex flex-wrap justify-center gap-10 px-6 relative z-20">
        {photos.map((src, i) => (
          <div
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={src}
              className="w-[260px] md:w-[340px] h-[360px] object-cover
                         blur-sm grayscale brightness-75"
              alt=""
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      {activeIndex !== null && (
        <div
          onClick={() => setActiveIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.98)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
          }}
        >
          <img
            src={photos[activeIndex]}
            style={{
              maxWidth: "95vw",
              maxHeight: "95vh",
              objectFit: "contain",
            }}
          />
        </div>
      )}

    </div>
  );
}