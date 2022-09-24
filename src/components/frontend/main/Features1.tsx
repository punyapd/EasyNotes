import React from "react";
import Image from "next/image";
// import Feature from "./Feature";

const Features1 = () => {
  return (
    <div className="relative hidden xl:block w-full h-[146.5px] ">
      <div className="absolute -top-40 w-full   ">
        <div className="flex xl:mx-[50px] justify-between items-baseline xl:space-x-[2.4vw] xxl:space-x-[2.778vw] ">
          <div className="relative  xl:w-[21.445vw] xl:h-[20.602vw] xxl:w-[21.181vw] xxl:h-[293px] bg-white rounded-lg shadow-xl">
            <div className="absolute top-0 w-full h-full left-0 flex  flex-col items-center justify-center space-y-2">
              <div>
                <Image
                  src="/featureicon1.png"
                  alt="cover image"
                  width={50}
                  height={50}
                />
              </div>
              <h2 className="font-semibold text-subheading text-center font-Jost">
                Easy Accessible
              </h2>
              <p className=" text-para text-cen text-themetext leading-normal text-center mx-6 font-Inter font-medium">
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
            </div>
          </div>
          <div className="relative xl:w-[21.445vw] xl:h-[20.602vw] xxl:w-[21.181vw] xxl:h-[293px] bg-white rounded-lg shadow-xl">
            <div className="absolute top-0 w-full h-full left-0 flex  flex-col items-center justify-center space-y-2">
              <div>
                <Image
                  src="/featureicon2.png"
                  alt="cover image"
                  width={50}
                  height={50}
                />
              </div>
              <h2 className="font-semibold text-subheading text-center font-Jost">
                Perfect Notes
              </h2>
              <p className=" text-para text-cen text-themetext leading-normal text-center mx-6 font-Inter font-medium">
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
            </div>
          </div>
          <div className="relative xl:w-[21.445vw] xl:h-[20.602vw] xxl:w-[21.181vw] xxl:h-[293px] bg-white rounded-lg shadow-xl">
            <div className="absolute top-0 w-full h-full left-0 flex  flex-col items-center justify-center space-y-2">
              <div>
                <Image
                  src="/featureicon3.png"
                  alt="cover image"
                  width={50}
                  height={50}
                />
              </div>
              <h2 className="font-semibold text-subheading text-center font-Jost">
                Save Your Time
              </h2>
              <p className=" text-para text-cen text-themetext leading-normal text-center mx-6 font-Inter font-medium">
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
            </div>
          </div>
          <div className="relative xl:w-[21.445vw] xl:h-[20.602vw] xxl:w-[21.181vw] xxl:h-[293px] bg-white rounded-lg shadow-xl">
            <div className="absolute top-0 w-full h-full left-0 flex  flex-col items-center justify-center space-y-2">
              <div>
                <Image
                  src="/featureicon4.png"
                  alt="cover image"
                  width={50}
                  height={50}
                />
              </div>
              <h2 className="font-semibold text-subheading text-center font-Jost">
                Share and Earn
              </h2>
              <p className=" text-para text-cen text-themetext leading-normal text-center mx-6 font-Inter font-medium">
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features1;
