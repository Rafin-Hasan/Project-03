import React from "react";
import "./ServiceComponent.css";

const ServiceComponent = () => {
  return (
    <>
      <section className="mt-[94px] container relative">
        <div className="flex gap-[102px] main">
          <div className="flex flex-col justify-center pl-[58px]">
            <h2 className="w-[347px] roboto font-normal text-[40px]">
              How can we help your Business ?
            </h2>
            <p className="w-[371px] roboto font-normal text-[16px] leading-[160%]">
              We build readymade websites, mobile applications, and elaborate
              online business services.
            </p>
          </div>
          <div className="flex gap-[33px]">
            <div>
              <div className="w-[300px] h-[379px] relative top-[78.5px] border border-[#F2F2F2] bg-white rounded-[40px] shadow-md">
                <div className=" flex justify-center pt-[39px]">
                  <img
                    className="w-[117px] h-[121px]"
                    src="./img/one.png"
                    alt=""
                  />
                </div>
                <div className="text-center m-auto w-[238px]">
                  <h3 className="py-[31px] roboto font-normal text-[24px] ">
                    Business Idea Planning
                  </h3>
                  <p className="roboto font-normal text-[16px] leading-[160%]">
                    We present you a proposal and discuss niffty-gritty like
                  </p>
                </div>
              </div>
              <div className="w-[300px] h-[379px] top-[108.5px] relative  border border-[#F2F2F2] bg-white rounded-[40px] shadow-md">
                <div className=" flex justify-center pt-[39px]">
                  <img
                    className="w-[117px] h-[121px]"
                    src="./img/two.png"
                    alt=""
                  />
                </div>
                <div className="text-center m-auto w-[238px]">
                  <h3 className="py-[31px] roboto font-normal text-[24px] ">
                    Development Website and App
                  </h3>
                  <p className="roboto font-normal text-[16px] leading-[160%]">
                    Communication protocols apart from engagement models{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[30px]">
              <div className="w-[300px] h-[379px] relative  border border-[#F2F2F2] bg-white rounded-[40px] shadow-md">
                <div className=" flex justify-center pt-[39px]">
                  <img
                    className="w-[117px] h-[121px]"
                    src="./img/three.png"
                    alt=""
                  />
                </div>
                <div className="text-center m-auto w-[238px]">
                  <h3 className="py-[31px] roboto font-normal text-[24px] ">
                    Financial Planning System
                  </h3>
                  <p className="roboto font-normal text-[16px] leading-[160%]">
                    Protocols apart from aengage models, pricing billing
                  </p>
                </div>
              </div>
              <div className="w-[300px] h-[379px] relative border border-[#F2F2F2] bg-white rounded-[40px] shadow-md">
                <div className=" flex justify-center pt-[39px]">
                  <img
                    className="w-[117px] h-[121px]"
                    src="./img/four.png"
                    alt=""
                  />
                </div>
                <div className="text-center m-auto w-[238px]">
                  <h3 className="py-[31px] roboto font-normal text-[24px] ">
                    Market Analysis Project
                  </h3>
                  <p className="roboto font-normal text-[16px] leading-[160%]">
                    We present you a proposal and discuss niffty-gritty like
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pic absolute top-[139.5px] right-0">
          <img src="./img/businessBg.png" alt="bg" />
        </div>
      </section>
    </>
  );
};

export default ServiceComponent;
