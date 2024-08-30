import { CustomButton } from "../buttons/button";
import { Header } from "../header";
import { AllEvents } from "./allEvents";
import { FaArrowRight } from "react-icons/fa6";

export const EventsPage = () => {
  return (
    <section className="mt-[5rem]">
      <Header
        text="Recent Events"
        extraStyling="w-fit mx-auto"
      />
      <AllEvents />
      <center className="mt-[5rem]">
        <CustomButton>
          View more
          <FaArrowRight className="mt-1 ml-1" />
        </CustomButton>
      </center>
    </section>
  );
};
