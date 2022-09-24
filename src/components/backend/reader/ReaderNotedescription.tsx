import React from "react";
import { MdCleaningServices } from "react-icons/md";

type Props = {
  readerDetailsDescription: any;
};

const ReaderNotedescription = (props: Props) => {
  const { readerDetailsDescription } = props;
  return (
    <div>
      <div className="bg-theme p-3 rounded-t-[5px] flex items-center justify-between text-white font-Inter font-medium  ">
        <p>Note description</p>
        {/* <MdCleaningServices /> */}
      </div>
      <div>
        <p className="text-[#263238] font-Inter font-normal p-4 bg-white h-[386px] overflow-y-auto border-[1px] border-[#E0E0E0] rounded-b-lg">
          {readerDetailsDescription}
        </p>
      </div>
    </div>
  );
};

export default ReaderNotedescription;
