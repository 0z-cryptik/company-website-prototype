"use client";
import { HeroImage } from "./heroImage";
import { NonAnimatedHeader } from "../header";
import { CustomButton } from "../buttons/button";
import { serif } from "../fonts";
import { useIntersectionObserver } from "@/app/hooks/intersectionObserver";

export const HeroSection = () => {
  const header = "Turning Visions Into Vibrant Realities";
  const [visible, containerRef] = useIntersectionObserver(0.65)

  return (
    <section ref={containerRef} className="max-lg:w-[100svw] lg:flex lg:flex-row max-lg:text-center max-lg:pt-[10rem] lg:pt-[2.5rem]">
      <div
        className={`heroSectionComponent1 my-auto lg:w-1/2 max-lg:max-w-[80%] mx-auto ${
          visible && "heroSectionComponent1Animation"
        }`}>
        <div className="lg:w-fit lg:ml-[6rem]">
          <NonAnimatedHeader
            text={header}
            extraStyling="lg:w-[70%] max-lg:leading-[3rem]"
          />

          <p
            className={`${serif.className} text-lg tracking-wider mt-5 text-gray-400 font-serif`}>
            Helping new companies get the outreach they need
          </p>

          <CustomButton extraStyling="max-lg:mx-auto ">
            Book us
          </CustomButton>
        </div>
      </div>

      <HeroImage animateIn={visible} />
    </section>
  );
};
