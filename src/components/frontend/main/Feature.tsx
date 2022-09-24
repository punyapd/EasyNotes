import React, { Component } from "react";
import Image from "next/image";

type Props = {
  image: any;
};

export default function Feature({ image }: Props) {
  return (
    <div className="relative xl:w-[21.445vw] xl:h-[20.602vw] xxl:w-[21.181vw] xxl:h-[20.347vw] bg-white rounded-lg shadow-xl">
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
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
      </div>
    </div>
  );
}
