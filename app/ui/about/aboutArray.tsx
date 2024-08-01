import { IoMdRocket } from "react-icons/io";

interface About {
  heading: string;
  text: string;
  image: string;
  footerText: string;
  footerIcon: React.ReactNode;
}

export const about: About[] = [
  {
    heading: "A Marketing Agency",
    text: "Tork Labs is actively supporting early-stage projects in the crypto space by providing marketing assistance and helping them establish connections for their launch.",
    image: '/businessGrowth.png',
    footerText: "We have promoted \n 5000+ projects",
    footerIcon: <IoMdRocket size={30} />
  }
];
