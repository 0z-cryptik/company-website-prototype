import Image from "next/image";
import { Header } from "../header";
import { About } from "./aboutType";
import { IconWrapper } from "./iconWrapper";

interface EachAboutType {
  content: About;
  reverse?: boolean;
}

export const EachAbout: React.FC<EachAboutType> = ({
  content,
  reverse = false
}) => {
  const footerText = content.footerText.split('\n')

  return (
    <div className="flex flex-row mt-[4rem] gap-[5rem]">
      <Image className={`${reverse && 'order-2'} w-1/2`}
        src={content.image}
        width={500}
        height={500}
        alt={content.imageAlt}
      />

      <div className="h-fit my-auto flex flex-col gap-y-5 w-1/2">
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
