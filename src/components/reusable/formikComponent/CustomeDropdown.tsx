import React from "react";
import { Field, ErrorMessage } from "formik";

type Props = {
  options: any;
  name: any;
  label: any;
};

const CustomeDropdown = (props: Props) => {
  const { options, name, label } = props;
  return (
    <div>
      <h2 className="text-md text-[#455A64] mb-2 text-Inter font-medium">
        {label}
      </h2>
      <label>
        <Field
          name={name}
          as="select"
          className="outline-none border-b-2 border-tgray p-2 rounded-lg w-auto  xl:w-72"
        >
          {options.map((item: any) => (
            <option className="text-black" key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </Field>

        <ErrorMessage name={name} component="div" />
      </label>
    </div>
  );
};
export default CustomeDropdown;
