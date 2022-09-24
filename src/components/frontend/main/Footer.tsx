import React from "react";
import Image from "next/image";
import Link from "next/link";
import Copyright from "./Copyright";
import SocialMediaIcons from "../../reusable/icons/SocialMediaIcons";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <div className="">
        <div className=" relative h-full w-full">
          <div className="mx-[22px] sm:mx-[55px] md:md:mx-[65px] lg:mx-[80px] xl:mx-[125px] pt-[62.5px]  pb-[62.5px] ">
            <Image
              src="/footer.png"
              alt=""
              className="object-cover object-top"
              layout="fill"
              style={{ filter: "brightness(0.2)" }}
            />
            <div className="relative top-0 left-0 grid grid-cols-1 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 space-y-4  ">
              <div className="text-white  xl:text-[1.1rem] cols-span xs:col-span-2 xs:mr-7 sm:mr-10 md:mr-16  xl:mr-20 ">
                <div className="mb-5">
                  <Link href="/">
                    <Image
                      src="/logo.png"
                      alt="logo image"
                      height={44.86}
                      width={200}
                      className="cursor-pointer"
                    />
                  </Link>
                </div>
                <p className="text-sm md:text-base font-Inter text-[#E5E5E5] lg:mr-6 leading-[26px] ">
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using
                  &aposContent here, content here&apos, making it look like
                  readable English. Many desktop publishing.
                </p>
              </div>
              <div className="flex flex-col  text-white lg:-ml-9 xs:mb-5 sm:mb-0 col-span-1">
                <div>
                  <h1 className="text-xl font-Jost font-medium">
                    Get In Touch
                  </h1>
                  <div className="w-14 h-[2px] rounded-md  bg-button mt-3 xs:mb-3"></div>
                </div>
                <div className="flex items-center justify-start">
                  <div className="my-3 mr-3">
                    <div className="relative w-[45px] h-[45px]">
                      <Image src="/mail.png" alt="mail" layout="fill" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="font-Jost font-medium leading-[18px]">
                      Email Address
                    </p>
                    <p className="font-Inter font-medium text-xs sm:text-sm md:text-md lg:text-[15px] leading-[15px] text-[#E5E5E5] hover:text-yellow-500">
                      <a href="mailto:testmail@mail.com">testmail@mail.com</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-start">
                  <div className="my-3 mr-3">
                    <div className="relative w-[45px] h-[45px]">
                      <Image src="/phone.png" alt="mail" layout="fill" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h2 className="font-Jost font-medium leading-[18px]">
                      Phone
                    </h2>
                    <p className="font-Inter font-medium text-xs sm:text-sm md:text-md lg:text-[15px] leading-[15px] text-[#E5E5E5] hover:text-yellow-500">
                      <a href="tel:+977-9837485974">+977-9837485974</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-start">
                  <div className="my-3 mr-3">
                    <div className="relative w-[45px] h-[45px]">
                      <Image src="/location.png" alt="mail" layout="fill" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h2 className="font-Jost font-medium leading-[18px] ">
                      location
                    </h2>
                    <address className="font-Inter not-italic font-medium text-xs sm:text-sm md:text-md lg:text-[15px] leading-[15px] text-[#E5E5E5] hover:text-yellow-500">
                      <a href="https://www.google.com/maps/place/New+Baneshwor,+Kathmandu+44600/@27.6946845,85.335441,16z/data=!3m1!4b1!4m5!3m4!1s0x39eb199a06c2eaf9:0xc5670a9173e161de!8m2!3d27.6915196!4d85.3420486">
                        Kathmandu, Nepal
                      </a>
                    </address>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  text-white md:ml-8 col-span-1 lg:translate-x-5 xl:translate-x-0  ">
                <div className="mb-5">
                  <h1 className="text-xl font-Jost font-medium">Our Links</h1>
                  <div className="w-14 h-[2px] rounded-md bg-button mt-3 xs:mb-3"></div>
                </div>
                <div className="flex flex-col space-y-1 sm:space-y-2  lg:space-y-[18px] font-medium font-Inter sm:text-sm  md:text-md lg:text-base leading-[26px]">
                  <Link href="aboutus">
                    <p className="cursor-pointer hover:text-yellow-500">
                      About Us
                    </p>
                  </Link>
                  <Link href="contactus">
                    <p className="cursor-pointer hover:text-yellow-500">
                      Contact Us
                    </p>
                  </Link>
                  <Link href="trendingnotes">
                    <p className="cursor-pointer hover:text-yellow-500">
                      Trending Notes
                    </p>
                  </Link>
                  <Link href="Signin">
                    <p className="cursor-pointer hover:text-yellow-500">
                      Become an Author
                    </p>
                  </Link>
                </div>
              </div>
              {/* subscribe */}
              {router.asPath === "/" ? (
                <div className="flex flex-col text-white mt-5 sm:mt-0 col-span-1 xs:col-span-2 xs:ml-10 md:ml-0 lg:ml-16 xl:ml-20">
                  <div className="mb-5">
                    <h1 className="text-xl font-Jost font-medium">Subscribe</h1>
                    <div className="w-14 h-[2px] rounded-md  bg-button mt-3 sm:mb-3"></div>
                  </div>
                  <p className="mb-4  sm:text-md md:text-base leading-[26px] font-medium font-Inter text-[#E5E5E5]">
                    Get latest notes in your mail, subscribe to our newsletter.
                  </p>
                  <div className=" flex flex-col">
                    <div className="pb-2">
                      <input
                        type="text"
                        className="py-1 mb-4 mr-6 rounded-lg border-slate-400 pl-2 bg-transparent border-b-2 outline-none  xl:w-[298px]"
                        placeholder="Insert your Email"
                      />
                    </div>
                    <button className="btn-text w-[145px] orange-btn">
                      Subscribe
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col text-white mt-5 sm:mt-0 col-span-1 xs:col-span-2 xs:ml-10 md:ml-0 lg:ml-16 xl:ml-20">
                  <div className="mb-5">
                    <h1 className="text-xl font-Jost font-medium">
                      Social media link
                    </h1>
                    <div className="w-14 h-[2px] rounded-md  bg-button mt-3 sm:mb-3"></div>
                  </div>

                  <div className=" flex flex-wrap w-[200px]">
                    <SocialMediaIcons src={"/facebook.png"} link_to={"#"} />
                    <SocialMediaIcons src={"/instagram.png"} link_to={"#"} />
                    <SocialMediaIcons src={"/linkedin.png"} link_to={"#"} />
                    <SocialMediaIcons src={"/twitter.png"} link_to={"#"} />
                    <SocialMediaIcons src={"/youtube.png"} link_to={"#"} />
                    <SocialMediaIcons src={"/airnb.png"} link_to={"#"} />
                  </div>
                </div>
              )}

              {/* social media link */}
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </>
  );
};
export default Footer;
