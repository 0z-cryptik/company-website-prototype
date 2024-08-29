import { Navbar } from "./ui/navbar";
import { HeroSection } from "./ui/heroSection/heroSection";
import { OurServicesPage } from "./ui/our-services/ourServicesPage";
import { Socials } from "./ui/socials/socials";
import { Divider } from "./ui/divider/divider";
import { AboutPage } from "./ui/about/aboutPage";
import { PartnersPage } from "./ui/partners/partnersPage";
import { EventsPage } from "./ui/events/eventsPage";

const Home = () => {
  return (
    <main className="text-white">
      <Navbar />
      <HeroSection />
      <OurServicesPage />
      <Divider />
      <Socials />
      <Divider />
      <AboutPage />
      <Divider />
      <PartnersPage />
      <Divider />
      <EventsPage />
    </main>
  );
};

export default Home;
