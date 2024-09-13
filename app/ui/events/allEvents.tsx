import { Header } from "../header";
import { EachEvent } from "./eachEvent";

export const AllEvents = () => {
  return (
    <div className="lg:flex lg:flex-row grid grid-cols-2 gap-4 lg:gap-[5rem] lg:w-[90%] lg:mx-auto mt-[3rem]">
      <EachEvent
        src="/recentEvents/event1.png"
        title="Marketing Event 1"
      />
      <EachEvent
        src="/recentEvents/event2.png"
        title="Marketing Event 2"
      />
      <EachEvent
        src="/recentEvents/event3.png"
        title="Marketing Event 3"
      />
    </div>
  );
};
