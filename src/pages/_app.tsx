import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { BrandTheme } from "../styles/MantineStyles";
import { Navbar } from "../components/Navbar";
import { FooterSimple } from "../components/Footer";

const links = {
  links: [
    { link: "/", label: "Home" },
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

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>25SQM, Inc.</title>
        <meta
          name="description"
          content="Only the best products for all. Available nationwide."
        />
        <meta name="author" content="25SQM" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={BrandTheme}>
        <Navbar links={links.links} />
        <Component {...pageProps} />
        <FooterSimple links={links.links} />
      </MantineProvider>
    </>
  );
}
