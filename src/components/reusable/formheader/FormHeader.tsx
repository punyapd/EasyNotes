import React from "react";

type Props = {
    main_title: any,
    sub_title: any
}

const FormHeader = (props: Props) => {
    const {main_title, sub_title} = props;
  return (
    <div>
      <h1 className="leading-[59px] text-5xl font-bold font-Jost">
        {main_title}
      </h1>

      <p className="  leading-6 font-Inter text-[#ABABAB]">
        {sub_title}
      </p>
    </div>
  );
};
export default FormHeader;
