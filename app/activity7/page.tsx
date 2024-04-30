import React from "react";
import NavBar from "../components/NavBar";

const page = () => {
  return (
    <>
      <NavBar isActivity7 />
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900">
        <h1 className="text-white">JEST UNIT TESTING</h1>
      </main>
    </>
  );
};

export default page;
