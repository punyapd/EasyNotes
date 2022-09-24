import React, { useState, useEffect } from "react";
import APIS from "../../../helpers/EndPoints";
import useGetHook from "../../../hooks/useGetHooks";
import { useRouter } from "next/router";
import CreateNoteView from "../../../components/backend/author/CreateNoteView";
import LoadingSpinner from "../../../components/reusable/loadingspinner/Spinner";
import ViewNote from "../../../components/backend/notes/ViewNotes";

const CreatenoteView = () => {
  const router = useRouter();

  const { noteID } = router.query;

  const { isLoading: noteDetailDataLoading, data: noteDetailData } = useGetHook(
    {
      queryKey: "noteDetailslists",
      url: `${APIS.NOTES}${noteID}`,
      parma: "",
      auth: true,
    }
  );
  return (
    <>
      {noteDetailDataLoading ? (
        <LoadingSpinner />
      ) : (
        <ViewNote noteData={noteDetailData} />
      )}
    </>
  );
};
export default CreatenoteView;
