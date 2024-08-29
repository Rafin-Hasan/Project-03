import React from "react";
import "./ServiceComponent.css";

const ServiceComponent = () => {
  return (
    <>
      <section className="mt-[94px] container relative">
        <div className="flex gsp-[102px] main">
          <div>
            <h2>How can we help your Business ?</h2>
            <p>
              We build readymade websites, mobile applications, and elaborate
              online business services.
            </p>
          </div>
          <div></div>
        </div>
        <div className="pic absolute top-0">
          <img src="./img/businessBg.png" alt="bg" />
        </div>
      </section>
    </>
  );
};

export default ServiceComponent;
