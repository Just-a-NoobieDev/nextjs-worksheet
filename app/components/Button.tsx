import React from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  variant = "primary",
  icon,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${
        variant === "primary"
          ? "bg-blue-500 text-white"
          : "bg-red-500 text-white"
      } ${
        disabled ? "cursor-not-allowed opacity-55" : "cursor-pointer"
      } px-4 py-2 text-sm font-semibold border border-transparent hover:bg-opacity-90 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-white rounded-md
      flex gap-1 items-center justify-center`}
      disabled={disabled}
    >
      {icon} {text}
    </button>
  );
};
export default Button;
