import React, { useState, useEffect } from "react";
import Notes from "../../../components/backend/Notes";
import APIS from "../../../helpers/EndPoints";
import useGetHook from "../../../hooks/useGetHooks";

const MyNotes = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1)
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);
  const [sn, setSn] = useState(1)

  const { isLoading: notesListLoading, data: notesListDatas } = useGetHook({
    queryKey: `${APIS.NOTES}?limit=5&offset=${offset}`,
    url: `${APIS.NOTES}?limit=5&offset=${offset}`,
    parma: "",
    auth: true,
  });


  const { isLoading: categoryLoading, data: categoryListData } = useGetHook({
    queryKey: APIS.CATEGORY,
    url: APIS.CATEGORY,
    // `${APIS.CATEGORY}?limit=5&offset=${offset}`
    parma: "",
    auth: true,
  });


  let options: any = [{ id: 0, name: "All" }];

  Array.isArray(categoryListData)
    ? categoryListData?.map((item: any, index: any) =>
        options.push({ id: item.id, name: item.name })
      )
    : null;



  return (
    <div>
      <Notes
        notesListLoading={notesListLoading}
        notesListDatas={notesListDatas || []}
        options={options}
        offset={offset}
        setOffset={setOffset}
        limit={limit}
        setLimit={setLimit}
        page={page}
        setPage={setPage}
        sn={sn}
        setSn={setSn}
      />
    </div>
  );
};
export default MyNotes;
