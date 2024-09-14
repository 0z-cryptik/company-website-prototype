"use client";

import { useList } from "@/app/hooks/context";
import { Logo } from "../logo/logo";
import { FaArrowRight } from "react-icons/fa6";
import { links } from "../navbar/links";

export const HamburgerMenu = () => {
  const { menuOpen, setMenuOpen } = useList();

  const styleObj = {
    transform: `${
      menuOpen ? "translate3d(0, 0, 0)" : "translate3d(100vw, 0, 0)"
    }`,
    transition: "transform .3s linear",
    zIndex: "20",
    position: "fixed"
  };

  return (
    <main
      style={styleObj}
      className="h-screen w-screen bg-[#111129] text-white">
      <div className="border-b-[0.5px] border-b-gray-600 py-2">
        <button
          onClick={() => {
            setMenuOpen(false);
          }}
          className="absolute left-2 top-[0.5rem] border w-[2.2rem] h-[2.2rem] flex items-center justify-center rounded-full">
          <FaArrowRight size={24} className="" />
        </button>
        <Logo
          size="text-3xl"
          additionalStyling="w-fit mx-auto text-blue-400"
        />
      </div>
      <section className="text-lg font-thin">
        <p className="text-center py-3">{links[0]}</p>
        <p className="text-center py-3">{links[1]}</p>
        <p className="text-center py-3">{links[2]}</p>
        <p className="text-center py-3">{links[3]}</p>
        <p className="text-center py-3">{links[4]}</p>
      </section>
    </main>
  );
};
