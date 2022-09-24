import React from "react";
import Image from "next/image";
import Rating from "./Rating";

type props = {
  examData: any;
};

const Publisher = (props: props) => {
  const { examData } = props;
  return (
    <div className=" ">
      <h1 className="xs:leading-[48px] text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold font-Jost text-[#37474F] mb-3">
        About Publisher
      </h1>
      <div className=" w-full h-full xl:w-[780px] xl:h-[392px] p-5 sm:p-10 md:p-12 rounded-md border-[#E0E0E0] border-2">
        <div className="flex items-center justify-center sm:justify-between">
          <div className="flex flex-col xs:flex-row  items-center justify-center text-center xs:text-left ">
            <div className="relative h-12 w-12 xs:h-16 xs:w-16 sm:h-24 sm:w-24 md:h-28 md:w-28 ">
              <Image
                src="/exam.png"
                alt="reviewer"
                className="rounded-[50%]"
                layout="fill"
              />
            </div>
            <div className=" xs:ml-8">
              <h3 className="text-md mb-1 sm:mb-2 xs:text-[25px] leading-[28px] font-semibold font-Jost">
                {examData?.user?.profile?.full_name}
              </h3>
              <p className="text-theme text-sm font-normal font-Inter leading-[17px]">
                Socialogy, Physics and Biology
              </p>
            </div>
          </div>
          <div className="border-[#E0E0E0] border-2 rounded-lg hidden sm:block">
            <Rating textColor="text-themetext" />
          </div>
        </div>
        <div className="mt-5 xs:text-sm sm:text-sm font-Inter  text-themetext font-medium  ">
          <p className=" text-sm text-justify leading-[22px] font-medium">
            Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
            consectetur elit. Vesti at bulum nec odio is aeao the dumm ipsumm
            ipsum that dolocons rsus mal suada and fadolorit to the consectetur
            elit. All the that Lorem Ipsum generators on the Internet tend to
            repeat that predefined chunks as necessary, making this the first
            true dummy generator on the Internet.
          </p>
        </div>
        <div className="flex flex-col xs:flex-row justify-start mt-4 sm:mt-9 items-start space-y-2 xs:space-y-0 xs:space-x-10  text-xs xs:text-sm font-medium font-Jost text-themetext ">
          <div className="flex items-center">
            <Image src="/bookmark.png" alt="" width={15} height={20} />
            <span className="ml-4">05 Exams</span>
          </div>
          <div className="flex items-center">
            <Image src="/edit2.png" alt="" width={18} height={18} />
            <span className="ml-4">05 Exams</span>
          </div>
          <div className="flex items-center">
            <Image src="/subject.png" alt="" width={15} height={15} />
            <span className="ml-4">05 Exams</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publisher;
