import React from "react";

type Props = {
  title: any;
  placeholder: any;
  type: any;
  value: any; 
  // onChange?: any;
};

const CustomeInput = (props: Props) => {
  const { type, title, placeholder, value } = props;
  return (
    <div>
      <p>{title}</p>
      <input
        type={type}
        placeholder={placeholder}
        className="outline-none border-[1px] border-[#E0E0E0] rounded-lg h-[35px] md:h-[40px] pl-3 w-full"
        value={value}
        // onChange={onChange}
      />
    </div>
  );
};
export default CustomeInput;
