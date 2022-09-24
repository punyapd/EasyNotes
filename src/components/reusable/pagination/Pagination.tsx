import React, { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

type Props = {
  limit: any;
  setLimit: any;
  offset: any;
  setOffset: any;
  page:any;
  setPage:any;
  listDatas?:any;
  sn?:any;
  setSn?:any;
};

const Pagination = (props: Props) => {
  const { limit, setLimit, offset, setOffset, page, setPage, listDatas, sn, setSn } = props;
  const [disabled, setDisabled] = useState('')
  
  const handlePrev = () => {
    if (page > 1){
      setPage(page - 1);
      setOffset(offset - 5);
      setSn(sn-5)
    }


      
  }

  const handleNext = () => {
    setOffset(offset + 5)
    setPage(page+1)
    setSn(sn+5)
    console.log('sn',sn)

  }

  return (
    <div className="flex justify-center gap-4">
      {listDatas?.previous && <p className="cursor-pointer" onClick={handlePrev}>
        
        <IoIosArrowDropleft className={`${disabled == 'left' ? 'text-gray-300 w-8 h-8' : 'cursor-pointer hover:text-theme w-8 h-8'}`} />
      </p>}
      
      <p className="text-[24px]">Page {page}..</p>
      {listDatas?.next && <p className="cursor-pointer" onClick={handleNext}>
        <IoIosArrowDropright className={`${disabled == 'right' ? 'text-gray-300 w-8 h-8' : 'cursor-pointer hover:text-theme w-8 h-8'}`} />
      </p>}
      
    </div>
  );
};

export default Pagination;
