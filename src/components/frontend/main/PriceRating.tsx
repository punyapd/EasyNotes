import React from "react";
import Rating from "../notes/Rating";
type Props = {
  item: any;
};
const PriceRating = (props: Props) => {
  const { item } = props;
  return (
    <>
      <div className="relative flex items-center w-full h-[36px] px-4 bg-black opacity-50 rounded-[5px] "></div>
      <div className="absolute w-full h-full flex items-center justify-between pl-4 pr-12 top-0">
        <span className="text-sm font-medium font-Jost text-white ">
          Price: Rs {item.price}
        </span>
        <Rating textColor="text-white" />
      </div>
    </>
  );
};
export default PriceRating;
