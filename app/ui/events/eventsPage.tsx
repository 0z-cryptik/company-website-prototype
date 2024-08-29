import { Header } from "../header";
import { AllEvents } from "./allEvents";

export const EventsPage = () => {
  return (
    <section className="mt-[5rem]">
      <Header
        text="Recent Events"
        extraStyling="w-fit mx-auto"
      />
      <AllEvents />
    </section>
  );
};
