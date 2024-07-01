import { CircularProgress } from "@mui/material";
import React from "react";

function GeneratedImage({ src, loading }) {
  return (
    <div className=" flex flex-1 gap-[16px] p-[16px] border border-dashed border-[#ffcc00] text-[#AFAFB5] rounded-[20px] justify-center items-center w-full min-h-80">
      {loading ? (
        <>
          <CircularProgress
            style={{
              color: "inherit",
              width: "24px",
              height: "24px",
            }}
          />{" "}
          <span className="text-gray-600 text-sm"> Generating Your Image</span>{" "}
        </>
      ) : (
        <>
          {src ? (
            <div className=" w-full h-full  object-cover rounded-2xl bg-black"></div>
          ) : (
            <span className="text-gray-600 text-sm w-full">Write a prompt</span>
          )}
        </>
      )}
      <div className=" w-full h-full  object-cover rounded-2xl bg-black"></div>
    </div>
  );
}

export default GeneratedImage;
