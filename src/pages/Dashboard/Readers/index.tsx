import React, { useState } from "react";
import Category from "../../../components/backend/dropdown/Category";
import Readerlist from "../../../components/backend/readers/Readerlist";
import APIS from "../../../helpers/EndPoints";
import useGetHook from "../../../hooks/useGetHooks";

export default function Readers() {

  const [limit, setLimit] = useState(5)
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(1)
  const [categoryID, setCategoryID] = useState(null);
  const [sn, setSn] = useState(0)


  const { isLoading: readerListDatasLoading, data: readerListDatas } = useGetHook({
    queryKey: `${APIS.READERS}?limit=5&offset=${offset}`,
    url: `${APIS.READERS}?limit=5&offset=${offset}`,
    parma: "",
    auth: true,
  }); 

  const { isLoading: categoryNoteListLoading, data: categoryNoteList } =
    useGetHook({
      queryKey: `${APIS.ENROLL_PDF_NOTES}?user=&limit=5&note=${categoryID}`,
      url: `${APIS.ENROLL_PDF_NOTES}?user=&limit=5&note=${categoryID}`,
      parma: "",
      auth: true,
    });

  const { isLoading: categoryLoading, data: categoryListData } = useGetHook({
    queryKey: "categoryData",
    url: APIS.CATEGORY,
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
    <div className=" overflow-x-scroll">
      <div
        className="flex justify-between items-start bg-white"
        style={{ padding: "1rem 1rem 0 1rem" }}
      >
        <h2 className="font-Inter text-lg font-medium">Reader list</h2>
        <div className="flex space-x-5">
        <Category
              options={options}
              categoryID={categoryID}
              setCategoryID={setCategoryID}
              categoryNoteList={categoryNoteList}
            />
        </div>
      </div>
      <Readerlist readerListDatas={readerListDatas} readerListDatasLoading={readerListDatasLoading} categoryNoteList={categoryNoteList} limit={limit} setLimit={setLimit} offset={offset} setOffset={setOffset} page={page} setPage={setPage} categoryID={categoryID} sn={sn} setSn={setSn}/>
    </div>
  );
}
