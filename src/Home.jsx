import React from "react";
import PlantImage from "../src/images/plant1.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgSrc={PlantImage}
        visit="/service"
        btName="Get Started"
      />
    </>
  );
};

export default Home;
