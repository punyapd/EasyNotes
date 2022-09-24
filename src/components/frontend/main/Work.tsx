import Router from "next/router";
import Image from "next/image";
const Work = () => {
  return (
    <div className="w-full h-full my-[50px] lg:my-0 ">
      <div className="flex flex-col lg:flex-row h-full lg:h-[726px]  mx-[22px] sm:mx-[55px] md:mx-[65px] lg:mx-[80px] xl:mx-[125px] text-themetext">
        <div className="flex items-center justify-center  xl:w-full order-2 lg:order-1 py-8">
          <div className="relative  lg:h-[311px] lg:w-[330px] xl:h-[494px] xl:w-[507px]  w-[330px] h-[311px] ">
            <Image src="/work.png" alt="image" layout="fill"></Image>
          </div>
        </div>
        <div className="grid grid-cols-1 content-center xl:w-full order-1 lg:order-2">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-heading2  font-bold font-Jost">
              How it Works
            </h1>
          </div>
          <div className="text-xs xs:text-sm sm:text-para font-medium  mt-3  ">
            <p className=" font-medium text-sm sm:text-base    font-Inter leading-normal">
              Grursus mal suada faci lisis Lorem ipsum dolarorit more the and
              ametion consectetur elit. Vesti at bulum odio aea the dumm the
              ipsumm suada and consectetur elit.
            </p>
          </div>
          <div className="flex  mt-6">
            <div className="mr-4">
              <Image
                src="/w1.png"
                alt="image"
                width={80}
                height={80}
                layout="fixed"
              />
            </div>
            <div className="flex flex-col space-y-2 border-r-[1px] border-[#7436FF21] mr-8 w-[429px]">
              <h1 className="text-md xs:text-lg sm:text-xl md:text-2xl xl:text-subheading font-bold font-Jost ">
                Write your Notes or Upload It
              </h1>
              <p className=" text-sm sm:text-base font-medium font-Inter leading-normal mr-12 ">
                Grursus mal suada faci lisis Lorem ipsum dolarorit, is lorem
                ipsum dolarorit.
              </p>
            </div>
            <div>
              <p className="font-Jost text-[45px] sm:text-[65px] leading-[73px] font-bold text-[#7436FF21]">
                1
              </p>
            </div>
          </div>
          <div className="flex mt-6">
            <div className="mr-4">
              <Image
                src="/w2.png"
                alt="image"
                width={80}
                height={80}
                layout="fixed"
              />
            </div>
            <div className="flex flex-col space-y-2 border-r-[1px] border-[#7436FF21] mr-8 w-[429px]">
              <h1 className="text-md xs:text-lg sm:text-xl md:text-2xl xl:text-subheading font-bold font-Jost ">
                Categorized It In Related Subjects
              </h1>
              <p className=" text-sm sm:text-base font-medium  sm:mt-3 md:mr-32 lg:mr-0 font-Inter leading-normal ">
                Grursus mal suada faci lisis Lorem ipsum dolarorit, is lorem
                ipsum dolarorit.
              </p>
            </div>
            <div>
              <p className="font-Jost text-[45px] sm:text-[65px] leading-[73px] font-bold text-[#7436FF21]">
                2
              </p>
            </div>
          </div>
          <div className="flex mt-6">
            <div className=" mr-4 ">
              <Image
                src="/w3.png"
                alt="image"
                width={80}
                height={80}
                layout="fixed"
              />
            </div>
            <div className="flex flex-col space-y-2 border-r-[1px] border-[#7436FF21] mr-8 w-[429px]">
              <h1 className="text-md xs:text-lg sm:text-xl md:text-2xl xl:text-subheading font-bold font-Jost  ">
                Access Your Notes Anywhere
              </h1>
              <p className=" font-medium  mt-3  font-Inter leading-normal">
                Grursus mal suada faci lisis Lorem ipsum dolarorit, is slorem
                ipsum dolarorit.
              </p>
            </div>
            <div>
              <p className="font-Jost text-[45px] sm:text-[65px] leading-[73px] font-bold text-[#7436FF21]">
                3
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
