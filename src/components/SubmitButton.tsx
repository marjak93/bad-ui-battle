"use client";

interface SubmitButtonProps {
  onClick: () => void;
}

export const SubmitButton = ({ onClick }: SubmitButtonProps) => {
  return (
    <button
      className=" bg-blue-800 text-white text-lg rounded-lg px-2 py-1"
      onClick={onClick}
    >
      SUBMIT
    </button>
  );
};
