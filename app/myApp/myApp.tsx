'use client'

import { Navbar } from "../ui/navbar/navbar";
import { HeroSection } from "../ui/heroSection/heroSection";
import { OurServicesPage } from "../ui/our-services/ourServicesPage";
import { Socials } from "../ui/socials/socials";
import { Divider } from "../ui/divider/divider";
import { AboutPage } from "../ui/about/aboutPage";
import { PartnersPage } from "../ui/partners/partnersPage";
import { EventsPage } from "../ui/events/eventsPage";
import { TeamPage } from "../ui/team/TeamPage";
import { LastPage } from "../ui/last-page/lastPage";
import { Footer } from "../ui/footer/footer";
import { HamburgerMenu } from "../ui/hambuggerMenu/menu";
import { useList } from "../hooks/context";

export const MyApp = () => {
  const { menuOpen } = useList();

  const styleObj = {
    transform: `${
      menuOpen ? "translate3d(-100vw, 0, 0)" : "translate3d(0, 0, 0)"
    }`,
    transition: "transform .3s linear",
  };

  return (
    <main className="text-white w-screen overflow-x-hidden">
      <Navbar />
      <HamburgerMenu />
      <section id="main" style={styleObj}>
        <HeroSection />
        <Divider />
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
      </section>
    </main>
  );
};
