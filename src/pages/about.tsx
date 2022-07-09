import React from "react";
import Details from "../components/about/Details";
import { FeaturesTitle } from "../components/about/Features";
import MastHead from "../components/about/MastHead";
import { ContactUs } from "../components/home/ContactForm";

const about = () => {
  return (
    <>
      <MastHead />
      <FeaturesTitle />
      <Details />
      <ContactUs />
    </>
  );
};

export default about;
