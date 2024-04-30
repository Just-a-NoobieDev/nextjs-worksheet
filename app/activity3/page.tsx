"use client";

import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Activity3() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  const handleChangeFirstNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstNumber(parseInt(e.target.value));
    setResult(parseInt(e.target.value) + secondNumber);
  };

  const handleChangeSecondNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondNumber(parseInt(e.target.value));
    setResult(firstNumber + parseInt(e.target.value));
  };

  return (
    <>
      <NavBar isActivity3 />
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-700">
        <div className="flex flex-col gap-4 w-1/4 h-1/2 p-16 rounded-md bg-slate-50">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstNumber" className="text-lg font-bold">
              First Number:
            </label>
            <input
              id="firstNumber"
              type="number"
              value={firstNumber}
              className="border border-gray-300 rounded-md p-2"
              onChange={handleChangeFirstNumber}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="secondNumber" className="text-lg font-bold">
              Second Number:
            </label>
            <input
              id="secondNumber"
              type="number"
              value={secondNumber}
              className="border border-gray-300 rounded-md p-2"
              onChange={handleChangeSecondNumber}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="result" className="text-lg font-bold">
              Sum:
            </label>
            <input
              value={result}
              id="result"
              type="number"
              className="border border-gray-300 rounded-md p-2 outline-none"
              disabled
              readOnly
            />
          </div>
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            onClick={() => {
              setFirstNumber(0);
              setSecondNumber(0);
              setResult(0);
            }}
          >
            Reset
          </button>
        </div>
      </main>
    </>
  );
}
