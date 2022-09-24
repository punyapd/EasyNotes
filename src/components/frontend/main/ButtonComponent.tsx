import React from "react";

type Props = {
  buttontitle: any;
  buttoncolor: any;
};
export default function ButtonComponent({ buttontitle, buttoncolor }: Props) {
  return (
    <div>
      <button
        className={` ${buttoncolor} font-Jost font-medium bg-border-button text-white p-2 px-8 rounded-lg cursor-pointer h-[45px]  `}
      >
        {buttontitle}
      </button>
    </div>
  );
}
