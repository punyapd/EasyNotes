import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {
  src: any;
  link_to: any;
};
const SocialMediaIcons = (props: Props) => {
  const { src, link_to } = props;
  return (
    <Link href={link_to}>
      <div className="my-3 mr-3 cursor-pointer">
        <div className="relative w-[45px] h-[45px]">
          <Image src={src} alt="socialmedia_link" layout="fill" />
        </div>
      </div>
    </Link>
  );
};
export default SocialMediaIcons;
