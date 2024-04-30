"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Button from "../components/Button";
import NavBar from "../components/NavBar";

export default function Activity2() {
  const [count, setCount] = useState(0);
  const [allowNegative, setAllowNegative] = useState(false);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (allowNegative) {
      setCount((prev) => prev - 1);
    } else {
      if (count > 0) {
        setCount((prev) => prev - 1);
      }
    }
  };

  return (
    <>
      <NavBar isActivity2 />
      <main className="flex min-h-screen flex-col gap-4 items-center justify-center">
        <h1 className="text-lg">Counter App</h1>
        <p className="text-[200px] font-semibold">{count}</p>
        <div className="flex gap-2 items-center justify-center">
          <input
            className="
          w-4 h-4
          text-blue-500
          border border-blue-500
          appearance-none
          checked:bg-blue-500
          checked:border-transparent
          rounded
        "
            type="checkbox"
            name="opt"
            id="opt"
            checked={allowNegative}
            onChange={(e) => setAllowNegative(e.target.checked)}
          />
          <label
            htmlFor="opt"
            className="
          cursor-pointer
        "
          >
            Allow negative
          </label>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleIncrement} text="Increment" icon={<Plus />} />
          <Button
            onClick={handleDecrement}
            text="Decrement"
            variant="secondary"
            icon={<Minus />}
            disabled={count <= 0 && !allowNegative}
          />
        </div>
      </main>
    </>
  );
}
