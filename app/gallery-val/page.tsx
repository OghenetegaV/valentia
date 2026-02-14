"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { playClick } from "@/components/SoundManager";

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [animateIn, setAnimateIn] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const photos = [
    "/valentia_movies.png",
    "/valentia_popcorn.png",
    "/valentia_songs.png",
    "/valentia_heart.png",
    "/valentia_heartbreak.png",
    "/valentia_seated.png",
    "/valentia_roses.png",
    "/valentia_winking.png",
    "/valentia_sexy.png",
  ];

  /* =========================
     CLEANUP ON PAGE UNMOUNT
  ========================== */
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, []);

  /* =========================
     IMAGE ANIMATION
  ========================== */
  useEffect(() => {
    if (activeIndex !== null) {
      setTimeout(() => setAnimateIn(true), 10);
    } else {
      setAnimateIn(false);
    }
  }, [activeIndex]);

  const next = () => {
    if (activeIndex === null) return;
    setAnimateIn(false);
    setTimeout(() => {
      setActiveIndex((activeIndex + 1) % photos.length);
    }, 150);
  };

  const prev = () => {
    if (activeIndex === null) return;
    setAnimateIn(false);
    setTimeout(() => {
      setActiveIndex(
        (activeIndex - 1 + photos.length) % photos.length
      );
    }, 150);
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

  /* =========================
     PLAY / PAUSE TOGGLE
  ========================== */
  const handleToggleMessage = () => {
    playClick();

    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black relative">

      {/* Hidden Video (Audio Only) */}
      <video
        ref={videoRef}
        src="/valentine_voiceover.mp4"
        preload="auto"
        className="hidden"
      />

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
        onClick={() => playClick()}
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

      {/* Title + Play Button */}
      <div className="text-center pt-40 relative z-20">
        {/* <p className="text-[#d4af37] text-sm tracking-widest">
          Not everything was meant to be whole.
        </p> */}

        <p className="mt-4 text-[#d4af3780] italic text-base font-bold">
          Click Image To Reveal
        </p>

        <button
          onClick={handleToggleMessage}
          className="mt-8 px-8 py-3 
                     bg-gradient-to-b from-[#e6c88a] to-[#b89a5e]
                     text-black font-semibold tracking-widest
                     shadow-lg hover:scale-105 active:scale-95
                     transition-all duration-300"
        >
          {isPlaying ? "⏸ Pause Message" : "▶ Play Message"}
        </button>
      </div>

      {/* Gallery */}
      <div className="mt-20 pb-40 flex flex-wrap justify-center gap-10 px-6 relative z-20">
        {photos.map((src, i) => (
          <div
            key={i}
            onClick={() => {
              playClick();
              setActiveIndex(i);
            }}
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
            opacity: animateIn ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        >
          <img
            src={photos[activeIndex]}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "95vw",
              maxHeight: "95vh",
              objectFit: "contain",
              transform: animateIn ? "scale(1)" : "scale(0.7)",
              transition: "transform 0.6s ease, opacity 0.6s ease",
              opacity: animateIn ? 1 : 0,
            }}
          />
        </div>
      )}
    </div>
  );
}