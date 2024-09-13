import Image from "next/image";

export const HeroImage = () => {
  return (
    <Image className="sm:max-lg:mx-auto"
      src="/image1.png"
      alt="a 3d image that portrays the idea of marketing"
      width={700}
      height={700}
    />
  );
};
