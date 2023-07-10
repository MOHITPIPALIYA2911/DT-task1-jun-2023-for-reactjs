import React from "react";
import StructPoint from "./StructPoint";
import TechManage from "./TechManage";
import Threadbuild from "./Threadbuild";
import FourSA from "./FourSA";
import Alert from "./Alert";

const MiddleMaster = () => {
  return (
    <div className="mx-10 ">
      <div className="my-5 text-[#0029FF] text-3xl font-bold popi">Technical Project Management</div>
      <Alert />
      {/* apologize massage */}
      <p className="text-center p-5 text-red-500 text-[20px] bg-[#ffcccb] border border-red-500">I had to pause my assignment as I had an upcoming exam scheduled for July 15th.</p>
      <div className="grid grid-cols-2 gap-8">
        <TechManage />
        <Threadbuild />
        <StructPoint />
        <FourSA />
      </div>
    </div>
  );
};

export default MiddleMaster;
