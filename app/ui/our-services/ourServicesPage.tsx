import { Header } from "../header";
import { AllServices } from "./allServices";

export const OurServicesPage = () => {
  return (
    <section className="text-white">
      <Header
        text="Our Services"
        extraStyling="w-fit mx-auto"
      />
      <AllServices />
    </section>
  );
};
