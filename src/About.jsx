import React from "react";
import AboutImage from "../src/images/sunder.jpg";
import Common from "./Common";

const About = (props) => {
  return (
    <>
      <Common
        name="Welcome to my about page"
        imgSrc={AboutImage}
        visit="/contact"
        btName="Contact Now"
      />
    </>
  );
};

export default About;
