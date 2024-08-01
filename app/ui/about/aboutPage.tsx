import { Header } from "../header";
import Image from "next/image";
import { IconWrapper } from "./iconWrapper";
import { about } from "./aboutArray";

export const AboutPage = () => {
  return (
    <section className="mt-[5rem] text-white px-[5rem]">
      <Header
        text="About Us"
        extraStyling="w-fit mx-auto"
      />

      <div className="flex flex-row mt-[4rem] gap-[5rem]">
        <Image
          src={about[0].image}
          width={500}
          height={500}
          alt=""
        />

        <div className="h-fit my-auto flex flex-col gap-y-5">
          <Header
            text={about[0].heading}
            extraStyling="w-[70%]"
          />
          <p className="text-lg">
            {about[0].text}
          </p>
          <div className="flex flex-row gap-3">
            <IconWrapper icon={about[0].footerIcon} />
            <div className="text-sm font-thin">
              <p>{about[0].footerText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
