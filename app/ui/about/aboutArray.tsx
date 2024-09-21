import { IoMdRocket } from "react-icons/io";
import { GiPresent } from "react-icons/gi";
import { About } from "./aboutType";

export const about: About[] = [
  {
    heading: "A Marketing Agency",
    text: "BlueWave is actively supporting early-stage projects in the crypto space by providing marketing assistance and helping them establish connections for their launch.",
    image: "/about/marketing2.png",
    imageAlt: "An image that portrays the idea of marketing",
    footerText: "We have promoted \n 5000+ projects",
    footerIcon: <IoMdRocket size={30} />
  },
  {
    heading: "Join Our Community",
    text: "We are conducting many campaings and programs in a month so don't be late to join and participate today to get your rewards.",
    image: "/about/community.png",
    imageAlt: "An image that portrays the idea of community",
    footerText: "We have given \n $100,000+ reward",
    footerIcon: <GiPresent size={30} />
  }
];
