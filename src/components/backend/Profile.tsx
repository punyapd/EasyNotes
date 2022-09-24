import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Notification from "./dropdown/Notification";
import { Menu } from "@headlessui/react";
import Link from "next/link";

type Props = {
  userData: any;
};
const Profile = (props: Props) => {
  const { userData } = props;
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [onHover, setOnHover] = useState(false);

  const router = useRouter();

  const logoutHandler = () => {
    const token = sessionStorage?.getItem("userAuth");
    if (!token) {
      router.push("/Signin");
    } else {
      sessionStorage?.removeItem("userAuth");
      router.push("/Signin");
    }
  };
  return (
    <div>
      
      <div className="relative pl-4 flex items-center space-x-2 font-Inter font-medium">
        <Menu>
          <Menu.Button className="flex justify-center items-center">
            {/* <Notification /> */}

            <Image
              src="/userhead.svg"
              alt={"profile"}
              height={30}
              width={30}
              layout="fixed"
            />
            <div
              className="cursor-pointer  hidden ml-2 md:block"
              onClick={(e) => setIsActive(!isActive)}
            >
              {userData?.email ? userData?.email.slice(0, 5) : "Me"}
            </div>
          </Menu.Button>
          <div>
            <Menu.Items className=" bg-white text-black absolute z-10 -left-2 top-10 p-1 rounded-md">
              <Menu.Item>
                <div className="flex justify-start items-center hover:bg-theme p-2 rounded-md cursor-pointer">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    ></path>
                  </svg>
                  <div className="text-themetext mx-1" onClick={logoutHandler}>
                    Logout
                  </div>
                </div>
              </Menu.Item>
              <hr className="mt-2 mb-2" />
              <Menu.Item>
                <Link href="/Dashboard/Notes">
                  <div className="flex justify-between items-center hover:bg-theme p-2 rounded-md cursor-pointer">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z"></path>
                    </svg>
                    <div className="text-themetext mx-1">
                      Dashboard
                    </div>
                  </div>
                </Link>
              </Menu.Item>
            </Menu.Items>
          </div>
        </Menu>
      </div>
    </div>
  );
};
export default Profile;
