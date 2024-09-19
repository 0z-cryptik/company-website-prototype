import { AnimatedHeader } from "../header";
import { AllPartners } from "./allPartners";

export const PartnersPage = () => {
  return (
    <section className="mt-[5rem] mb-[7rem]">
      <AnimatedHeader
        text="Our Partners"
        extraStyling="w-fit mx-auto"
      />
      <AllPartners />
    </section>
  );
};
