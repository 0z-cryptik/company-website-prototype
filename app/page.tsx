import { Navbar } from "./ui/navbar/navbar";
import { HeroSection } from "./ui/heroSection/heroSection";
import { OurServicesPage } from "./ui/our-services/ourServicesPage";
import { Socials } from "./ui/socials/socials";
import { Divider } from "./ui/divider/divider";
import { AboutPage } from "./ui/about/aboutPage";
import { PartnersPage } from "./ui/partners/partnersPage";
import { EventsPage } from "./ui/events/eventsPage";
import { TeamPage } from "./ui/team/TeamPage";
import { LastPage } from "./ui/last-page/lastPage";
import { Footer } from "./ui/footer/footer";

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
      <Divider />
      <TeamPage />
      <Divider />
      <LastPage />
      <Footer />
    </main>
  );
};

export default Home;
