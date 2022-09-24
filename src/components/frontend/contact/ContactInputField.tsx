import React from "react";
import { Field, ErrorMessage } from "formik";

type Props = {
  label: any;
  fieldname: any;
  type: any;
  name: any;
};
const ContactInputField = (props: Props) => {
  const { label, fieldname, type, name } = props;
  return (
    <div>
      <label>
        <Field
          className="w-full  xl:w-[400px] h-9 p-3 border-[1px] border-[#ABABAB] outline-none rounded-lg"
          placeholder={fieldname}
          type={type}
          name={name}
        />
        <ErrorMessage name={name} component="div" className="text-red-600" />
      </label>
    </div>
  );
};
export default ContactInputField;
