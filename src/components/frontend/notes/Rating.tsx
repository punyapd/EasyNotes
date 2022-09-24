import React from "react";
import Image from "next/image";

type Props = {
  textColor: any;
};

export default function Rating({ textColor }: Props) {
  return (
    <div className={` rating `}>
      <Image
        src="/filledstar.png"
        className=""
        alt="start"
        width={15}
        height={15}
      />
      <span className={`text-xs ml-2 font-Inter font-medium  ${textColor}`}>
        4.5
      </span>
    </div>
  );
}
