import { Center, Text, Title } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { HomeHero } from "../components/home/HomeHero";
import { Navbar } from "../components/home/Navbar";
import styles from "../styles/Home.module.css";

const links = {
  links: [
    {
      link: "/about",
      label: "About Us",
    },
    {
      link: "/pricing",
      label: "Services",
    },
    {
      link: "/learn",
      label: "Products",
    },
    {
      link: "/community",
      label: "Contact Us",
    },
  ],
};

const Home: NextPage = () => {
  return (
    <>
      <Navbar links={links.links} />
      <HomeHero />
    </>
  );
};

export default Home;
