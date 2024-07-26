import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { SocialMedia } from "./eachSocial";

export const Socials = () => {
    const iconSize = 90

  return (
    <section className="flex flex-row text-white border gap-x-[6rem] mx-[5rem] mt-[5rem]">
      <SocialMedia
        name="x(Twitter) followers"
        Icon={<FaXTwitter className="mx-auto" size={iconSize} />}
        counterDuration={5000}
        followers={150000}
      />

      <SocialMedia
        name="Instagram followers"
        Icon={<FaInstagram className="mx-auto" size={iconSize} />}
        counterDuration={5000}
        followers={150000}
      />

      <SocialMedia
        name="X(Twitter) followers"
        Icon={<FaXTwitter className="mx-auto" size={iconSize} />}
        counterDuration={5000}
        followers={150000}
      />

      <SocialMedia
        name="X(Twitter) followers"
        Icon={<FaXTwitter className="mx-auto" size={iconSize} />}
        counterDuration={5000}
        followers={150000}
      />
    </section>
  );
};
