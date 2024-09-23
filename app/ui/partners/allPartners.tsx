"use client";

import { useState, useEffect } from "react";
import { partnersArr2 } from "./partners";
import { EachPartner } from "./eachPartner";
import { useIntersectionObserver } from "@/app/hooks/intersectionObserver";

export const AllPartners = () => {
  const [visible, containerRef] = useIntersectionObserver(0.7);
  const [startScrolling, setStartScrolling] = useState(false);

  useEffect(() => {
    if (visible) {
      const timeoutId = setTimeout(() => {
        setStartScrolling(true);
      }, 600);

      return () => clearTimeout(timeoutId);
    } else {
      setStartScrolling(false);
    }
  }, [visible]);

  return (
    <section
      ref={containerRef}
      className={`overflow-hidden w-[80svw] mx-auto mt-[3rem]`}>
      <div
        className={`partners ${
          startScrolling && "scroll-content"
        } w-[100svw] grid grid-cols-10 gap-y-10 gap-x-4`}>
        {partnersArr2.map((partnerLogoLink, i) => (
          <EachPartner
            key={i}
            src={partnerLogoLink}
          />
        ))}
      </div>
    </section>
  );
};
