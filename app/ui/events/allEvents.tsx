import { Header } from "../header";
import { EachEvent } from "./eachEvent";

export const AllEvents = () => {
  return (
    <div className="lg:flex lg:flex-row gap-[5rem] w-[90%] mx-auto mt-[3rem]">
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
