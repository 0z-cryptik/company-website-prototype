import Image from "next/image";
import { useList } from "@/app/hooks/context";

export const HeroImage = () => {
  const { pageLoaded } = useList();

  return (
    <Image
      className={`heroSectionComponent2 sm:max-lg:mx-auto ${
        pageLoaded && "heroSectionComponent2Animation"
      }`}
      src="/image1.png"
      alt="a 3d image that portrays the idea of marketing"
      width={700}
      height={700}
    />
  );
};
