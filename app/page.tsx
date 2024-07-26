import { Navbar } from "./ui/navbar";
import { HeroSection } from "./ui/heroSection/heroSection";
import { OurServicesPage } from "./ui/our-services/ourServicesPage";
import { Socials } from "./ui/socials/socials";

const Home = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <OurServicesPage />
      <Socials />
    </main>
  );
};

export default Home;
