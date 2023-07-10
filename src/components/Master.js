import React from "react";
import HeaderComp from "./head/HeaderComp";
import Sidebar from "./side/Sidebar";
import MiddleMaster from "./middle/MiddleMaster";
import NoticeBar from "./side/NoticeBar";

const Master = () => {
  return (
    <div>
      <HeaderComp />
      <div className="flex px-28">
        <div className="h-full">
          <Sidebar />
          <NoticeBar />
        </div>
        <MiddleMaster />
      </div>
    </div>
  );
};

export default Master;
