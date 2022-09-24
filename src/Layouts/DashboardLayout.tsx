import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import APIS from "../helpers/EndPoints";
import { getKey } from "../helpers/sessionKey";
import useGetHook from "../hooks/useGetHooks";
import DashboardNavbar from "../components/backend/DashboardNavbar";
import ResponsiveSidebar from "../components/ResponsiveSidebar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

type Props = {
  children: any;
};

const DashboardLayout = (props: Props) => {
  const router = useRouter();
  const { children } = props;

  const [leftBar, setLeftBar] = useState(false);

  const handleLeftBar = () => {};
  // PASS THIS TO CHILDREN PAGES AND USE USE_EFFECT TO SHOW/HIDE SEARCH BAR
  const [showSearch, setShowSearch] = useState(true);
  const [loadPage, setLoadPage] = useState(false);

  // Cloning childern attribute to pass props
  const childrenWithAdjustedProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { showSearch, setShowSearch })
  );

  const { isLoading: currentUserLoading, data: currentUserData } = useGetHook({
    queryKey: "currentUserData",
    url: APIS.CURRENT_USER,
    parma: "",
    auth: true,
  });

  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const handleSearchChange = (event: any) => {
    setSearchKeyword(event.target.value);
  };

  const tokenString: any = getKey("user_info");
  const userToken = JSON.parse(tokenString);

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      userToken.is_note_student &&
        router.push(`/ReaderDashboard/NoteSearch/${searchKeyword}`);

      userToken.is_note_teacher &&
        router.push(`/AuthorDashboard/NoteSearch/${searchKeyword}`);

      userToken.is_superuser &&
        router.push(`/Dashboard/NoteSearch/${searchKeyword}`);

      setSearchKeyword("");
    }
  };

  useEffect(() => {
    if (!getKey("userAuth")) {
      router.push("/Signin");
    } else {
      setLoadPage(true);
    }
  }, []);

  return (
    <>
      {loadPage ? (
        <div className="bg-background h-screen overflow-hidden">
          <div className="flex flex-row h-screen bg-[#EEF1F8] h-full relative">
            <div className="w-1/4 rounded-xl h-full mr-4 bg-white hidden md:block">
              <Head>
                <title>Note Ghar</title>
              </Head>
              <ResponsiveSidebar />
            </div>

            <div className=" bg-theme md:hidden flex items-center justify-between px-2 py-4 fixed z-30 w-full">
              <div
                className="flex justify-center items-center"
                onClick={() => setLeftBar(!leftBar)}
              >
                <Image
                  src="/Vector.png"
                  alt="logo"
                  height={30}
                  width={30}
                  className="text-white"
                />
              </div>

              <div className="flex">
                <div>
                  <Image
                    src="/Subtract.png"
                    alt="logo"
                    height={30}
                    width={30}
                    className="text-white"
                  />
                </div>

                <Link href="/">
                  <h1 className="ml-4 text-lg text-white">Note Ghar</h1>
                </Link>
              </div>

              <div></div>

              {leftBar && (
                <div className="absolute delay-75 bg-white left-0 top-0 w-[200px] h-screen flex justify-between z-20 shadow-lg">
                  
                  <ResponsiveSidebar />

                  <div onClick={() => setLeftBar(!leftBar)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            <div className="h-screen w-full">
              {showSearch ? (
                <div className=" sticky mb-4 hidden md:block">
                  <DashboardNavbar userData={currentUserData} />
                </div>
              ) : null}
              <div
                className={`rounded-md  ${
                  showSearch ? "" : ""
                }  bg-white h-screen w-full overflow-y-auto `}
              >
                <main className="mt-20 p-2 sm:mt-0">
                  {childrenWithAdjustedProps}
                </main>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DashboardLayout;
