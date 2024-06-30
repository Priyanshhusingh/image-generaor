import React from "react";
import Home from "./pages/Home";
import CratePost from "./pages/CratePost";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="w-full h-full flex overflow-x-hidden overflow-y-hidden transition delay-200 ease">
      <div className="h-full w-full relative flex flex-col justify-between flex-3">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/crate-post" element={<CratePost />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
