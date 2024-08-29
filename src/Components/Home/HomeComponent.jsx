import React from "react";

const HomeComponent = () => {
  return (
    <>
      <section className="flex container mt-12">
        <div className="container h-auto flex flex-col gap-[33px] justify-center">
          <h1 className=" roboto font-normal text-[40px]">
            A Digital Product Agency
          </h1>
          <p className="w-[471px] roboto font-normal text-[16px] leading-[160%]">
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <div>
            <button className="py-5 px-10 bg-[#2639ED] rounded-[60px] roboto text-[20px] text-white">
              Contact Now
            </button>
          </div>
        </div>
        <div>
          <img src="./img/banner-bg.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default HomeComponent;
