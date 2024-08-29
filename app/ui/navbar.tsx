import { bodoniModa, bebasNeue } from "./fonts";

export const Navbar = () => {
  return (
    <nav className="pt-7 pl-[3rem] pr-[7rem] flex flex-row">
      <p
        className={`${bebasNeue.className} text-3xl antialiased flex-grow`}>
        BlueWave
      </p>

      <div className="w-fit flex gap-x-12 font-semibold text-lg">
        <a>Home</a>
        <a>About</a>
        <a>Services</a>
        <a>Portfolio</a>
        <a>Team</a>
      </div>
    </nav>
  );
};
