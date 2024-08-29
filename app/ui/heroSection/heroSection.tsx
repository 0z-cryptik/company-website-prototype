import { HeroImage } from "./heroImage";
import { Header } from "../header";
import { CustomButton } from "../buttons/button";

export const HeroSection = () => {
  return (
    <section className="ml-[3rem] flex flex-row">
      <div className="my-auto w-1/2">
        <Header
          text="Transforming Visions into Vibrant Realities"
          extraStyling="w-[70%]"
        />

        <p className="text-lg tracking-wider mt-5 text-gray-400">
          Helping new companies get the outreach they need
        </p>

        <CustomButton>Book us</CustomButton>
      </div>

      <HeroImage />
    </section>
  );
};
