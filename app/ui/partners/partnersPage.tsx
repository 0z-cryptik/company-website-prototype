import { Header } from "../header";
import { AllPartners } from "./allPartners";

export const PartnersPage = () => {
  return (
    <section className="mt-[5rem]">
      <Header
        text="Our Partners"
        extraStyling="w-fit mx-auto"
      />
      <AllPartners />
    </section>
  );
};
