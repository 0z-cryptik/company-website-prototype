import { HeroImage } from "./heroImage";
import { IBMPlexMono } from "./fonts";

export const HeroSection = () => {
  return (
    <section className="flex flex-row text-white ml-[3rem]">
      <div className="my-auto">
        <p
          className={`${IBMPlexMono.className} antialiased text-6xl w-1/2`}>
          Transforming Visions into Vibrant Realities
        </p>

        <p className="text-lg tracking-wider mt-5 text-gray-400">
          Helping new companies get the outreach they need
        </p>
      </div>

      <HeroImage />
    </section>
  );
};
