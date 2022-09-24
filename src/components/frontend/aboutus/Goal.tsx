import React from "react";
import Image from "next/image";

const goals = [
  {
    title: "Increases your ability to focus",
    desc: " It is a long established fact that a reader will be distracted by the readable content of a page when lookingat its layout.",
    image: "/insight.png",
  },

  {
    title: "Increases your comprehension",
    desc: " It is a long established fact that a reader will be distracted by the readable content of a page when lookingat its layout.",
  },
  {
    title: "Improves your prioritizing skills",
    desc: " It is a long established fact that a reader will be distracted by the readable content of a page when lookingat its layout.",
  },
];

export default function Goal() {
  return (
    <div className="justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-around mx-[22px] sm:mx-[55px] md:md:mx-[65px] lg:mx-[80px] xl:mx-[125px] py-5 sm:py-10 lg:py-20">
      {goals.map((goal: any, index: any) => (
        <div
          key={index}
          className="p-4 w-full h-full lg:w-[270px] lg:h-[250px] xl:w-[330px] xl:h-[325px]  xxl:w-[370px] xxl:h-[367px]  border-[1px] rounded-[5px] border-[#C5C5C5] hover:border-[#1BA8B1]  flex flex-col items-center  justify-center space-y-1 lg:space-y-3"
        >
          <div className="relative h-[70px] w-[70px] xl:h-[83px] xl:w-[83px]">
            <Image src="/insight.png" layout="fill" alt="insight" />
          </div>
          <h2 className="font-Jost font-medium text-black text-md md:text-[22px]  text-center">
            {goal.title}
          </h2>
          <p className="font-Inter text-center text-xs xl:text-base ">
            {goal.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
