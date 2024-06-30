import { SearchOutlined } from "@mui/icons-material";
import React from "react";

function SearchBar() {
  return (
    <div className="max-w-[550px] flex w-[90%] border border-solid border-[#b1b2b3] rounded-[8px] px-[12px] py-[16px] cursor-pointer gap-[6px] items-center text-[#F2F3F4]">
      <SearchOutlined />
      <input className="border-none outline-none w-[100%] text-inherit bg-transparent text-[16px] sm:text-[20px]" placeholder="Search with prompt or name..."/>
    </div>
  );
}

export default SearchBar;
