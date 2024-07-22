import { Header } from "../header";
import { Counter } from "../socials/counter";
import { AllServices } from "./allServices";

export const OurServicesPage = () => {
  return (
    <section className="text-white">
      <Header
        text="Our Services"
        extraStyling="w-fit mx-auto"
      />
      <AllServices />
      <div className="flex flex-row gap-x-11">
        <Counter
          end={5000}
          duration={3000}
        />

        <Counter end={20000} duration={2000} />
      </div>
    </section>
  );
};
