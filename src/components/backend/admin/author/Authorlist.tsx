import React from "react";
import Link from "next/link";
import { list } from "postcss";
import moment from "moment";
import ViewLinks from "../../../reusable/customLink/ViewLinks";
import CustomeTable from "../../../reusable/custometable/CustomeTable";

const columns = [
  { field: "sn", header: "S.NO" },
  { field: "title", header: "Title" },
  { field: "category", header: "Category" },
  { field: "list", header: "List" },
  { field: "reader", header: "Reader" },
  { field: "date", header: "Date" },
  { field: "status", header: "Status" },
  { field: "action", header: "Action" },
];

type Props = {
  authorLists: any;
};
export default function Authorlist(props: Props) {
  const { authorLists } = props;

  let data: any = [];
  authorLists.map((list: any, index: any) =>
    data.push({
      sn: index + 1,
      title: list.user.profile?.full_name,
      category: list.user.email,
      list: list.user.mobile_number,
      reader: "tkkkk",
      date: moment(list.user.date_joined).format("DD-MM-YYYY"),
      status: "sdf",
      action: <ViewLinks linksto={`Authors/Authordetails/${list.user.id}`} />,
    })
  );

  return (
    <CustomeTable data={data} columns={columns} hover={true} striped={true} offset={undefined} setOffset={undefined} limit={undefined} setLimit={undefined} />
  );
}
