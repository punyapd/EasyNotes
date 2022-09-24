import React from "react";
import Image from "next/image";

export default function Feedback() {
  return (
    <div className="mt-5">
      <h1 className="xs:leading-[48px] text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold font-Jost text-[#37474F]">
        Reader Feedback
      </h1>
      <div className="mt-5 md:mt-10  w-full h-full xl:w-[780px] xl:h-[169px] rounded-md border-[#E0E0E0] border-2">
        <div className="flex flex-col lg:flex-row space-y-5 xs:space-y-0  m-3 sm:m-5 md:m-8 lg:m-10  items-center justify-center lg:justify-center">
          <div className="">
            <div className="p-3 lg:w-36 my-3 lg:p-0 lg:my-0 flex flex-col items-center justify-center lg:items-start border-[#37474F] lg:border-r-[0.2px] border-b-[0.2px] lg:border-b-[0px]  lg:mr-11">
              <p className="font-Jost text-sm font-medium text-themetext lg:mr-11 text-center">
                5 Days ago
              </p>
              <div>
                <Image
                  src="/filledstar.png"
                  alt="star"
                  width={15}
                  height={15}
                ></Image>
                <Image
                  src="/filledstar.png"
                  alt="star"
                  width={15}
                  height={15}
                ></Image>
                <Image
                  src="/filledstar.png"
                  alt="star"
                  width={15}
                  height={15}
                ></Image>
                <Image
                  src="/filledstar.png"
                  alt="star"
                  width={15}
                  height={15}
                ></Image>
                <Image
                  src="/unfilledstar.png"
                  alt="star"
                  width={15}
                  height={15}
                ></Image>
              </div>
            </div>
          </div>
          <div className=" text-center lg:text-left col-span-3 flex flex-col items-center justify-center lg:items-start space-y-2 font-Jost text-sm leading-[17px]  font-medium  sm:text-left  text-themetext   ">
            <p>Good Exprience with this Exam!!</p>
            <p>
              Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
              consectetur elit. Vesti at bulum nec odio.
            </p>
            <p>Great job!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
