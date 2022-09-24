import React, { useState, Fragment } from "react";
import Eye from "../../backend/svg icons/Eye";
import Rating from "../notes/Rating";
import { Dialog, Transition } from "@headlessui/react";
import PDFComponent from "../../PDFComponent";
import { useRouter } from "next/router";

type props = {
  examData: any;
};

const NoteDetails = (props: props) => {
  const { examData } = props;
  const router = useRouter();

  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="w-full md:w-auto  lg:h-96 xl:w-[350px]   border-[#E0E0E0] rounded-b-md  md:mb-10">
      <div className="bg-theme rounded-t-md p-2 md:p-4 lg:p-6 text-md font-medium text-white">
        <p className=" ">Exam Details</p>
      </div>
      <div className=" text-sm p-2 md:p-4 lg:p-6 border-x-[1px] border-b-[1px]  font-medium text-[#37474F] flex items-center justify-between">
        <p>Page Count:</p>
        <p>{examData?.page ? examData?.page : "N/A"} Pages</p>
      </div>
      <div className=" text-sm p-2 md:p-4 lg:p-6 border-x-[1px] border-b-[1px] font-medium text-[#37474F] flex items-center justify-between">
        <p>Subject</p>
        <p>{examData?.category?.name}</p>
      </div>
      <div className=" text-sm p-2 md:p-4 lg:p-6 border-x-[1px] border-b-[1px]  font-medium text-[#37474F] flex items-center justify-between">
        <p>Current Status</p>
        <p>20 reading</p>
      </div>

      <div className=" row-span-2 text-sm p-3 border-b-[1px] border-x-[1px] font-medium text-[#37474F] flex flex-col">
        <div className="bg-[#00000082] w-full h-10  md:h-14 rounded-md flex justify-around text-white items-center">
          <p>Price: Rs {examData?.price ? examData?.price : "N/A"}k</p>
          <Rating textColor="text-white" />
        </div>

        <div className="flex items-center justify-between ">
          <div>
            <div className="flex cursor-pointer" onClick={openModal}>
              <Eye />
              <span>Preview note</span>
            </div>
            <div className="bg-red-300">
              <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-1"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Dialog.Panel className="w-[954px] h-[600px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                          <div className="mt-2 gap-4">
                            <div className="flex justify-end">
                              <img
                                src="/cross icon.png"
                                alt=""
                                className="w-8 h-8 cursor-pointer"
                                onClick={closeModal}
                              />
                            </div>

                            <div>
                              <p className="text-3xl flex justify-center ">
                                {examData?.title}
                              </p>
                              <div className="p-4 space-y-5 h-[450px]">
                                <PDFComponent
                                  file={
                                    examData?.attachment
                                      ? examData?.attachment
                                      : ""
                                  }
                                  showToolBar={false}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center">
                            <button
                              className="orange-btn w-[100px]"
                              onClick={() => router.push("/Signin")}
                            >
                              Purchase
                            </button>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </div>
          </div>

          <div>
            <button
              className="orange-btn w-[100px] mt-3"
              onClick={() => router.push("/Signin")}
            >
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetails;
