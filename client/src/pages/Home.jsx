import React from "react";
import SearchBar from "../components/SearchBar";
import ImageCard from "../components/ImageCard";

function Home() {
  const item = {
    photo:
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/c3aada50-1221-43a8-a027-2c191919b16a.__CR0,130,1920,820_PT0_SX1464_V1___.jpg",
    author: "Priyanshu",
    prompt: "Beautiful Mounrain",
  };
  return (
    <div className="h-full overflow-y-scroll px-[30px] py-[30px] pb-[50px] flex flex-col items-center gap-[20px] bg-[#15171E]">
      <div className="text-[34px] font-[500] text-[#F2F3F4] flex items-center flex-col sm:text-[28px]">
        Explore popular posts in the community!
        <span className="text-[30px] font-[500] text-[#9747FF] flex items-center flex-col sm:text-[28px]">
          Generated with AI
        </span>
      </div>
      <SearchBar />
      <div className="w-full max-w-[1400px] px-[32px] py-0 flex justify-center">
        <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ImageCard item={item} />
        </div>
      </div>
    </div>
  );
}

export default Home;
