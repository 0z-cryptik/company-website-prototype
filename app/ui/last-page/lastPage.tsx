import { Logo } from "../logo/logo";
import { SocialMediaIcons } from "./socialMediaIcons";
import { spaceGrotesk } from "../fonts";

export const LastPage = () => {
  return (
    <section className="mt-[10rem] w-[85%] mx-auto pb-[7rem] border-b-[0.5px] border-gray-400">
      <center>
        <Logo size="text-6xl" />

        <p
          className={`${spaceGrotesk.className} mt-[4rem] lg:text-xl lg:w-[55%]`}>
          Empowering brands to connect, engage, and grow with innovative
          marketing solutions.
        </p>

        <SocialMediaIcons />
      </center>
    </section>
  );
};
