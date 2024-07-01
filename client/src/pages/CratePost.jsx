import React, { useState } from "react";
import GenerateImageForm from "../components/GenerateImageForm";
import GeneratedImage from "../components/GeneratedImage";

function CratePost() {
  const [generateImageLoading, setGenerateImageLoading] = useState(true);
  const [postLoading, setPostLoading] = useState(false);
  const [posts, setPosts] = useState({
    author: "",
    prompt: "",
    photo: "",
  });
  return (
    <div className="h-full overflow-y-scroll px-[30px] py-[30px] pb-[50px] flex flex-col items-center gap-[20px] bg-[#15171E]">
      <div className="text-[34px] font-[500] text-[#F2F3F4] flex items-center flex-col sm:text-[28px] h-fit">
        <GenerateImageForm />
        <GeneratedImage src={posts?.photo} loading={generateImageLoading} />
      </div>
    </div>
  );
}

export default CratePost;
