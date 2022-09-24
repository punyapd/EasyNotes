import React from "react";

type Props = {
  label: any;
  fieldname: any;
  name: any;
  type: any;
};

const FormInput = ({ label, fieldname, name, type }: Props) => {
  return (
    <div>
      <h2>{label}</h2>
      <input
        className="input-dashboard"
        type={type}
        placeholder={fieldname}
        name={name}
      />
    </div>
  );
};

export default FormInput;
