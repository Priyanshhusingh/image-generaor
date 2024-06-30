import { DownloadRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FileSaver from "file-saver";

function ImageCard({ item }) {
  return (
    <div className="relative flex rounded-2xl  shadow-3xl cursor-pointer transition-all hover:shadow-2xl hover:scale-110 ">
      <LazyLoadImage width="100%" src={item?.photo} />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-start gap-[2px] backdrop-blur-sm bg-[rgba(0,0,0,0.5)] text-white transition-opacity opacity-0 hover:opacity-100 rounded-[6px] justify-end p-[12px]">
        <div className="font-normal text-white text-[15px]">{item?.Prompt}</div>
        <div className="flex w-full items-center justify-between">
          <div className="font-bold text-white text-[14px] flex gap-[8px] items-center">
            <Avatar sx={{ width: "32px", height: "32px" }}>
              {item?.author}
            </Avatar>
            {item?.author}
          </div>
          <DownloadRounded
            onClick={() => FileSaver.saveAs(item?.photo, "download.jpg")}
          />
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
