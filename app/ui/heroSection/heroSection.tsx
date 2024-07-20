import { HeroImage } from "./heroImage";
import { Header } from "../header";
import { inknutAntiqua } from "../fonts";

export const HeroSection = () => {
  return (
    <section className="text-white ml-[3rem] flex flex-row">
      <div className="my-auto w-1/2">
        <Header
          text="Transforming Visions into Vibrant Realities"
          extraStyling="w-[70%]"
        />

        <p className="text-lg tracking-wider mt-5 text-gray-400">
          Helping new companies get the outreach they need
        </p>

        <button
          className={`${inknutAntiqua.className} bg-gradient-to-r from-[#34a8c5] to-[#0c57ba] p-4 mt-7 rounded-2xl`}>
          Book Now
        </button>
      </div>

      <HeroImage />
    </section>
  );
};
