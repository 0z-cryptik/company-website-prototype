"use client";

import { useEffect, useState } from "react";
import { Logo } from "../logo/logo";
import { MenuButton } from "../hambuggerMenu/menuButton";

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
      className={`pt-7 lg:pl-[3rem] pl-4 lg:pr-[7rem] pr-4 flex flex-row fixed w-[100%] z-10 transition-colors duration-300 ${
        isScrolled ? "bg-[#0e1e70]" : "bg-transparent"
      }`}>
      <Logo size="3xl" />

      <div className="ml-auto w-fit hidden lg:flex gap-x-12 font-semibold text-lg">
        <a>Home</a>
        <a>About</a>
        <a>Services</a>
        <a>Portfolio</a>
        <a>Team</a>
      </div>

      <MenuButton />
    </nav>
  );
};
