import React, { useEffect, useState } from "react";
import AuthorDropdown from "./dropdown/AuthorDropdown";
import Category from "./dropdown/Category";
import ViewLinks from "../reusable/customLink/ViewLinks";
import CustomeTable from "../reusable/custometable/CustomeTable";
import moment from "moment";
import LoadingSpinner from "../reusable/loadingspinner/Spinner";
import Datefilter from "./dropdown/Datefilter";
import APIS from "../../helpers/EndPoints";
import useGetHook from "../../hooks/useGetHooks";
import Menualt from "./svg icons/Menualt";

const columns = [
  { field: "sn", header: "S.NO" },
  { field: "title", header: "Title" },
  { field: "category", header: "Category" },
  { field: "author", header: "Author" },
  { field: "reader", header: "Reader" },
  { field: "date", header: "Date" },
  { field: "price", header: "Price" },
  { field: "status", header: "Status" },
  { field: "action", header: "Action" },
];

type Props = {
  notesListLoading: any;
  notesListDatas: any;
  options?: any;
  offset:any;
  setOffset:any;
  limit:any;
  setLimit:any;
  page:any;
  setPage:any;
  noteSearchLists?:any;
  sn?:any;
  setSn?:any;

};
const Notes = (props: Props) => {
  const [smallDevice, setSmallDevice] = useState(false);
  const { notesListDatas, notesListLoading, options, offset, setOffset, limit, setLimit, page, setPage, noteSearchLists, setSn, sn } = props;


  let data: any = [];

  // Category data in Dashboard note by

  const [categoryID, setCategoryID] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  const { isLoading: categoryNoteListLoading, data: categoryNoteList } =
    useGetHook({
      queryKey: `${APIS.NOTES}?category=${categoryID}&limit=5&offset=${offset}`,
      url: `${APIS.NOTES}?category=${categoryID}&limit=5&offset=${offset}`,
      parma: "",
      auth: true,
    });
  


  const { isLoading: allNotesDataLoading, data: allNotesData } = useGetHook({
    queryKey: "courseData",
    url: APIS.NOTES,
    parma: "",
    auth: true,
  });


  const { isLoading: categoryLoading, data: categoryListData } = useGetHook({
    queryKey: "categoryData",
    url: APIS.CATEGORY,
    parma: "",
    auth: true,
  });
  
  console.log('sn', sn)

  {noteSearchLists ? noteSearchLists?.results?.map((list: any, index: any) =>
  data.push({
    sn: sn + index,
    title: list?.title,
    category: list?.category[0]?.name,
    author: list.user.profile?.full_name,
    reader: "Reader",
    date: moment(list.user.date_joined).format("DD-MM-YYYY"),
    price: "100",
    status: "sdf",
    action: <ViewLinks linksto={`Notes/NoteID/${list.id}`} />,
  })
) : (!notesListLoading &&
!categoryID
  ?
   notesListDatas?.results?.map((list: any, index: any) =>
      data.push({
        sn: sn + index,
        title: list?.title,
        category: list?.category[0]?.name,
        author: list.user.profile?.full_name,
        reader: "Reader",
        date: moment(list.user.date_joined).format("DD-MM-YYYY"),
        price: "100",
        status: "sdf",
        action: <ViewLinks linksto={`Notes/NoteID/${list.id}`} />,
      })
    )
  : categoryNoteList?.results?.map((list: any, index: any) =>
      data.push({
        sn: sn + index,
        title: list?.title,
        category: list?.category[0]?.name,
        author: list.user.profile?.full_name,
        reader: "Reader",
        date: moment(list.user.date_joined).format("DD-MM-YYYY"),
        price: "90",
        status: "sdf",
        action: <ViewLinks linksto={`Notes/NoteID/${list.id}`} />,
      })
    ))}


  // if 
  
  

  return (
    <div className=" relative h-screen w-[100%] bg-white rounded-lg grid grid-cols-5">
      <div className="col-span-5">
        <div
          className="flex justify-between  items-start"
          style={{ padding: "1rem 1rem 0 1rem" }}
        >
          
          <h2 className="font-Inter text-lg font-medium">Notes list</h2>
          <div className=" sm:flex space-x-5 ">
            
            {/* <div className="hidden sm:block">
              <AuthorDropdown />
            </div> */}
            {/* <Datefilter /> */}
            <div className="hidden sm:block">
              {!noteSearchLists && <Category
                options={options}
                categoryID={categoryID}
                setCategoryID={setCategoryID}
                categoryNoteList={categoryNoteList}
              />}
              
            </div>
            <div
              className="sm:hidden mt-16"
              onClick={() => setSmallDevice(!smallDevice)}
            >
              <Menualt />
            </div>
          </div>

        </div>
        {!smallDevice && (
          <div className="flex flex-col xs:flex-row gap-4 p-2 sm:hidden">
            <Category
              options={options}
              categoryID={categoryID}
              setCategoryID={setCategoryID}
              categoryNoteList={categoryNoteList}
            
            />
            <AuthorDropdown />
          </div>
        )}
        {notesListLoading ? (
          <LoadingSpinner />
        ) : (
          <CustomeTable
            data={data}
            columns={columns}
            hover={true}
            striped={true}
            offset={offset}
            setOffset={setOffset}
            limit={limit}
            setLimit={setLimit}
            page={page}
            setPage={setPage}
            listDatas={notesListDatas}
            sn={sn}
            setSn={setSn}
            
          />
        )}
      </div>
    </div>
  );
};
export default Notes;
