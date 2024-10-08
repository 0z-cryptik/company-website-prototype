import { ImFacebook2, ImYoutube, ImTumblr2 } from "react-icons/im";
import { BsTwitterX, BsPinterest, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaRedditAlien, FaTelegram } from "react-icons/fa6";

export const SocialMediaIcons = () => {
    const iconSize = '1.7rem'
  return (
    <div className="flex flex-row lg:w-fit items-center justify-center gap-4 lg:mx-auto lg:gap-5 mt-[3rem]">
      <ImFacebook2 size={iconSize} />
      <BsTwitterX size={iconSize} />
      <AiFillInstagram size={iconSize} />
      <FaRedditAlien size={iconSize} />
      <FaTelegram size={iconSize} />
      <BsLinkedin size={iconSize} />
      <ImTumblr2 size={iconSize} />
      <ImYoutube size={iconSize} />
      <BsPinterest size={iconSize} />
    </div>
  );
};
