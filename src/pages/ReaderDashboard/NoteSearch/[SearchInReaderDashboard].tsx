import { useRouter } from "next/router";
import React, { useState } from "react";
import ReaderMyNotes from "../../../components/backend/reader/ReaderMyNotes";
import APIS from "../../../helpers/EndPoints";
import useGetHook from "../../../hooks/useGetHooks";



const MyNotes = () => {
   
  const [limit, setLimit] = useState(5)
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(1)
  const [sn, setSn] = useState(1)

  const router = useRouter()
  const keyword = router.query

  const { isLoading: readerListLoading, data: readerListData } = useGetHook({
    queryKey: "authorlist",
    url: APIS.NOTES,
    parma: "",
    auth: true,
  });


  const { isLoading: studentEnrollLoading, data: studentEnrollData } = useGetHook({
    queryKey: `${APIS.ENROLL_PDF_NOTES}?limit=5&offset=${offset}`,
    url: `${APIS.ENROLL_PDF_NOTES}?limit=5&offset=${offset}`,
    parma: "",
    auth: true,
  });

  const { isLoading: studentSearchLoading, data: studentSearchData } = useGetHook({
    queryKey: `${APIS.ENROLL_PDF_NOTES}?limit=5&offset=${offset}&search=${keyword.SearchInReaderDashboard}`,
    url: `${APIS.ENROLL_PDF_NOTES}?limit=5&offset=${offset}&search=${keyword.SearchInReaderDashboard}`,
    parma: "",
    auth: true,
  });

  console.log('noteSearchlist', studentSearchData)
   
  return (
    <div>
      <ReaderMyNotes
        readerlistLoading={readerListLoading}
        readerListData={readerListData}
        //changes
        studentEnrollData={studentEnrollData || null}
        limit={limit}
        setLimit={setLimit}
        offset={offset}
        setOffset={setOffset}
        page={page}
        setPage={setPage}
        noteSearchLists={studentSearchData || null}
        sn={sn}
        setSn={setSn}
      />
    </div>
  );
};

export default MyNotes;
