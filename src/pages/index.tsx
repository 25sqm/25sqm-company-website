import { Center, Text, Title } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FooterSimple } from "../components/Footer";
import { ContactUs } from "../components/home/ContactForm";
import { FaqWithImage } from "../components/home/FaqSection";
import FeaturedSection from "../components/home/FeaturedSection";
import HomeH1 from "../components/home/HomeH1";
import { HomeHero } from "../components/home/HomeHero";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Home.module.css";

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
