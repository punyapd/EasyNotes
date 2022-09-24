import React from "react";
import Link from "next/link";
import Image from "next/image";
import Edit from "../../../components/backend/svg icons/Edit";
import Eye from "../../../components/backend/svg icons/Eye";
import Topics from "../../../components/frontend/notes/Topics";
import Benefits from "../../../components/frontend/notes/Benefits";
import { useRouter } from "next/router";
import useGetHook from "../../../hooks/useGetHooks";
import APIS from "../../../helpers/EndPoints";
import AuthorNotedescription from "../../../components/backend/author/AuthorNotedescription";
import LoadingSpinner from "../../../components/reusable/loadingspinner/Spinner";

type Props = {};

const AuthorNotedetails = (props: Props) => {
  const router = useRouter();
  const { noteID } = router.query;
 
  const { isLoading: noteListLoading, data: notesDetails } = useGetHook({
    queryKey: `${APIS.NOTES}${noteID}`,
    url: `${APIS.NOTES}${noteID}`,
    parma: "",
    auth: true,
  });

  return (
    <>
      {noteListLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-5 md:col-span-3 ">
            <div className="bg-theme p-3 rounded-t-[5px] flex items-center justify-between text-white">
              <div className="flex items-center space-x-3">
                <p> My Note</p>
                <div className="bg-white rounded-[50%] w-2 h-2"></div>
                <p>Note details</p>
              </div>
              <div className="flex gap-2">
                <Link href={`/AuthorDashboard/Notes/CreateNoteView/${noteID}`}>
                  <div className="flex items-center cursor-pointer">
                    <Eye />
                    <span>View note</span>
                  </div>
                </Link>
                <Link href={`/AuthorDashboard/Notes/EdityourDetails/${noteID}`}>
                  <div className="flex items-center cursor-pointer">
                    <Edit />
                    <span>Edit details</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex items-start space-x-5  bg-white">
              <div className=" w-full xl:w-full h-full p-4 dashboard-border font-Inter font-normal text-[#263238] ">
                <div className="flex border-b-[1px] border-[#E0E0E0] pb-2">
                  <p>Note title</p>
                  <p>: {notesDetails?.title}</p>
                </div>
                <div className="note-details-div">
                  <p>Category</p>
                  <p>: 
                    {notesDetails?.category[0].name}
                    </p>
                </div>
                <div className="note-details-div">
                  <p>Price of note</p>
                  <p>: {notesDetails?.price}</p>
                </div>
                <div className=" note-details-div">
                  <p>Duration</p>
                  <p>: </p>
                </div>
                <div className="note-details-div">
                  <p> Note Commission </p>
                  <p>: </p>
                </div>
                <div className="note-details-div">
                  <p>note status</p>
                  <p>: </p>
                </div>
                <div className="note-details-div">
                  <p>Reader</p>
                  <p>: {notesDetails?.user.username}</p>
                </div>
                <div className="note-details-div">
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
            <div className="h-[434px] overflow-y-auto border-b-[1px] border-[#E0E0E0] rounded-lg">
              <AuthorNotedescription
                authorDetailsDescription={notesDetails?.description}
              />
            </div>

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
      )}
    </>
  );
};

export default AuthorNotedetails;
