import React from "react";
import Link from "next/link";

type Props = {
  title: any;
  link_name: any;
  to:any
};

const FormFooter = (props: Props) => {
  const { title, link_name, to } = props;
  return (
    <p className=" leading-6 font-Inter text-[#ABABAB] text-sm ml-2">
      {title}
      <Link href={to}>
        <span className="text-[#F42A41] ml-4 cursor-pointer text-md">
          {link_name}
        </span>
      </Link>
    </p>
  );
};
export default FormFooter;
