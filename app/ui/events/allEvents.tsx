import { EachEvent } from "./eachEvent";
import { useIntersectionObserver } from "@/app/hooks/intersectionObserver";

export const AllEvents = () => {
  const [visible, containerRef] = useIntersectionObserver(0.75);
  return (
    <div
      ref={containerRef}
      className="lg:flex lg:flex-row grid grid-cols-2 gap-4 lg:gap-[5rem] lg:w-[90%] lg:mx-auto mt-[3rem]">
      <EachEvent
        src="/recentEvents/event1.png"
        title="Marketing Event 1"
        animationDelayOrder={1}
        animate={visible}
      />
      <EachEvent
        src="/recentEvents/event2.png"
        title="Marketing Event 2"
        animationDelayOrder={2}
        animate={visible}
      />
      <EachEvent
        src="/recentEvents/event3.png"
        title="Marketing Event 3"
        animationDelayOrder={3}
        animate={visible}
      />
    </div>
  );
};
