import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ButtonComponent from "./ButtonComponent";
import Link from "next/link";
type Props = {
  height: any;
};

export default function Coverpage({ height }: Props) {
  const router = useRouter();
  return (
    <div className="relative h-[400px]  sm:h-[550px] md:h-[640px] lg:h-[640px] w-full">
      <Image
        src="/cover.png"
        alt="cover image"
        className="brightness-50 object-cover object-bottom"
        height={height}
        width={1580}
        layout="fill"
      />

      <div className="absolute w-full h-full pb-20 top-10 left-0 space-y-3 sm:space-4 md:space-y-5 lg:space-y-5 lg:-mt-14 flex flex-col items-center justify-center">
        <div className="text-2xl xs:text-3xl sm:text-4xl md:5xl  lg:text-[50px]  font-bold text-white font-Jost not-italic text-center mx-20 md:mx-36">
          <p className="leading-[45px] lg:leading-[70px]  xl:px-40 xxl:px-56">
            We Store Notes and Spread All Over the World
          </p>
        </div>
        <div className=" px-5 xs:px-10 sm:px-16 md:px-24  text-center">
          <p className="text-xs sm:text-sm md:text-base font-medium   font-Inter  text-[#DDDDDD]  px-2  xs:px-7 sm:px-6 md:px-10 lg:px-56 xxl:px-80 leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="flex flex-col items-center text-[16px] leading-[23px] justify-center gap-y-4 xs:flex-row  xs:space-x-6 pt-5">
          <div className="cursor-pointer">
          <Link href="#section5">
            <button
              className="blue-btn w-[168px] hidden md:block"
            >
              Become Publisher
            </button>
            </Link>
            <button className="small-blue-btn rounded-lg text-sm md:hidden">
              Become Publisher
            </button>
          </div>
          <div className="cursor-pointer">
            <Link href="#section4">
              <button className="hovertransparent-btn w-[168px] hidden md:block">
                Read Notes
              </button>
            </Link>
            <button className="hover-small-transparent-btn rounded-lg text-sm md:hidden">
              Read Notes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
