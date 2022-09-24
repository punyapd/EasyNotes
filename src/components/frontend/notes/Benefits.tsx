import React from "react";
import Image from "next/image";

export default function Benefits() {
  return (
    <div className="border border-[#E0E0E0] p-3">
     

      <div className="flex flex-col justify-start md:text-[16px] leading-[22px] text-[#37474F] space-y-2 md:space-y-5">
        <div className="flex items-center justify-start">
          <Image src="/tick.png" alt="" width={20} height={20} layout="fixed" />
          <span className="ml-4 ">
            All the Lorem Ipsum Internet tend to repeat.
          </span>
        </div>
        <div className="flex items-center justify-start">
          <Image src="/tick.png" alt="" width={20} height={20} layout="fixed" />
          <span className="ml-4">It uses a dictionary of Latin words.</span>
        </div>
        <div className="flex items-center justify-start">
          <Image src="/tick.png" alt="" width={20} height={20} layout="fixed" />
          <span className="ml-4">
            Grursus mal suada faci lisis Lorem ipsum.
          </span>
        </div>
        <div className="flex items-center justify-start">
          <Image src="/tick.png" alt="" width={20} height={20} layout="fixed" />
          <span className="ml-4">
            Lorem ipsum dolarorit more ametion consectetur elit.
          </span>
        </div>
      </div>
    </div>
  );
}
