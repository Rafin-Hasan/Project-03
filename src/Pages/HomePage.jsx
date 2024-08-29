import React from "react";
import HomeComponent from "../Components/Home/HomeComponent";
import WhatWeDoPage from "./WhatWeDoPAge";
import ServicePage from "./ServicePage";
import Project from "./Project";
import BlogPage from "./BlogPage";

const Home = () => {
  return (
    <div>
      <HomeComponent />
      <WhatWeDoPage />
      <ServicePage />
      <Project />
      <BlogPage />
    </div>
  );
};

export default Home;
