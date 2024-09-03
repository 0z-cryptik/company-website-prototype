import { bebasNeue } from "../fonts";
import { Logo } from "../logo/logo";

export const Navbar = () => {
  return (
    <nav className="pt-7 pl-[3rem] pr-[7rem] flex flex-row">
      <Logo size="3xl" />

      <div className="ml-auto w-fit flex gap-x-12 font-semibold text-lg">
        <a>Home</a>
        <a>About</a>
        <a>Services</a>
        <a>Portfolio</a>
        <a>Team</a>
      </div>
    </nav>
  );
};
