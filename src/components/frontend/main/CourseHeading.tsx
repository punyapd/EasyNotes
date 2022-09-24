import { Spinner } from "@react-pdf-viewer/core";
import React, { useEffect, useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

type Props = {
  categoryListData: any;
  setCategoryID: any;
  limit:any;
  setLimit:any;
  headingOffset:any;
  setHeadingOffset:any;
  page:any;
  setPage:any;
  offset:any;
  setOffset:any;
};
const CourseHeading = (props: Props) => {
  const [isActive, setIsActive] = useState(10000);
  const [isNoteActive, setIsNoteActive] = useState(true);
  const [disabled, setDisabled] = useState('left')

  const { categoryListData, setCategoryID,  headingOffset, setHeadingOffset, page, setPage, offset, setOffset} = props;

  console.log('categorylistDatat', categoryListData)

  const handleCategory = (itemID: any, index: any) => {
    setCategoryID(itemID);
    setIsActive(index);
    setIsNoteActive(false);
    setActiveLink(itemID);
    setPage(1)
    setOffset(0)
    
  };
  const handleAllCategory = () => {
    setCategoryID(null);
    setActiveLink(1000);
    setPage(1)
    setOffset(0)
  };

  const handlePrev = () =>{
    if (headingOffset >0){
    setHeadingOffset(headingOffset-1)
    }
}

useEffect(()=>{
 
  if(headingOffset >= categoryListData?.count ){

    setDisabled('right')
  }
  else{
    setDisabled('')
  }

})


const handleNext = () =>{
    setHeadingOffset(headingOffset+1)
    
  
}

useEffect(()=>{
  if (headingOffset == 0){
    setDisabled('left')
  }
 
})

  const [activeLink, setActiveLink] = useState(1000);
  return (
    <div className="flex flex-col items-center space-y-4 lg:space-y-5 xl:space-y-6 mb-10 mt-10 xl:mt-24 m-3 text-[#37474F]">
      <h2 className="text-2xl sm:text-3xl lg:text-heading  font-bold font-Jost text-center ">
        Choose Your Course Below
      </h2>
      <div className="mx-10 sm:mx-24 md:mx-16 lg:mx-20 xl:mx-52">
        <p className="text-center text-sm sm:px-14 lg:px-36 xl:px-48 font-medium  font-Inter leading-normal text text-[#37474F] md:text-base">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className= "flex items-center justify-center gap-5">
        <div onClick={handlePrev} ><IoIosArrowDropleft className={`${disabled == 'left' ? 'text-gray-100 w-8 h-8' : 'cursor-pointer text-theme w-8 h-8'}`}/></div>
        <div>
          <button
            className={`${
              activeLink === 1000
                ? "bg-theme border-[1px] border-theme w-[145px] h-45px hidden md:block btn-text hover:bg-theme text-white rounded-md p-2"
                : "bg-transparent border-[1px] border-theme w-[145px] h-45px hidden md:block btn-text hover:bg-theme hover:text-white rounded-md p-2"
            }`}
            onClick={() => handleAllCategory()}
          >
            All
          </button>
        </div>
        {/* {Array.isArray(categoryListData)
          ?  */}
          {
          categoryListData?.results?.map((item: any, index: any) => (
              <div key={index}>
                <button
                  className={`${
                    activeLink == item?.id
                      ? "bg-theme border-[1px] border-theme w-[145px] h-45px hidden md:block btn-text hover:bg-theme text-white rounded-md p-2"
                      : "bg-transparent border-[1px] border-theme w-[145px] h-45px hidden md:block btn-text hover:bg-theme hover:text-white rounded-md p-2"
                  }`}
                  onClick={() => handleCategory(item?.id, index)}
                >
                  {item?.name}
                </button>
              </div>
            ))
                }
         
        <div onClick={handleNext}><IoIosArrowDropright className={`${disabled == 'right' ? 'text-gray-100 w-8 h-8' : 'cursor-pointer text-theme w-8 h-8'}`} /></div>
      </div>
    </div>
  );
};
export default CourseHeading;
