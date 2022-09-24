import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PriceRating from "./PriceRating";
import { url } from "inspector";
type Props = {
  item: any;
};
const Cards = (props: Props) => {
  const { item } = props;

  return (
    <div className="rounded-xl  justify-center  overflow-hidden  shadow-lg text-themetext">
      <div className="relative">
        <div className="relative h-[260px] w-full bg-no-repeat bg-cover" data-mdb-ripple="true">
          <Image
            className="object-fill max-w-xs hover:scale-110 transition duration-300 ease-in-out"
            src={item?.image ? item.image : "/no_image.png"}
            alt="Notes Image"
            layout="fill"
          />
        </div>
        <div className="absolute top-[80%] w-full px-4">
          <PriceRating item={item} />
        </div>
      </div>
      <div className="px-6 py-5 ">
        <div className="font-bold text-lg sm:text-xl font-Jost  mb-2 truncate ">
          {item.title}
        </div>
        <p className="h-16 text-sm leading-[21px] font-Inter font-medium text-ellipsis overflow-hidden  ">
          {item.description ? item?.description : "N/A"} ...
        </p>
      </div>
      <div className="flex items-center justify-between mb-5 mx-5">
        <div className="flex items-center justify-center">
          <Image src="/book.png" alt="card image" width={20} height={20} />
          <span className="ml-2 text-xs sm:text-sm font-Jost font-medium">
            200 Readings
          </span>
        </div>
        <Link href={`notes/${item.id}`}>
          <div className="text-xs sm:text-sm cursor-pointer text-theme font-semibold decoration-none font-Jost">
            Read Now
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
