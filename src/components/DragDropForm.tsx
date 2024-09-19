"use client";

import { motion } from "framer-motion";

const alphabetArray = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));

export const DragDropForm = () => {
  return (
    <div className="flex flex-col gap-20">
      <ul className="text-white flex gap-2 flex-wrap">
        {alphabetArray.map((char) => (
          <li key={char}>
            <DraggableCharacter character={char} />
          </li>
        ))}
      </ul>

      <form className="min-h-[420px] flex flex-col gap-4">
        <p>How was your delivery?</p>
        <textarea className="grow h-full rounded-xl pointer-events-none" />
      </form>
    </div>
  );
};

const DraggableCharacter = ({ character }: { character: string }) => {
  return (
    <motion.div className="bg-blue-500 text-white rounded-xl p-3" drag>
      {character}
    </motion.div>
  );
};
