import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import { useRouter } from "next/router";

type Props = {
  userData: any;
};

const DashboardNavbar = (props: Props) => {
  const { userData } = props;
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const handleSearchChange = (event: any) => {
    setSearchKeyword(event.target.value);
  };

    const tokenString:any = sessionStorage.getItem('user_info')
    const userToken = JSON.parse(tokenString);
  

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      userToken.is_note_student && router.push(`/ReaderDashboard/NoteSearch/${searchKeyword}`);

      userToken.is_note_teacher && router.push(`/AuthorDashboard/NoteSearch/${searchKeyword}`);

      userToken.is_superuser && router.push(`/Dashboard/NoteSearch/${searchKeyword}`);
      
      setSearchKeyword("");
    }
  };

  return (
    <div className="bg-white px-6 py-4 flex justify-between w-full rounded-md placeholder-Header text-lg z-1 relative">
      
            
      <div className="flex ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search Notes"
          style={{ width: "100%", outline:'none' }}
          value={searchKeyword}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div>
        <Profile userData={userData} />
      </div>
    </div>
  );
};
export default DashboardNavbar;
