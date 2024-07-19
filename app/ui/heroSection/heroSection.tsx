import { HeroImage } from "./heroImage";
import { IBMPlexMono, inknutAntiqua } from "../fonts";

export const HeroSection = () => {
  return (
    <section className="text-white ml-[3rem] flex flex-row">
      <div className="my-auto w-1/2">
        <p
          className={`${inknutAntiqua.className} antialiased text-[3.8rem] font-extrabold w-[70%]`}>
          Transforming Visions into Vibrant Realities
        </p>

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
