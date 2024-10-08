import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { SocialMedia } from "./eachSocial";
import {
  AiOutlinePinterest,
  AiOutlineReddit,
  AiOutlineLinkedin
} from "react-icons/ai";
import { CiYoutube } from "react-icons/ci";

export const Socials = () => {
  const iconSize = 75;
  const sizeClass = "";

  return (
    <section id="socialsSection" className="lg:flex grid grid-cols-2 lg:flex-row max-lg:gap-y-[3rem] lg:gap-x-[3rem] xl:gap-x-[5rem] lg:w-fit mx-auto my-[7rem]">
      <SocialMedia
        name="X(Twitter) followers"
        Icon={
          <FaXTwitter
            className={`mx-auto ${sizeClass}`}
            size={iconSize}
          />
        }
        counterDuration={5000}
        followers={70000}
      />

      <SocialMedia
        name="Instagram followers"
        Icon={
          <FaInstagram
            className={`mx-auto ${sizeClass}`}
            size={iconSize}
          />
        }
        counterDuration={5000}
        followers={150000}
      />

      <SocialMedia
        name="Reddit followers"
        Icon={
          <AiOutlineReddit
            className={`mx-auto ${sizeClass}`}
            size={iconSize}
          />
        }
        counterDuration={5000}
        followers={150000}
      />

      <SocialMedia
        name="Youtube Subscribers"
        Icon={
          <CiYoutube
            className={`mx-auto ${sizeClass}`}
            size={iconSize}
          />
        }
        counterDuration={5000}
        followers={150000}
      />

      <SocialMedia
        name="Pinterest followers"
        Icon={
          <AiOutlinePinterest
            className={`mx-auto ${sizeClass}`}
            size={iconSize}
          />
        }
        counterDuration={5000}
        followers={80000}
      />

      <SocialMedia
        name="Linkedin followers"
        Icon={
          <AiOutlineLinkedin
            className={`mx-auto ${sizeClass}`}
            size={iconSize}
          />
        }
        counterDuration={5000}
        followers={90000}
      />
    </section>
  );
};
