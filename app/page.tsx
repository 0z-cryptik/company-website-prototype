import { Navbar } from "./ui/navbar";
import { HeroSection } from "./ui/heroSection/heroSection";
import { OurServicesPage } from "./ui/our-services/ourServicesPage";
import { Socials } from "./ui/socials/socials";
import { Divider } from "./ui/divider/divider";

const Home = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <OurServicesPage />
      <Divider />
      <Socials />
    </main>
  );
};

export default Home;
