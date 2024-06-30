import { CircularProgress } from "@mui/material";
import React from "react";
import classNames from "classnames";

const ButtonPage = ({
  text,
  isLoading,
  isDisabled,
  rightIcon,
  leftIcon,
  type,
  onClick,
  flex,
}) => {
  const buttonClass = classNames(
    "rounded-lg text-white text-sm font-semibold cursor-pointer transition-all duration-300 ease-in-out flex items-center justify-center gap-1.5 min-h-min py-2.5 px-6",
    {
      "bg-blue-500": type === "secondary",
      "bg-purple-600": type !== "secondary",
      "opacity-40 cursor-not-allowed": isDisabled,
      "opacity-80 cursor-not-allowed": isLoading,
      "flex-1": flex,
      "sm:py-2 sm:px-3": true,
    }
  );

  return (
    <div onClick={() => !isDisabled && !isLoading && onClick()} className={buttonClass}>
      {isLoading && (
        <CircularProgress
          style={{ width: "18px", height: "18px", color: "inherit" }}
        />
      )}
      {leftIcon}
      {text}
      {isLoading && <> . . .</>}
      {rightIcon}
    </div>
  );
};

export default ButtonPage;
