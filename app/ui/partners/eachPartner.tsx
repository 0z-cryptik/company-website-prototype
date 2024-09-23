import Image from "next/image";

interface Partner {
  src: string;
  animateIn: boolean;
  animationDelayOrder: number;
}

export const EachPartner: React.FC<Partner> = ({
  src,
  animateIn,
  animationDelayOrder
}) => {
  return (
    <Image
      className={`eachPartner min-w-[10px] my-auto ${animateIn && "scaleUp"}`}
      src={src}
      height={100}
      width={100}
      alt="A company logo"
      style={
        { "--i": animationDelayOrder.toString() } as React.CSSProperties
      }
    />
  );
};
