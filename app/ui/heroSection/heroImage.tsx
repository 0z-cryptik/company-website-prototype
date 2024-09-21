import Image from "next/image";
import { useList } from "@/app/hooks/context";

export const HeroImage = () => {
  const { pageLoaded } = useList();

  return (
    <Image
      className={`heroSectionComponent2 sm:max-lg:mx-auto ${
        pageLoaded && "heroSectionComponent2Animation"
      }`}
      src="/heroSection/marketing0.png"
      alt="an image that portrays the idea of marketing"
      width={700}
      height={700}
    />
  );
};
