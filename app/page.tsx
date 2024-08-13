import { Navbar } from "./ui/navbar";
import { HeroSection } from "./ui/heroSection/heroSection";
import { OurServicesPage } from "./ui/our-services/ourServicesPage";
import { Socials } from "./ui/socials/socials";
import { Divider } from "./ui/divider/divider";
import { AboutPage } from "./ui/about/aboutPage";
import { PartnersPage } from "./ui/partners/partnersPage";

const Home = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <OurServicesPage />
      <Divider />
      <Socials />
      <Divider />
      <AboutPage />
      <Divider />
      <PartnersPage />
    </main>
  );
};

export default Home;
