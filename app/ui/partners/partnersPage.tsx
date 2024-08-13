import { Header } from "../header";
import { AllPartners } from "./allPartners";

export const PartnersPage = () => {
  return (
    <section className="mt-[5rem]">
      <Header text="Our Partners" extraStyling="text-white w-fit mx-auto" />
      <AllPartners />
    </section>
  );
};
