import { AnimatedHeader } from "../header";
import { about } from "./aboutArray";
import { EachAbout } from "./eachAbout";

export const AboutPage = () => {
  return (
    <section id="about" className="mt-[5rem] mb-[7rem] lg:px-[5rem]">
      <AnimatedHeader
        text="About Us"
        extraStyling="w-fit mx-auto max-lg:hidden"
      />

      <EachAbout content={about[0]} />
      <EachAbout content={about[1]} reverse />
    </section>
  );
};
