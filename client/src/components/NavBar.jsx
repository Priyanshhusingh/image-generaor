import React from "react";
import ButtonPage from "./button/Button";
import { AddRounded, ExploreRounded } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");

  return (
    <div className="bg-[#1C1E27] text-[#F2F3F4] font-bold text-[22px] p-[15px] flex justify-between items-center ">
      GenAI
      {path[1] === "create-post" ? (
        <ButtonPage
        onClick={() => navigate("/")}
        text="Explore Posts"
        leftIcon={
          <ExploreRounded
            style={{
              fontSize: 18,
            }}
          />
          
        }
        type="secondary"
      />
      ) : (
        <ButtonPage
          onClick={() => navigate("create-post")}
          text="Create new post"
          leftIcon={
            <AddRounded
              style={{
                fontSize: 18,
              }}
            />
          }
        />
      )}{" "}
    </div>
  );
}

export default NavBar;
