import { Logo } from "../logo/logo";
import { SocialMediaIcons } from "./socialMediaIcons";
import { spaceGrotesk } from "../fonts";

export const LastPage = () => {
  return (
    <section className="mt-[10rem] w-[85%] mx-auto pb-[7rem] border-b">
      <center>
        <Logo size="6xl" />

        <p className={`${spaceGrotesk.className} mt-[4rem] text-xl w-[55%]`}>
        Empowering brands to connect, engage, and grow with innovative marketing solutions.
        </p>

        <SocialMediaIcons />
      </center>
    </section>
  );
};
