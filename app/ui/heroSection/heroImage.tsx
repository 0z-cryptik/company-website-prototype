import Image from "next/image";
import { useList } from "@/app/hooks/context";

interface Hero_Image{
  animateIn: boolean
}

export const HeroImage: React.FC<Hero_Image> = ({animateIn}) => {
  

  return (
    <Image
      className={`heroSectionComponent2 sm:max-lg:mx-auto ${
        animateIn && "heroSectionComponent2Animation"
      }`}
      src="/heroSection/marketing0.png"
      alt="an image that portrays the idea of marketing"
      width={700}
      height={700}
    />
  );
};
