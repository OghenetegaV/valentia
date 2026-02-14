"use client";
import Garden from "@/components/Garden";
import { motion } from "framer-motion";

export default function OpenPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black"
    >
      <Garden />
    </motion.div>
  );
}