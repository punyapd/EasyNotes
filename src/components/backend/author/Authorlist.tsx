import React, { useEffect, useState } from "react";
import moment from "moment";
import ViewLinks from "../../reusable/customLink/ViewLinks";
import CustomeTable from "../../reusable/custometable/CustomeTable";
import LoadingSpinner from "../../reusable/loadingspinner/Spinner";

const columns = [
  { field: "sn", header: "S.NO" },
  { field: "name", header: "Name" },
  { field: "email", header: "Email" },
  { field: "phone", header: "Phone" },
  { field: "address", header: "Address" },
  { field: "date", header: "Date" },
  { field: "notes", header: "Notes" },
  { field: "action", header: "Action" },
];

type Props = {
  authorLists: any;
  authorListLoading: any;
  limit:any;
  setLimit:any;
  offset:any;
  setOffset:any;
  page:any;
  setPage:any;
  categoryNoteList:any;
  categoryID:any;
  notesListDatas?:any;
  sn?:any;
  setSn?:any;
};
const Authorlist = (props: Props) => {
  const { authorLists, authorListLoading, limit, setLimit, offset, setOffset, page, setPage, categoryNoteList, categoryID, notesListDatas, sn, setSn } = props;



  let data: any = [];
   !categoryID ? (
    authorLists?.results?.map((list: any, index: any) =>
    data.push({
      sn: index + sn,
      name: list?.user?.username,
      email: list?.user?.email,
      phone: list?.user?.mobile_number,
      address: list?.user?.address,
      date: moment(list?.user?.date_joined).format("DD-MM-YYYY"),
      notes: list?.user?.notes,
      action: <ViewLinks linksto={`Authors/Authordetails/${list.user.id}`} />,
    })
  )
   ) : categoryNoteList?.results?.map((list: any, index: any) =>
   data.push({
     sn: index + sn,
     name: list?.user?.username,
     email: list?.user?.email,
     phone: list?.user?.mobile_number,
     address: list?.user?.address,
     date: moment(list?.user?.date_joined).format("DD-MM-YYYY"),
     notes: list?.user?.notes,
     action: <ViewLinks linksto={`Authors/Authordetails/${list.user.id}`} />,
   })
 )
    

  return (
    <> 
    <div>
     {
        !categoryID ? (
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
        ):
        (
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
        setSn={setSn}
        sn={sn}
        
        />
        )
      })
      </div>
    </>
  );
};
export default Authorlist;
