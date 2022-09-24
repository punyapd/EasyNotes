import Link from "next/link";
import React from "react";

type Props = {
  authorDetailsDescription: any;
};

const AuthorNotedescription = (props: Props) => {
  const { authorDetailsDescription } = props;
  return (
    <div>
      <div className="bg-theme p-3 rounded-t-[5px] flex items-center justify-between text-white font-Inter font-medium  ">
        <p>Note description</p>
        {/* <MdCleaningServices /> */}
      </div>
      <div>
        <p className="text-[#263238] h-[400px] font-Inter font-normal p-4 bg-white h-full overflow-y-auto border-[1px] border-[#E0E0E0] rounded-b-lg">
          {authorDetailsDescription}
        </p>
      </div>
    </div>
  );
};

export default AuthorNotedescription;
