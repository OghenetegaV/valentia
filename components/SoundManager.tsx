"use client";
import { useEffect, useRef } from "react";

let clickAudio: HTMLAudioElement | null = null;

export function playClick() {
  if (!clickAudio) return;

  clickAudio.currentTime = 0;
  clickAudio.volume = 0.4;
  clickAudio.play().catch(() => {});
}

export default function SoundManager() {
  const ambientRef = useRef<HTMLAudioElement | null>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const ambient = new Audio("/audio/bg_song.mp3");
    ambient.loop = true;
    ambient.volume = 0;
    ambientRef.current = ambient;

    clickAudio = new Audio("/audio/click_sound.wav");

    const startAudio = () => {
      if (hasStarted.current) return;

      hasStarted.current = true;
      ambient.play().catch(() => {});

      let volume = 0;
      const fade = setInterval(() => {
        volume += 0.02;
        if (volume >= 0.35) {
          ambient.volume = 0.35;
          clearInterval(fade);
        } else {
          ambient.volume = volume;
        }
      }, 120);
    };

    window.addEventListener("click", startAudio, { once: true });

    return () => {
      ambient.pause();
      ambient.currentTime = 0;
    };
  }, []);

  return null;
}