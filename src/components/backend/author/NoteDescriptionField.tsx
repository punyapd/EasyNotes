import React from "react";
import { MdCleaningServices } from "react-icons/md";
import { Field, ErrorMessage } from "formik";

type Props = {
  label: any;
  fieldname: any;
  type: any;
  name: any;
  title: any;
  row_height: any;
};
const NoteDescriptionField = (props: Props) => {
  const { label, fieldname, type, name, title, row_height } = props;
  return (
    <div className="col-span-12 md:col-span-4">
      <div className="bg-theme p-3 rounded-t-[5px] flex items-center justify-between ">
        <p className="text-white">{title}</p>
        <MdCleaningServices />
      </div>
      <div>
        <label>
          <Field
            as="textarea"
            className="outline-none border-[1px] text-gray-600 border-[#E0E0E0] rounded-lg md: pl-3 w-full"
            placeholder={fieldname}
            type={type}
            name={name}
            // rows={6}
            rows={row_height}
          />
          <ErrorMessage name={name} component="div" className="text-red-600" />
        </label>
      </div>
    </div>
  );
};
export default NoteDescriptionField;
