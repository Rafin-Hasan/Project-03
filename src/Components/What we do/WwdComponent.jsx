import React from "react";
import "./WwdComponent.css";

const WwdComponent = () => {
  return (
    <>
      <section className=" container flex justify-between">
        <div className="pt-14">
          <h3 className="roboto font-normal text-[40px] ">Our Client</h3>
          <p className="w-[336px] roboto leading-[160%] font-normal text-[18px]">
            Several selected clients, who already believe in our service.
          </p>
        </div>
        <div className="flex gap-[60px] pt-[108px]">
          <div>
            <img src="./img/Google.png" alt="google" />
          </div>
          <div>
            <img src="./img/Airbnb.png" alt="Airbnb" />
          </div>
          <div>
            <img src="./img/Uber.png" alt="Uber" />
          </div>
          <div>
            <img src="./img/Amazon.png" alt="amazon" />
          </div>
        </div>
      </section>
    </>
  );
};

export default WwdComponent;
