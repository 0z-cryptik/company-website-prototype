"use client";

import Image from "next/image";
import { Header } from "../header";
import { About } from "./aboutType";
import { IconWrapper } from "./iconWrapper";
import { useIntersectionObserver } from "@/app/hooks/intersectionObserver";

interface EachAboutType {
  content: About;
  reverse?: boolean;
}

export const EachPhoneAbout: React.FC<EachAboutType> = ({
  content,
  reverse = false
}) => {
  const footerText = content.footerText.split("\n");
  const [visible, containerRef] = useIntersectionObserver(0.4);

  let imageClass: string, textClass: string;

  if (visible && reverse) {
    imageClass = "aboutImageAnimation2 mx-auto";
    textClass = "aboutTextAnimation2 my-auto flex flex-col gap-y-5";
  } else if (visible && !reverse) {
    imageClass = "aboutImageAnimation2 mx-auto";
    textClass = "aboutTextAnimation my-auto flex flex-col gap-y-5";
  } else if (reverse && !visible) {
    imageClass = "aboutImage";
    textClass = "aboutText my-auto flex flex-col gap-y-5";
  } else {
    imageClass = "aboutImage";
    textClass = "aboutText my-auto flex flex-col gap-y-5";
  }

  return (
    <div
      ref={containerRef}
      className="lg:hidden flex flex-col mt-[4rem] gap-[2rem] text-center">
      <Header
        text={content.heading}
        extraStyling="w-fit mx-auto text-2xl"
        specifiedSizeInExtraStyling
      />

      <Image
        className={imageClass}
        src={content.image}
        width={250}
        height={250}
        alt={content.imageAlt}
      />

      <div className={textClass}>
        <p className="max-md:px-5 md:w-[65%] md:mx-auto">{content.text}</p>
        <div className="flex flex-row gap-3 w-fit mx-auto">
          <IconWrapper icon={content.footerIcon} />
          <div className="text-sm font-thin h-fit my-auto">
            <p>{footerText[0]}</p>
            <p>{footerText[1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
