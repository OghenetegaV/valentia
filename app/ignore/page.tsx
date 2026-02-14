"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { playClick } from "@/components/SoundManager";

export default function IgnorePage() {
  const router = useRouter();

  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* Background */}
      <img
        src="/valentia_heartbreak.png"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Heartbreak"
      />

      {/* ===== CENTERED TOP TEXT ===== */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "fixed",
          top: "10%",
          left: "12.5%",
          transform: "translateX(-50%)",
          textAlign: "center",
          color: "#000",
          zIndex: 50
        }}
      >
        <h1 style={{ fontSize: "32px", fontWeight: 700 }}>
          Alright na. BYE!!! GO.
        </h1>

        <p style={{ fontSize: "22px", marginTop: "10px" }}>
          They'll still cheat on you.
        </p>
      </motion.div>

      {/* ===== BOTTOM LEFT BUTTON ===== */}
      <button
        onClick={() => {
          playClick();
          router.push("/");
        }}
        style={{
          position: "fixed",
          bottom: "40px",
          left: "40px",
          padding: "12px 20px",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          zIndex: 50
        }}
      >
        I'm still here
      </button>
    </div>
  );
}