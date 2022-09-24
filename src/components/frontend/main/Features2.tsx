import React from "react";
import Image from "next/image";

export default function Features2() {
  return (
    <div className="w-full h-full lg:h-[632px] pt-[42px] lg:pt-[20px] xl:pt-[82px] ">
      <div className="   h-full lg:h-[550px] mx-[22px] sm:mx-[55px] md:mx-[65px] lg:mx-[80px]  xl:mx-[125px] flex flex-col items-center justify-center lg:flex-row   ">
        <div className=" order-2 xl:w-[595px] pt-12 lg:pt-0   ">
          <div className=" relative h-[360px] w-[351px] lg:h-[360px] lg:w-[351px] xl:h-[494px] xl:w-[507px] xxl:h-[549px] xxl:w-[564px] ">
            <Image
              className="flex items-end "
              src="/aboutsection.png"
              alt="image"
              layout="fill"
            ></Image>
          </div>
        </div>
        <div className="  text-[#37474F] grid grid-cols-1 content-center  xl:pb-24">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-heading  font-bold font-Jost pr-20 ">
              Manage Your Notes Access & Read Anywhere
            </h1>
          </div>
          <div className="mt-[28px]">
            <p className=" font-medium text-sm sm:text-base    font-Inter leading-normal pr-10 ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="flex mt-6 ">
            <div className="mx-4">
              <Image
                src="/edit.png"
                alt="image"
                width={35}
                height={35}
                layout="fixed"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="text-md xs:text-lg sm:text-xl md:text-2xl xl:text-subheading font-bold font-Jost ">
                List Your Notes In Few Clicks
              </h1>
              <p className="text-sm sm:text-base font-medium  sm:mt-3 md:mr-32 lg:mr-0 font-Inter leading-normal pr-20 ">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
          <div className="flex mt-6">
            <div className="mx-4">
              <Image
                src="/book.png"
                alt="image"
                width={35}
                height={35}
                layout="fixed"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="text-md xs:text-lg sm:text-xl md:text-2xl xl:text-subheading font-bold font-Jost ">
                Access It All Over The World
              </h1>
              <p className="text-sm sm:text-base font-medium  sm:mt-3  md:mr-32 lg:mr-0  font-Inter leading-normal pr-20 ">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
