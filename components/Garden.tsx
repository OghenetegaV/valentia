"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { playClick } from "@/components/SoundManager";

export default function Garden() {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  const navigateWithFade = (path: string) => {
    if (isExiting) return;
    setIsExiting(true);

    setTimeout(() => {
      router.push(path);
    }, 500); // match fade duration
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Fade Out Overlay */}
      <div
        className={`absolute inset-0 bg-black z-50 transition-opacity duration-500 pointer-events-none ${
          isExiting ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* DESKTOP */}
      <div className="hidden md:flex w-full h-full">

        {/* Back Button */}
        <Link
        href="/"
        style={{
            position: "fixed",
            top: "22px",
            left: "22px",
            zIndex: 9999,
        }}
        className="
            px-10 py-5
            text-4xl
            font-grand
            text-[#f5e6c8]
            shadow-lg
            underline-none
        "
        >
        ← Back
        </Link>

        {/* Left Image */}
        <div className="w-3/5 h-full relative">
          <img
            src="/valentia_seated.png"
            alt="Valentia"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        </div>

        {/* Right Scroll */}
        <div className="w-2/5 h-full relative flex items-center justify-center bg-[#1a0f0f]">

          <img
            src="/scroll.png"
            alt="Scroll"
            className="absolute w-[90%] max-w-md object-contain pointer-events-none"
          />

          <div className="relative z-20 text-center px-8 max-w-xs">

            <p className="font-italic-serif text-3xl lg:text-4xl text-[#3b2b1f] italic">
              “I knew you would come.”
            </p>

            <div className="mt-8 space-y-4">

              <button
                onClick={() => {
                playClick();
                navigateWithFade("/galentine");
              }}
                className="w-full py-3 text-lg font-grand bg-[#6b4b2a] text-white hover:bg-[#7c5a35] transition active:scale-95"
              >
                Galentine
              </button>

              <button
                onClick={() => {
                playClick();
                navigateWithFade("/valentine");
              }}
                className="w-full py-3 text-lg font-grand bg-[#8b2a2a] text-white hover:bg-[#a33636] transition active:scale-95"
              >
                Valentine
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden relative w-full h-full">

        <img
          src="/valentia_seated.png"
          alt="Valentia"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Back Button */}
        <Link
        href="/"
        style={{
            position: "fixed",
            top: "22px",
            left: "22px",
            zIndex: 9999,
        }}
        className="
            px-10 py-5
            text-4xl
            font-grand
            text-[#f5e6c8]
            shadow-lg
            underline-none
        "
        >
        ← Back
        </Link>

        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        <div className="relative z-20 h-full flex items-center justify-center px-6">

          <div className="relative flex items-center justify-center">

            <img
              src="/scroll.png"
              alt="Scroll"
              className="w-[85vw] max-w-sm object-contain pointer-events-none"
            />

            <div className="absolute text-center px-6 max-w-xs">

              <p className="font-italic-serif text-2xl text-[#3b2b1f] italic">
                “I knew you would come." <br/>
                Would you be my...
              </p>

              <div className="mt-6 space-y-3">

                <button
                  onClick={() => {
                    playClick();
                    navigateWithFade("/galentine");
                  }}
                  className="w-full py-3 text-lg font-grand bg-[#6b4b2a] text-white hover:bg-[#7c5a35] transition active:scale-95"
                >
                  Galentine
                </button>

                <button
                  onClick={() => {
                    playClick();
                    navigateWithFade("/valentine");
                  }}
                  className="w-full py-3 text-lg font-grand bg-[#8b2a2a] text-white hover:bg-[#a33636] transition active:scale-95"
                >
                  Valentine
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}