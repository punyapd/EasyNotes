import React from "react";
import { Field, ErrorMessage } from "formik";

type Props = {
  label: any;
  fieldname: any;
  type: any;
  name: any;
};

const SetPreviewPageComponent = (props: Props) => {
  const { label, fieldname, type, name } = props;
  return (
    <div className="border-[1px] border-[#E0E0E0] rounded-lg">
      <div className="bg-theme p-3 rounded-t-[5px] w-full ">
        <p>Set your preview page</p>
      </div>
      <div className="m-5">
        <p className="pb-3 text-[#ABABAB] border-b-[1px] border-[#E0E0E0]">
          Seperate page with coma : 1 ,3 ,4
        </p>
        <div className="py-5 flex flex-col items-center justify-center space-y-5">
          <p className="text-[#263238]">Enter Page Number</p>

          <label>
            <Field
              className="outline-none border-[1px] text-gray-600 border-[#E0E0E0] rounded-lg h-[35px] md:h-[40px] pl-3 w-full"
              placeholder={fieldname}
              type={type}
              name={name}
            />
            <ErrorMessage
              name={name}
              component="div"
              className="text-red-600"
            />
          </label>
        </div>
      </div>
    </div>
  );
};
export default SetPreviewPageComponent;
