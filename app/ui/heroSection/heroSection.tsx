import { HeroImage } from "./heroImage";
import { Header } from "../header";
import { CustomButton } from "../buttons/button";

export const HeroSection = () => {
  const header = "Turning Visions Into Vibrant Realities";

  return (
    <section className="lg:ml-[3rem] max-lg:w-[100svw] lg:flex lg:flex-row max-lg:text-center max-lg:pt-[10rem] lg:pt-[2.5rem]">
      <div className="my-auto lg:w-1/2 max-lg:max-w-[80%] mx-auto">
        <Header
          text={header}
          extraStyling="lg:w-[70%] max-lg:leading-[3rem]"
        />

        <p className="text-lg tracking-wider mt-5 text-gray-400">
          Helping new companies get the outreach they need
        </p>

        <CustomButton extraStyling="max-lg:mx-auto">Book us</CustomButton>
      </div>

      <HeroImage />
    </section>
  );
};
