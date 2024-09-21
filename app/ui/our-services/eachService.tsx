"use client";

import Image from "next/image";
import { inknutAntiqua } from "../fonts";
import { useState } from "react";

interface EachServiceProps {
  image: string;
  heading: string;
  text: string;
  imageAlt: string;
  delayOrder: number;
  animate: boolean;
}

export const EachService: React.FC<EachServiceProps> = ({
  image,
  heading,
  text,
  imageAlt,
  delayOrder,
  animate
}) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
      className={`eachService ${
        hovering ? "serviceAnimation" : "border-2 border-transparent"
      } flex flex-row gap-x-4 md:gap-x-[2rem] bg-blue-200/5 rounded-3xl px-3 md:px-[2rem] py-5 md:py-[3rem] ${
        animate && "serviceStaggerEffect"
      }`}
      style={{ "--i": delayOrder.toString() } as React.CSSProperties}>
      <Image
        className="sm:max-h-[70%] max-h-[65%] max-sm:max-w-[70px]"
        src={image}
        alt={imageAlt}
        width={100}
        height={100}
      />
      <div>
        <h1
          className={`${inknutAntiqua.className} antialiased text-lg md:text-2xl font-extrabold`}>
          {heading}
        </h1>
        <p className="mt-5 text-xs lg:text-base">{text}</p>
      </div>
    </div>
  );
};
