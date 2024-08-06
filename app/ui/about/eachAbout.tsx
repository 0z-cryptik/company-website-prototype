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

export const EachAbout: React.FC<EachAboutType> = ({
  content,
  reverse = false
}) => {
  const intersectionObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4
  };

  const [visible, containerRef] = useIntersectionObserver(
    intersectionObserverOptions
  );

  const footerText = content.footerText.split("\n");

  let imageClass: string, textClass: string;

  if (visible && reverse) {
    imageClass = "order-2 aboutImageAnimation2 w-1/2";
    textClass =
      "aboutTextAnimation2 h-fit my-auto flex flex-col gap-y-5 w-1/2";
  } else if (visible && !reverse) {
    imageClass = "aboutImageAnimation w-1/2";
    textClass =
      "aboutTextAnimation h-fit my-auto flex flex-col gap-y-5 w-1/2";
  } else if (reverse && !visible) {
    imageClass = "order-2 aboutImage2 w-1/2";
    textClass = "aboutText2 h-fit my-auto flex flex-col gap-y-5 w-1/2";
  } else {
    imageClass = "aboutImage w-1/2";
    textClass = "aboutText h-fit my-auto flex flex-col gap-y-5 w-1/2";
  }

  return (
    <div
      ref={containerRef}
      className="flex flex-row mt-[4rem] gap-[5rem]">
      <Image
        className={imageClass}
        src={content.image}
        width={500}
        height={500}
        alt={content.imageAlt}
      />

      <div className={textClass}>
        <Header
          text={content.heading}
          extraStyling="w-[70%]"
        />
        <p className="text-lg">{content.text}</p>
        <div className="flex flex-row gap-3">
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
