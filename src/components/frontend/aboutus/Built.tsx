import React from "react";
import Image from "next/image";

export default function Built() {
  return (
    <div className=" w-full full-[640px] bg-[#00000005] grid lg:grid-cols-2 gap-y-5 py-5 lg:py-0">
      <div className=" max-w-[1190px] h-full lg:h-[550px] mx-[22px] sm:mx-[55px] md:mx-[65px] lg:mx-[80px]  xl:mx-[125px]     space-y-5 lg:py-24 ">
        <h2 className="text-2xl sm:text-3xl lg:text-heading2 font-bold text-[#37474F]">
          Built on Passion and Ingenuity
        </h2>
        <p className=" text-sm sm:text-base   font-medium font-Inter leading-[19px] md:pr-32 lg:pr-0">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className="space-y-3">
          <div className="flex items-center justify-start">
            <div className="relative h-[11.17px] w-[14.66px] mr-3">
              <Image src="/check.png" alt="check" layout="fill" />
            </div>
            <p className="text-base sm:text-[18px] leading-[22px] font-medium font-Inter  ">
              All the Lorem Ipsum Internet tend to repeat.
            </p>
          </div>
          <div className="flex items-center justify-start ">
            <div className="relative h-[11.17px] w-[14.66px] mr-3">
              <Image src="/check.png" alt="check" layout="fill" />
            </div>
            <p className="text-base sm:text-[18px] leading-[22px] font-medium font-Inter  ">
              It uses a dictionary of Latin words.
            </p>
          </div>
          <div className="flex items-center justify-start">
            <div className="relative h-[11.17px] w-[14.66px] mr-3">
              <Image src="/check.png" alt="check" layout="fill" />
            </div>
            <p className="text-base sm:text-[18px] leading-[22px] font-medium font-Inter  ">
              Grursus mal suada faci lisis Lorem ipsum.
            </p>
          </div>
          <div className="flex items-center justify-start ">
            <div className="relative h-[11.17px] w-[14.66px] mr-3">
              <Image src="/check.png" alt="check" layout="fill" />
            </div>
            <p className="text-base sm:text-[18px] leading-[22px] font-medium font-Inter  ">
              Lorem ipsum dolarorit more ametion consectetur elit.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[396px]   lg:h-[446px] lg:w-[500px]">
          <Image src="/man.png" alt="man" layout="fill" />
        </div>
      </div>
    </div>
  );
}
