import React from "react";
import HomeComponent from "../Components/Home/HomeComponent";
import WhatWeDoPage from "./WhatWeDoPAge";
import ServicePage from "./ServicePage";
import Project from "./Project";

const Home = () => {
  return (
    <div>
      <HomeComponent />
      <WhatWeDoPage />
      <ServicePage />
      <Project />
    </div>
  );
};

export default Home;
