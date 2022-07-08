import type { NextPage } from "next";
import { ContactUs } from "../components/home/ContactForm";
import { FaqWithImage } from "../components/home/FaqSection";
import FeaturedSection from "../components/home/FeaturedSection";
import HomeH1 from "../components/home/HomeH1";
import { HomeHero } from "../components/home/HomeHero";

const Home: NextPage = () => {
  return (
    <>
      <HomeHero />
      <HomeH1 />
      <FeaturedSection />
      <FaqWithImage />
      <ContactUs />
    </>
  );
};

export default Home;
