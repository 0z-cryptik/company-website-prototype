"use client";

import { useState, useEffect } from "react";
import { partnersArr2 } from "./partners";
import { EachPartner } from "./eachPartner";
import { useIntersectionObserver } from "@/app/hooks/intersectionObserver";

export const AllPartners = () => {
  const [visible, containerRef] = useIntersectionObserver(0.7);

  return (
    <section
      ref={containerRef}
      className={`w-[80svw] mx-auto mt-[3rem] partners grid grid-cols-8 gap-y-10 gap-x-4`}>
      {partnersArr2.map((partnerLogoLink, i) => (
        <EachPartner
          key={i}
          src={partnerLogoLink}
          animateIn={visible}
          animationDelayOrder={i}
        />
      ))}
    </section>
  );
};
