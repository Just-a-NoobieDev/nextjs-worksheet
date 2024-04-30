import Link from "next/link";
import React from "react";

interface NavBarProps {
  isActivity1?: boolean;
  isActivity2?: boolean;
  isActivity3?: boolean;
  isActivity4?: boolean;
  isActivity5?: boolean;
  isActivity6?: boolean;
  isActivity7?: boolean;
  isActivity8?: boolean;
}

const NavBar = ({
  isActivity1,
  isActivity2,
  isActivity3,
  isActivity4,
  isActivity5,
  isActivity6,
  isActivity7,
  isActivity8,
}: NavBarProps) => {
  return (
    <div className={`w-full fixed top-0 left-0 bg-blue-200 p-4 z-10`}>
      <nav className="flex gap-4 items-center justify-center">
        <Link
          href="/"
          className={`${
            isActivity1 ? "text-blue-500" : "text-black"
          } cursor-pointer`}
        >
          Activity 1
        </Link>
        <Link
          href="/activity2"
          className={`${
            isActivity2 ? "text-blue-500" : "text-black"
          } cursor-pointer`}
        >
          Activity 2
        </Link>
        <Link
          href="/activity3"
          className={`${
            isActivity3 ? "text-blue-500" : "text-black"
          } cursor-pointer`}
        >
          Activity 3
        </Link>
        <Link
          href="/activity4"
          className={`${
            isActivity4 ? "text-blue-500" : "text-black"
          } cursor-pointer`}
        >
          Activity 4
        </Link>
        <Link
          href="/activity5"
          className={`${
            isActivity5 ? "text-blue-500" : "text-black"
          } cursor-pointer`}
        >
          Activity 5
        </Link>
        <Link
          href="/activity6"
          className={`${
            isActivity6 ? "text-blue-500" : "text-black"
          } cursor-pointer`}
        >
          Activity 6
        </Link>
        <Link
          href="/activity7"
          className={`${
            isActivity7 ? "text-blue-500" : "text-black"
          } cursor-pointer`}
        >
          Activity 7
        </Link>
        <Link
          href="/activity8"
          className={`${
            isActivity8 ? "text-blue-500" : "text-black"
          } cursor-pointer`}
        >
          Activity 8
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
