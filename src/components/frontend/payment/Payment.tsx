import React from "react";
import Image from "next/image";
import ButtonComponent from "../main/ButtonComponent";

type Props = {};

const names = [
  { title: "Subject" },
  { title: "Subscription" },
  { title: "Price of Note" },
  { title: "Total Pages" },
  { title: "Published Notes" },
];

const Payment = (props: Props) => {
  return (
    <div className="mx-[22px] sm:mx-[55px] md:md:mx-[65px] lg:mx-[80px] xl:mx-[125px] my-8 md:my-16 xl:md-20  font-Inter">
      <div className="border-[#CCCCCC] border-[1px] p-10  rounded-lg">
        <div className="grid md:grid-cols-2  gap-2 md:gap-4 text-sm sm:text-base border-b-[1px] pb-6">
          {names.map((name: any, index: any) => (
            <div key={index} className="flex">
              <h2 className="font-medium">{name.title}</h2>
              <p className="font-normal">: Economics Note</p>
            </div>
          ))}
        </div>
        <div className="grid place-items-center gap-6">
          <p className="text-center font-normal border mt-5  p-5 text-sm sm:text-base rounded-xl">
            You need pay amount listed above to get your note. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </p>
          <p className="text-center text-base sm:text-xl font-medium ">
            Select your payment method
          </p>
          <div className="w-full h-full sm:w-[250px] sm:h-[150px] border-[1px] rounded-xl grid place-items-center">
            <div className="relative w-[167px] h-[96px] ">
              <Image src="/esewa-logo 1.png" layout="fill" alt="esewa logo" />
            </div>
          </div>
          <ButtonComponent
            buttontitle={"Proceed to Pay"}
            buttoncolor={"bg-[#FF6F06]"}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
