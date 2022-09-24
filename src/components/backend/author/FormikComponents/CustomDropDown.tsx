import React from "react";
import { Field, ErrorMessage } from "formik";

type Props = {
    options: any,
    name: any,
    label: any
};

const CustomDropdown = (props: Props) => {
    const {options, name, label} = props;
  return (
    <div>
      <h2 className="text-md text-[#455A64] mb-2 text-Inter font-medium">
        {label}
      </h2>
      <label>
        <Field
          name={name}
          as="select"
          className="outline-none border-[1px] border-[#E0E0E0] rounded-lg h-[35px] md:h-[40px] pl-3 w-full"
        >
          {options.map((item: any) => (
            <option className="text-black" key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </Field>

        <ErrorMessage name={name} component="div" />
      </label>
    </div>
  );
};
export default CustomDropdown;
