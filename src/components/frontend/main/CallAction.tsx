import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { getKey } from "../../../helpers/sessionKey";
import useGetHook from "../../../hooks/useGetHooks";
import APIS from "../../../helpers/EndPoints";
import Link from "next/link";

const CallAction = () => {
  const router = useRouter();
  const { isLoading: currentUserLoading, data: currentUserData } = useGetHook({
    queryKey: "currentUserss",
    url: APIS.CURRENT_USER,
    parma: "",
    auth: true,
  });
  return (
    <div
      className="relative w-full h-[300px] sm:h-[400px] md:h-[560px]"
      id="section5"
    >
      <Image
        className="object-center object-cover brightness-50 "
        src="/callaction.png"
        alt="bg image"
        layout="fill"
      />
      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full space-y-3 md:space-y-6 lg:space-y-8  ">
        <div className="  text-xl sm:text-2xl md:text-3xl lg:text-mainheading font-bold font-Jost p-15 text-center text-[#FFFFFF] ">
          <h1>List Your Notes With Us </h1>
          <h1>And Access It From Anywhere</h1>
        </div>
        <div className=" text-center text-white sm:mx-20  ">
          <p className="text-xs md:text-sm px-12 sm:px-6 md:px-20 lg:px-40 xl:px-96 font-Inter text-[#FFFFFF] leading-[23px] font-medium ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="flex  space-y-5 items-center xs:space-y-0 justify-center xs:space-x-5 flex-col xs:flex-row ">
          <div>
          <Link href="#section4">
            <button
              className="hovertransparent-btn w-[168px] hidden md:block"
            >
              Read Notes
            </button>
            </Link>
            <Link href="#section4">
            <button
              className="hover-small-transparent-btn rounded-lg text-sm md:hidden"
            >
              Read Notes
            </button>
            </Link>
          </div>
          <div>
            <button
              className="hovertransparent-btn w-[168px] hidden md:block"
              onClick={() =>
                !currentUserData?.is_note_teacher
                  ? router.push("/Signin")
                  : router.push("/AuthorDashboard/CreateNote")
              }
            >
              Become Author
            </button>
            <button
              className="hover-small-transparent-btn rounded-lg text-sm md:hidden"
              onClick={() =>
                !currentUserData?.is_note_teacher
                  ? router.push("/Signin")
                  : router.push("/AuthorDashboard/CreateNote")
              }
            >
              Become Author
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CallAction;
