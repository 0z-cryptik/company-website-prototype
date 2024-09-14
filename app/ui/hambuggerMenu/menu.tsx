"use client";

import { useList } from "@/app/hooks/context";

export const HamburgerMenu = () => {
  const { menuOpen, setMenuOpen } = useList();

  const styleObj = {
    transform: `${
      menuOpen ? "translate3d(0, 0, 0)" : "translate3d(100vw, 0, 0)"
    }`,
    transition: "transform .3s linear",
    zIndex: "20",
    position: "fixed",
    left: "0",
    top: "0"
  };

  return (
    <main
      style={styleObj}
      className="h-screen w-screen flex items-center justify-center bg-black text-white">
      <button
        onClick={() => {
          setMenuOpen(false);
        }}>
        close
      </button>
      <p>yooo</p>
    </main>
  );
};
