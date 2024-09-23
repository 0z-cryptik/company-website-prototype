import { AnimatedHeader } from "../header";
import { AllServices } from "./allServices";

export const OurServicesPage = () => {
  return (
    <section id="services" className="mb-[4rem] mt-[7rem]">
      <AnimatedHeader
        text="Our Services"
        extraStyling="w-fit mx-auto"
      />
      <AllServices />
    </section>
  );
};
