import React from "react";
import Link from "next/link";
import Image from "next/image";
import Edit from "../../../components/backend/svg icons/Edit";
import Eye from "../../../components/backend/svg icons/Eye";
import { MdCleaningServices } from "react-icons/md";
import ReaderNotedescription from "../../../components/backend/reader/ReaderNotedescription";
import Topics from "../../../components/frontend/notes/Topics";
import Benefits from "../../../components/frontend/notes/Benefits";
import { useRouter } from "next/router";
import useGetHook from "../../../hooks/useGetHooks";
import APIS from "../../../helpers/EndPoints";

type Props = {};

const ReaderNotedetails = (props: Props) => {
  const router = useRouter();
  const { readerID } = router.query;


  const { isLoading: readerListLoading, data: readerDetails } = useGetHook({
    queryKey: `${APIS.NOTES}${readerID}`,
    url: `${APIS.NOTES}${readerID}`,
    parma: "",
    auth: true,
  });



  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-5 md:col-span-3 ">
        <div className="bg-theme p-3 rounded-t-[5px] flex items-center justify-between text-white">
          <div className="flex items-center space-x-3">
            <p> My Note</p>
            <div className="bg-white rounded-[50%] w-2 h-2"></div>
            <p>Note details</p>
          </div>
          <Link href={`Notedetails/${readerID}`} >
            <div className="flex items-center cursor-pointer">
              <Eye />
              <span>View note</span>
            </div>
          </Link>
        </div>
        <div className="flex items-start space-x-5  bg-white">
          <div className=" w-full xl:w-full h-full p-4 dashboard-border font-Inter font-normal text-[#263238] ">
            <div className="flex border-b-[1px] border-[#E0E0E0] pb-2">
              <p>Note title</p>
              <p>: {readerDetails?.title}</p>
            </div>
            <div className="flex border-b-[1px] border-[#E0E0E0] py-2">
              <p>Category</p>
              <p>: {readerDetails?.category[0]?.name}</p>
            </div>
            <div className="flex border-b-[1px] border-[#E0E0E0] py-2">
              <p>Price of note</p>
              <p>: {readerDetails?.price}</p>
            </div>
            <div className=" flex border-b-[1px] border-[#E0E0E0] py-2">
              <p>Duration</p>
              <p>: </p>
            </div>
            <div className="flex border-b-[1px] border-[#E0E0E0] py-2">
              <p> Note Commission </p>
              <p>: </p>
            </div>
            <div className="flex border-b-[1px] border-[#E0E0E0] py-2">
              <p>note status</p>
              <p>: {readerDetails?.status}</p>
            </div>
            <div className="flex border-b-[1px] border-[#E0E0E0] py-2">
              <p>Reader</p>
              <p>: {readerDetails?.user.username}</p>
            </div>
            <div className="flex border-b-[1px] border-[#E0E0E0] py-2">
              <p>Subscription</p>
              <p>: </p>
            </div>
            <div className="flex pt-2">
              <p>date of publication</p>
              <p>: </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-5 md:col-span-2">
        <ReaderNotedescription
          readerDetailsDescription={readerDetails?.description}
        />

        <div>
          <div className="bg-theme p-3 rounded-t-[5px] mt-4 flex items-center justify-between text-white">
            <p>Topics Covered in this note</p>
          </div>
          <Topics />
        </div>

        <div>
          <div className="bg-theme p-3 rounded-t-[5px] mt-4 flex items-center justify-between text-white">
            <p>Benefits of Reading this note</p>
          </div>
          <Benefits />
        </div>
      </div>
    </div>
  );
};

export default ReaderNotedetails;
