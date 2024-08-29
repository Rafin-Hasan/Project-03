import React from "react";
import HomeComponent from "../Components/Home/HomeComponent";
import WhatWeDoPage from "./WhatWeDoPAge";
import ServicePage from "./ServicePage";
import Project from "./Project";
import BlogPage from "./BlogPage";
import ContactPage from "./ContactPage";

const Home = () => {
  return (
    <div>
      <HomeComponent />
      <WhatWeDoPage />
      <ServicePage />
      <Project />
      <BlogPage />
      <ContactPage />
    </div>
  );
};

export default Home;
