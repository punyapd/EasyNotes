import React from "react";
import Image from "next/image";
type Props = {
  detail: any;
  sub_detail: any;
};

const Notecover = ({ detail, sub_detail }: Props) => {
  return (
    <div className="relative w-full h-[270px]">
      <Image
        className="object-cover  object-center"
        alt="notecover"
        src="/cover.png"
        layout="fill"
        style={{ filter: "brightness(0.3)" }}
      />
      <div className="absolute w-full h-full left-0 top-0 text-center flex flex-col items-center justify-center ">
        <div>
          <h2 className="font-Jost font-medium text-white text-heading2 tracking-wider mb-[12px]">
            {detail}
          </h2>
          <h2 className="font-Inter font-normal text-white text-sm xs:text-lg lg:text-xl leading-[29px] ">
            Home - <span className="text-button">{sub_detail}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Notecover;
