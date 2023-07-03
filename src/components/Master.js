import React from "react";
import HeaderComp from "./head/HeaderComp";
import Sidebar from "./side/Sidebar";
import MiddleMaster from "./middle/MiddleMaster";

const Master = () => {
  return (
    <div>
      <HeaderComp />
      <Sidebar />
      <MiddleMaster />
    </div>
  );
};

export default Master;
