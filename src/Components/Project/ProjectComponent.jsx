import React from "react";
import "./ProjectComponent.css";

const ProjectComponent = () => {
  return (
    <>
      <section className="mt-[146px] mb-[117px] container relative">
        <div className="flex gap-[39px]">
          <img src="./img/project.png" alt="project" />
          <div>
            <img
              className="absolute pic top-20"
              src="./img/project2.png"
              alt="bg"
            />
            <div className="pt-[104px] pl-[39px]">
              <div>
                <h2 className="roboto font-normal text-[40px]">
                  Great Digital Product Agency since 2016{" "}
                </h2>
              </div>
              <div>
                <p className="roboto font-normal text-[16px] leading-[160%]">
                  Our Business Plan is a written document describing a company's
                  core business activites, Objectives, and how it plans to
                  achieve its goals. Our goal is to provide our client high
                  quality Product with modern idea accordingly their budgets and
                  according thir reuirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectComponent;
