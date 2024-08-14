import Image from "next/image";

interface Partner {
  src: string;
}

export const EachPartner: React.FC<Partner> = ({ src }) => {
  return (
    <Image
      className="min-w-[150px]"
      src={src}
      height={150}
      width={150}
      alt="A company logo"
    />
  );
};
