"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Star } from "./Star";

interface InputProps {
  n: number;
  isFilled: boolean;
  onChange: (n: number) => void;
}

interface StarsProps {
  amount: number;
  rating: number;
  onChange: (n: number) => void;
}

const Input = ({ n, isFilled, onChange }: InputProps) => {
  return (
    <>
      <input
        type="radio"
        name="rating"
        id={`rating-${n}`}
        className="sr-only"
        onChange={() => onChange(n)}
      />
      <Star isFilled={isFilled} />
    </>
  );
};

const Stars = ({ amount, rating, onChange }: StarsProps) => {
  return (
    <div className="text-yellow-500">
      {[...Array(amount)].map((_, i) => (
        <label key={i} htmlFor={`rating-${i + 1}`}>
          <Input n={i + 1} isFilled={i < rating} onChange={onChange} />
        </label>
      ))}
    </div>
  );
};

export const Rating = () => {
  const [diff, setDiff] = useState(0);
  const [rating, setRating] = useState(0);

  const handleChange = (value: number) => {
    setDiff(5 - value);

    setTimeout(() => {
      setRating(5);
    }, 200);

    setTimeout(() => {
      setDiff(0);
      setRating(5);
    }, 500);
  };
  return (
    <div className="flex flex-col justify-center text-center text-[80px]">
      <motion.div
        animate={{
          x: `-${diff}em`,
          y: diff * 5,
          rotate: diff * 10,
          transformOrigin: "right",
        }}
      >
        <Stars amount={5} rating={rating} onChange={handleChange} />
      </motion.div>
      <div className="text-lg">
        {rating > 0 && <p>Thank you for 5 stars!</p>}
      </div>
    </div>
  );
};
