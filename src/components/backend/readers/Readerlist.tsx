import React from "react";
import Link from "next/link";
import LoadingSpinner from "../../reusable/loadingspinner/Spinner";
import moment from "moment";
import ViewLinks from "../../reusable/customLink/ViewLinks";
import CustomeTable from "../../reusable/custometable/CustomeTable";
import Spinner from "../../../components/reusable/loadingspinner/Spinner"


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
  readerListDatas: any;
  readerListDatasLoading: any;
  limit:any;
  setLimit:any;
  offset:any;
  setOffset:any;
  page:any;
  setPage:any;
  categoryNoteList:any;
  categoryID:any;
  sn?:any;
  setSn?:any;
};
const Readerlist = (props: Props) => {
  const { readerListDatas, readerListDatasLoading, limit, setLimit, offset, setOffset, page, setPage, categoryNoteList, categoryID, sn, setSn } = props;
  let data: any = [];

  
  if(!readerListDatasLoading){
    !categoryID ? (
      readerListDatas?.results?.map((list: any, index: any) =>
        data.push({
          sn: index + sn,
          name: list.user.profile?.full_name || "N/A",
          email: list.user.email || "N/A",
          phone: list.user.mobile_number || "N/A",
          address: list?.user?.address || "N/A",
          date: moment(list.user.date_joined).format("DD-MM-YYYY"),
          notes: list?.user?.notes || "N/A",
          action: (
            <ViewLinks linksto={`Readers/Readersdetails/${list.user.id}`} />
          ),
        })
      )
    ): 
    (
      categoryNoteList?.results?.map((list: any, index: any) =>
        data.push({
          sn: sn + index,
          name: list.user.profile?.full_name || "N/A",
          email: list.user.email || "N/A",
          phone: list.user.mobile_number || "N/A",
          address: list?.user?.address || "N/A",
          date: moment(list.user.date_joined).format("DD-MM-YYYY"),
          notes: list?.user?.notes || "N/A",
          action: (
            <ViewLinks linksto={`Readers/Readersdetails/${list.user.id}`} />
          ),
        })
      )
    )
  }


   

  return readerListDatasLoading ? (
    <LoadingSpinner />
  ) : (
    <>
      <CustomeTable data={data} columns={columns} hover={true} striped={true} limit={limit} setLimit={setLimit} offset={offset} setOffset={setOffset} page={page} setPage={setPage} listDatas={readerListDatas} sn={sn} setSn={setSn} />
    </>
  );
};
export default Readerlist;
