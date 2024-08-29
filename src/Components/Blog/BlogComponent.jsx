import React from "react";

const BlogComponent = () => {
  return (
    <>
      <section className="container pt-[61.5px] mb-[92px]">
        <p className="roboto font-normal text-[18px] pb-[71px] leading-[160%] text-center ">
          Several selected clients, who already believe in our service.
        </p>
        <div className="flex justify-between">
          <div>
            <img src="./img/paul.png" alt="" />
          </div>
          <div className="pt-[120px]">
            <div className="w-[412px]">
              <h3 className="text-lg font-semibold ">Matthew Paul</h3>
              <p className="text-gray-600">
                Perfect, very good job! Thank you for the amazing design and
                work. Really impressed with the high quality and quick
                turnaround time. Highly recommend.
              </p>
              <div className="flex space-x-1 mt-2">
                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                <div className="w-3 h-3 rounded-full bg-blue-300"></div>
                <div className="w-3 h-3 rounded-full bg-blue-300"></div>
                <div className="w-3 h-3 rounded-full bg-blue-300"></div>
                <div className="w-3 h-3 rounded-full bg-blue-300"></div>
              </div>
            </div>
          </div>
          <div>
            <img src="./img/Group.png" alt="group" />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogComponent;
