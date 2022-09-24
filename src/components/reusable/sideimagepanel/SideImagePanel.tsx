import React from "react";
import Link from "next/link";
import Image from "next/image";

const SideImage = () => {
  return (
    <div className="object-cover hidden md:inline-block relative z-0 w-full h-screen sm:col-span-2 md:col-span-3 lg:col-span-4">
      <Link href="/">
        <div className="absolute cursor-pointer top-12 left-10 z-10">
          <Image src="/logo.png" alt="logo" width={220} height={50} />
        </div>
      </Link>

      <div>
        <Image
          className="object-cover object-right"
          alt="login page"
          src="/loginpage.png"
          layout="fill"
        />
      </div>
    </div>
  );
};
export default SideImage;
