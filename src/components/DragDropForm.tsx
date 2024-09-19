"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const alphabetArray = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));

export const DragDropForm = () => {
  const [currentText, setCurrentText] = useState("");
  const [, setInsideForm] = useState(false);

  const handleDragEnd = (draggedChar: string) => {
    if (draggedChar === "space") {
      setCurrentText((prev) => prev + " ");
      return;
    } else {
      setCurrentText((prev) => prev + draggedChar);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <form className="min-h-[220px] flex flex-col gap-4 text-black text-lg font-bold">
        <p>How was your delivery?</p>
        <textarea
          className="grow h-full rounded-xl pointer-events-none border-2 border-black shadow-lg p-4"
          value={currentText}
        />
      </form>

      <div>
        <div>drop letters here to type</div>
        <div
          onMouseOver={() => setInsideForm(true)}
          onMouseLeave={() => setInsideForm(false)}
          className="w-full h-[100px]  bg-slate-500"
        />
      </div>

      <ul className="text-white flex gap-2 flex-wrap border border-blue-500 rounded-lg p-4">
        {alphabetArray.concat("space").map((char) => (
          <li key={char}>
            <DraggableCharacter
              character={char}
              handleDragEnd={handleDragEnd}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const DraggableCharacter = ({
  character,
  handleDragEnd,
}: {
  character: string;
  handleDragEnd: (c: string) => void;
}) => {
  return (
    <motion.div
      className="bg-blue-500 text-white rounded-xl p-3 shadow-lg shadow-black/50"
      drag
      onDragEnd={() => handleDragEnd(character)}
    >
      {character}
    </motion.div>
  );
};
