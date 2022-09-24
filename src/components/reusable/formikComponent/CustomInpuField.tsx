import React from "react";
import { Field, ErrorMessage } from "formik";

type Props = {
  label: any;
  fieldname: any;
  type: any;
  name: any;
};

const CustomInpuField = (props: Props) => {
  const { label, fieldname, type, name } = props;
  return (
    <div>
      <h2 className="text-md text-[#455A64] mb-2 text-Inter font-medium">
        {label}
      </h2>
      <label>
        <Field
          className="outline-none border-[1px] border-[#E0E0E0] rounded-lg h-[35px] md:h-[40px] pl-3 w-full"
          placeholder={fieldname}
          type={type}
          name={name}
        />
        <ErrorMessage name={name} component="div" className="text-red-600" />
      </label>
    </div>
  );
};
export default CustomInpuField;
