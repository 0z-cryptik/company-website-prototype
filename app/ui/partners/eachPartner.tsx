import Image from "next/image";

interface Partner {
  src: string;
}

export const EachPartner: React.FC<Partner> = ({ src }) => {
  return (
    <Image
      className="min-w-[10px]"
      src={src}
      height={100}
      width={100}
      alt="A company logo"
    />
  );
};
