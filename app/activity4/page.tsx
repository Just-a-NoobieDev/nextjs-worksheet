"use client";

import { useRef, useState } from "react";
import NavBar from "../components/NavBar";

export default function Activity4() {
  const [size, setSize] = useState(2);
  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "pink",
    "cyan",
    "magenta",
    "lime",
    "indigo",
  ];
  const [color, setColor] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const grow = () => {
    setSize(size + 2);
    const randomColor = Math.floor(Math.random() * colors.length);
    setColor(randomColor);

    if (buttonRef.current) {
      buttonRef.current.style.scale = size.toString();
      buttonRef.current.style.backgroundColor = colors[color];
    }

    console.log("click");
  };

  return (
    <>
      <NavBar isActivity4 />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <button
          ref={buttonRef}
          className="text-white bg-blue-500 rounded-lg px-4 py-2 text-xl"
          onClick={grow}
        >
          GROW
        </button>
      </main>
    </>
  );
}
