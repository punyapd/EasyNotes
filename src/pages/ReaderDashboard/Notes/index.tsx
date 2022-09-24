import React, { useState } from "react";
import ReaderMyNotes from "../../../components/backend/reader/ReaderMyNotes";
import APIS from "../../../helpers/EndPoints";
import useGetHook from "../../../hooks/useGetHooks";

const MyNotes = () => {
   
  const [limit, setLimit] = useState(5)
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(1)
  const [sn, setSn] = useState(1)

  const { isLoading: readerListLoading, data: readerListData } = useGetHook({
    queryKey: "authorlist",
    url: APIS.NOTES,
    parma: "",
    auth: true,
  });

  const { isLoading: studentEnrollLoading, data: studentEnrollData } = useGetHook({
    queryKey: "studenEnrollData",
    url: APIS.ENROLL_PDF_NOTES,
    parma: "",
    auth: true,
  });


  return (
    <div>
      <ReaderMyNotes
        readerlistLoading={readerListLoading}
        readerListData={readerListData}
        //changes
        studentEnrollData={studentEnrollData}
        limit={limit}
        setLimit={setLimit}
        offset={offset}
        setOffset={setOffset}
        page={page}
        setPage={setPage}
        sn={sn}
        setSn={setSn}
      />
    </div>
  );
};

export default MyNotes;
