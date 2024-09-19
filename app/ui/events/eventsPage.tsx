import { CustomButton } from "../buttons/button";
import { AnimatedHeader } from "../header";
import { AllEvents } from "./allEvents";
import { FaArrowRight } from "react-icons/fa6";
import { useIntersectionObserver } from "@/app/hooks/intersectionObserver";

export const EventsPage = () => {
  const [visible, containerRef] = useIntersectionObserver();

  return (
    <section className="mt-[5rem] mb-[7rem] max-lg:px-4">
      <AnimatedHeader
        text="Recent Events"
        extraStyling="w-fit mx-auto"
      />
      <AllEvents />
      <center
        ref={containerRef}
        className={`viewMoreButton ${
          visible && "viewMoreButtonAnimation"
        } mt-[5rem]`}>
        <CustomButton>
          View more
          <FaArrowRight className="mt-1 ml-1" />
        </CustomButton>
      </center>
    </section>
  );
};
