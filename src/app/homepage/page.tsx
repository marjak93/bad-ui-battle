"use client";

import { DragDropForm } from "@/components/DragDropForm";
import { Rating } from "@/components/Rating";
import { SubmitButton } from "@/components/SubmitButton";
import { useState } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <motion.main
      className="flex flex-col gap-6 max-w-screen-sm mx-auto py-20"
      animate={{
        rotate: isSubmitted ? [0, -30] : 0,
        y: isSubmitted ? [0, 300] : 0,
        transition: { duration: 0.75 },
      }}
    >
      <DragDropForm />
      <div className="flex justify-center">
        <Rating />
      </div>
      <div className="text-left flex gap-2">
        <SubmitButton onClick={() => setIsSubmitted(true)} />
        <button
          disabled
          className="hover:cursor-not-allowed border rounded-lg text-lg p-2 bg-red-700 text-white"
        >
          CANCEL
        </button>
      </div>
    </motion.main>
  );
}
