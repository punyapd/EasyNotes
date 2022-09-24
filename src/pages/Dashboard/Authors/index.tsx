import React, { useEffect, useState } from "react";
import Authorlist from "../../../components/backend/author/Authorlist";
import useGetHook from "../../../hooks/useGetHooks";
import APIS from "../../../helpers/EndPoints";
import AuthorDropDown from "../../../components/backend/dropdown/AuthorDropdown";
import Category from "../../../components/backend/dropdown/Category";

const Authors = () => {
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(5)
  const [page, setPage] = useState(1)
  const [sn, setSn] = useState(1)

  const { isLoading: authorListLoading, data: authorListDatas } = useGetHook({
    queryKey: `${APIS.AUTHORS}?limit=5&offset=${offset}`,
    url: `${APIS.AUTHORS}?limit=5&offset=${offset}`,
    parma: "",
    auth: true,
  });


  const [categoryID, setCategoryID] = useState(null);



  const [data, setData] = useState([]);
  const { isLoading: notesListLoading, data: notesListDatas } = useGetHook({
    queryKey: `${APIS.NOTES}?limit=5&offset=${offset}`,
    url: `${APIS.NOTES}?limit=5&offset=${offset}`,
    parma: "",
    auth: true,
  });

  const { isLoading: categoryNoteListLoading, data: categoryNoteList } =
    useGetHook({
      queryKey: `${APIS.NOTES}?category=${categoryID}&limit=5&offset=${offset}`,
      url: `${APIS.NOTES}?category=${categoryID}&limit=5&offset=${offset}`,
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
        <h2 className="font-Inter text-lg font-medium">Author list</h2>
        <div className="flex space-x-5">
        <Category
              options={options}
              categoryID={categoryID}
              setCategoryID={setCategoryID}
              categoryNoteList={categoryNoteList}
            />
        </div>
      </div>
      <Authorlist
        authorListLoading={notesListLoading}
        authorLists={notesListDatas || []}
        offset={offset}
        setOffset={setOffset}
        limit={limit}
        setLimit={setLimit}
        page={page}
        setPage={setPage}
        categoryNoteList={categoryNoteList}
        categoryID={categoryID}
        notesListDatas={notesListDatas}
        sn={sn}
        setSn={setSn}
      />
    </div>
  );
};
export default Authors;
