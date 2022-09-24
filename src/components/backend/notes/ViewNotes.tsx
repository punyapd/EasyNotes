import React from "react";
import PDFComponent from "../../PDFComponent";

type Props = {
  noteData: any;
};
const ViewNote = (props: Props) => {
  const { noteData } = props;
  return (
    <div className="p-4 h-full h-[1000px] bg-white rounded-lg font-Inter text-[15px] overflow-scroll ">
      <PDFComponent file={noteData?.attachment ? noteData?.attachment : ""} showToolBar={true}/>
    </div>
  );
};
export default ViewNote;
