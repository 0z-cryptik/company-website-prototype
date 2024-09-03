"use client";

import { useEffect, useState } from "react";
import { Logo } from "../logo/logo";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`pt-7 pl-[3rem] pr-[7rem] flex flex-row fixed w-[100%] z-30 transition-colors duration-300 ${
        isScrolled ? "bg-[#0e1e70]" : "bg-transparent"
      }`}>
      <Logo size="3xl" />

      <div className="ml-auto w-fit flex gap-x-12 font-semibold text-lg">
        <a>Home</a>
        <a>About</a>
        <a>Services</a>
        <a>Portfolio</a>
        <a>Team</a>
      </div>
    </nav>
  );
};
