"use client";
import { HeroImage } from "./heroImage";
import { NonAnimatedHeader } from "../header";
import { CustomButton } from "../buttons/button";
import { useList } from "@/app/hooks/context";

export const HeroSection = () => {
  const header = "Turning Visions Into Vibrant Realities";
  const { pageLoaded, setPageLoaded } = useList();

  //makes sure the code is being ran in a browser
  if (
    typeof window !== "undefined" &&
    document.readyState === "complete"
  ) {
    setPageLoaded(true);
  }

  return (
    <section className="max-lg:w-[100svw] lg:flex lg:flex-row max-lg:text-center max-lg:pt-[10rem] lg:pt-[2.5rem]">
      <div
        className={`heroSectionComponent1 my-auto lg:w-1/2 max-lg:max-w-[80%] mx-auto ${
          pageLoaded && "heroSectionComponent1Animation"
        }`}>
        <div className="lg:w-fit lg:ml-[6rem]">
          <NonAnimatedHeader
            text={header}
            extraStyling="lg:w-[70%] max-lg:leading-[3rem]"
          />

          <p className="text-lg tracking-wider mt-5 text-gray-400 font-serif">
            Helping new companies get the outreach they need
          </p>

          <CustomButton extraStyling="max-lg:mx-auto ">
            Book us
          </CustomButton>
        </div>
      </div>

      <HeroImage />
    </section>
  );
};
