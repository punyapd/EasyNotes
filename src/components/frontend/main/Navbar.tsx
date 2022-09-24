import React, { useState } from "react";
import APIS from "../../../helpers/EndPoints";
import Image from "next/image";
import Link from "next/link";
import Profile from "../../backend/Profile";
import useGetHook from "../../../hooks/useGetHooks";
import { getKey } from "../../../helpers/sessionKey";
import { useRouter } from "next/router";

const Navbar = () => {
  const [active, setActive] = useState<string>("home");
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const router = useRouter();
  const pathname = router.pathname;

  const [isOpen, setIsopen] = useState(false);
  const { isLoading: currentUserLoading, data: currentUserData } = useGetHook({
    queryKey: "currentUserData",
    url: APIS.CURRENT_USER,
    parma: "",
    auth: true,
  });
  const handleSearchChange = (event: any) => {
    setSearchKeyword(event.target.value);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      router.push(`/Search/${searchKeyword}`);
      setSearchKeyword("");
    }
  };

  return (
    <div>
      <div className=" relative  w-full text-[#FFFFFF] bg-theme ">
        <div className="relative flex items-center  mx-[14px] sm:mx-[22px] md:mx-[26px] lg:mx-[32px] xl:mx-[50px]   justify-between  h-[100px]  ">
          <Link href="/">
            <div className="cursor-pointer relative h-[30px] w-[160px] xs:h-[45.29px] xs:w-[224.3px]">
              <Image src="/logo.png" alt="cover image" layout="fill" />
            </div>
          </Link>
          {!isOpen ? (
            <div className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 xs:h-10 xs:w-10"
                onClick={() => setIsopen(true)}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          ) : (
            <div className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 xs:h-10 xs:w-10"
                onClick={() => setIsopen(false)}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}
          <div className=" lg:flex hidden space-x-6 xl:space-x-[40px] text-[16px] font-Jost font-normal  ">
            <Link href="/">
              <div className={`${pathname == "/" ? "style-activelink" : ""}`}>
                <span className="cursor-pointer">Home</span>
              </div>
            </Link>
            <Link href="/notes">
              <div
                className={`${pathname == "/notes" ? "style-activelink" : ""}`}
              >
                <span className="cursor-pointer">Notes</span>
              </div>
            </Link>
            <Link href="trendingnotes">
              <div
                className={`${
                  pathname == "/trendingnotes" ? "style-activelink" : ""
                }`}
              >
                <span className="cursor-pointer">Trending Notes</span>
              </div>
            </Link>
            <Link href="/contactus">
              <div
                className={`${
                  pathname == "/contactus" ? "style-activelink" : ""
                }`}
              >
                <span className="cursor-pointer">Contact us</span>
              </div>
            </Link>

            <Link href="/aboutus">
              <div
                className={`${
                  pathname == "/aboutus" ? "style-activelink" : ""
                }`}
              >
                <span className="cursor-pointer">About us</span>
              </div>
            </Link>
          </div>
          <div className=" lg:flex  hidden items-center">
            <div className="search ">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search Your Notes"
                  className="search-text  "
                  value={searchKeyword}
                  onChange={handleSearchChange}
                  onKeyPress={handleKeyPress}
                />
                <div className="search-btn h-[45px] w-[45px] rounded-[50%] border-[1px] border-white cursor-pointer mr-[23px] flex items-center justify-center">
                  <button onClick={() => setOpenSearchBar(true)}>
                    <Image
                      src="/search.png"
                      alt="search "
                      height={10}
                      width={10}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div>
              {!getKey("userAuth") ? (
                <Link href="/Signin">
                  <div>
                    <button className="bg-button h-[40px] rounded-[20px] w-[145px] text-base font-Jost font-normal ">
                      Login/Signup
                    </button>
                  </div>
                </Link>
              ) : (
                <Profile userData={currentUserData} />
              )}
            </div>
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className=" h-full w-full bg-theme lg:hidden -mt-1">
          <div className="flex flex-col items-center    sm:items-center sm:justify-evenly text-white">
            <Link href="">
              <div className="mx-3 mb-4 text-[16px] cursor-pointer">
                <span>Home</span>
              </div>
            </Link>
            <Link href="/notes">
              <div className="mx-3 mb-4 text-[16px] cursor-pointer">
                <span>Notes</span>
              </div>
            </Link>
            <Link href="/trendingNotes">
              <div className="mx-3 mb-4 text-[16px] cursor-pointer">
                <span>Trending Notes</span>
              </div>
            </Link>
            <Link href="/contactUs">
              <div className="mx-3 mb-4 text-[16px] cursor-pointer">
                <span>Contact us</span>
              </div>
            </Link>

            <Link href="/aboutUs">
              <div className="mx-3 mb-4 text-[16px] cursor-pointer">
                <span>About us</span>
              </div>
            </Link>
            <Link href="/signin">
              <div>
                {!getKey("userAuth") ? (
                  <Link href="/Signin">
                    <div>
                      <button className="bg-button h-[45px] rounded-[5px] w-[145px] text-base font-Jost font-normal ">
                        Login/Signup
                      </button>
                    </div>
                  </Link>
                ) : (
                  <Profile userData={currentUserData} />
                )}
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
    </div>
  );
};
export default Navbar;
