"use client";

import { partnersArr2 } from "./partners";
import { EachPartner } from "./eachPartner";
import { useIntersectionObserver } from "@/app/hooks/intersectionObserver";

export const AllPartners = () => {
  const [visible, containerRef] = useIntersectionObserver(0.5, false);
  console.log(partnersArr2)

  return (
    <section
      ref={containerRef}
      className="overflow-hidden w-[80svw] mx-auto mt-[3rem]">
      <div
        className={`${
          visible && "scroll-content"
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
