import { Header } from "../header";
import { AllServices } from "./allServices";

export const OurServicesPage = () => {
  return (
    <section className="text-white mb-[4rem]">
      <Header
        text="Our Services"
        extraStyling="w-fit mx-auto"
      />
      <AllServices />
    </section>
  );
};
