import React from "react";
import ButtonPage from "./button/Button";
import TextInput from "./Input/TextInput";
import { AutoAwesome, CreateRounded } from "@mui/icons-material";

function GenerateImageForm() {
  return (
    <div className="flex-1 px-[16px] py-[20px] flex flex-col gap-[9%] justify-center">
      <div className="flex flex-col gap-[6px]">
        <h1 className="text-[28px] font-medium text-[#F2F3F4]">
          Genrate Image With prompt
        </h1>
        <p className="text-[17px] font-medium text-[#b1b2b3] ">
          Write Your Prompt accorfing to image you want
        </p>
      </div>
      <div className="flex flex-col gap-[18px] text-[12px] font-normal text-[#F2F3F4] mb-4">
        <TextInput 
        label="Author" placeholder="Enter Your name..." name="name"
        />
        <TextInput 
        label="Image Prompt" placeholder="Enter Your Prompt that you want to generate..."
        rows="8"
        textArea
        />
      </div>
      <div className="flex-1 flex gap-[8px]">
        <ButtonPage text="Generate Image" flex leftIcon={<AutoAwesome />} type="secondary"/>
        <ButtonPage text="Post Image" flex leftIcon={<CreateRounded />}/>
      </div>
    </div>
  );
}

export default GenerateImageForm;
