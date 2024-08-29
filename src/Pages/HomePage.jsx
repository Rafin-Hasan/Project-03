import React from "react";
import HomeComponent from "../Components/Home/HomeComponent";
import WhatWeDoPage from "./WhatWeDoPAge";
import ServicePage from "./ServicePage";

const Home = () => {
  return (
    <div>
      <HomeComponent />
      <WhatWeDoPage />
      <ServicePage />
    </div>
  );
};

export default Home;
