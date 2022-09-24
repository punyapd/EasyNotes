import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { useEffect } from "react";
import DropDown from "../../reusable/dropdown/DropDown";

type Props = {
  options?: any;
  // some changes
  categoryID?: any;
  setCategoryID?: any;
  categoryNoteList?: any;
  sn?:any;
  setSn?:any;
};

const Category = (props: Props) => {
  const { options, categoryID, setCategoryID, categoryNoteList,sn, setSn } = props;


  return (
    //some changes
    <DropDown
      title="By Category"
      options={options}
      categoryID={categoryID}
      setCategoryID={setCategoryID}
      categoryNoteList={categoryNoteList}
    />
  );
};
export default Category;
