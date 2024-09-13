import { Header } from "../header";
import { about } from "./aboutArray";
import { EachAbout } from "./eachAbout";

export const AboutPage = () => {
  return (
    <section className="mt-[5rem] mb-[7rem] lg:px-[5rem]">
      <Header
        text="About Us"
        extraStyling="w-fit mx-auto"
      />

      <EachAbout content={about[0]} />
      <EachAbout content={about[1]} reverse />
    </section>
  );
};
