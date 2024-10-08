import Image from "next/image";

interface Event {
  title: string;
  src: string;
  animationDelayOrder: number;
  animate: boolean;
}

export const EachEvent: React.FC<Event> = ({
  title,
  src,
  animationDelayOrder,
  animate
}) => {
  return (
    <div
      className={`eachEvent ${
        animate && "eventStaggerEffect"
      } rounded-xl font-mono bg-slate-600/30 pb-3`}
      style={
        { "--i": animationDelayOrder.toString() } as React.CSSProperties
      }>
      <div className="p-5">
        <Image
          className="rounded-xl"
          src={src}
          alt="event poster"
          width={400}
          height={400}
        />
      </div>
      <p className="text-center lg:text-lg text-sm font-semibold">
        {title}
      </p>
      <p className="text-center text-xs font-thin mt-2 hidden lg:block">
        Recent Event
      </p>
    </div>
  );
};
