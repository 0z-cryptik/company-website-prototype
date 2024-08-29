import { Header } from "../header";
import { AllServices } from "./allServices";

export const OurServicesPage = () => {
  return (
    <section className="mb-[4rem]">
      <Header
        text="Our Services"
        extraStyling="w-fit mx-auto"
      />
      <AllServices />
    </section>
  );
};
