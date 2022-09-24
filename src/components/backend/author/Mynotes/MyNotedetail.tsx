import React from "react";
import Notes from "../../../../components/backend/Notes";

type Props = {
  notesListLoading: any;
  notesListDatas: any;
};
const MyNotedetail = (props: Props) => {
  const { notesListLoading, notesListDatas } = props;

  return (
    <div className="w-full bg-white h-[668px] text-white font-Inter font-medium  p-4 rounded-lg  ">
      <Notes
        notesListLoading={notesListLoading}
        notesListDatas={notesListDatas} offset={undefined} setOffset={undefined} limit={undefined} setLimit={undefined} page={undefined} setPage={undefined}      />
    </div>
  );
};
export default MyNotedetail;
