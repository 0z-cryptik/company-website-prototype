import { Navbar } from "./ui/navbar";
import { HeroSection } from "./ui/heroSection/heroSection";
import { OurServicesPage } from "./ui/our-services/ourServicesPage";

const Home = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <OurServicesPage />
    </main>
  );
};

export default Home;
