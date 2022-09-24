import React from "react";
import Image from "next/image";

export default function Topics() {
  return (
    <div className="border border-[#E0E0E0] p-3 ">
      

      <div className="space-y-2 md:space-y-5 flex flex-col justify-start md:text-sm md:text-[16px] leading-[22px] text-[#37474F] ">
        <div className="flex items-center justify-start">
          <Image src="/tick.png" alt="" width={20} height={20} />
          <span className="ml-4">Cloud Computing</span>
        </div>
        <div className="flex items-center justify-start">
          <Image src="/tick.png" alt="" width={20} height={20} />
          <span className="ml-4">About AI System</span>
        </div>
        <div className="flex items-center justify-start">
          <Image src="/tick.png" alt="" width={20} height={20} />
          <span className="ml-4">Database Management</span>
        </div>
        <div className="flex items-center justify-start">
          <Image src="/tick.png" alt="" width={20} height={20} />
          <span className="ml-4">Problem Solving with C Programming</span>
        </div>
      </div>
    </div>
  );
}
