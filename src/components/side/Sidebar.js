import React, { useState } from "react";
import "./sBarStyle.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [btnClick, setBtnClick] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const btnHandleToggle = () => {
    setBtnClick(!btnClick);
    console.log("btn cilck");
  };
  const opCl = {
    left: `${isOpen ? "-1px" : "-200px"}`,
  };

  return (
    <div className="h-[500px] w-[300px] border shadow-[0px_1px_1px_0px_rgba(0,0,0,0.25)] rounded-[00px_20px_20px_20px]  fixed bg-white w-64 overflow-auto" style={opCl} id="sdbar">
      <div className="bg-black h-[40px] flex sticky top-0">
        <p id="sidebarHeadTxt" className="my-auto  ml-[18px] text-white text-base text-center">
          Journey Board
        </p>
        <label htmlFor="sBar" onClick={handleToggle}>
          {!isOpen ? <i className="fa-solid fa-circle-arrow-right text-white my-[12px]" id="opn"></i> : <i className="fa-solid fa-circle-arrow-left text-white my-[12px]" id="cls"></i>}
        </label>
      </div>
      {isOpen ? (
        <div className="h-[100%] ml-2" id="sideBarContent">
          <ul className="py-4">
            <li className="font-semibold">Explore the world of management</li>
            <ul className="py-4 font-normal	">
              <li> Technical Project Management</li>
              <li> Threadbuild</li>
              <li> Structure your pointers</li>
              <li> 4SA Method</li>
            </ul>
          </ul>
        </div>
      ) : (
        <div id="sideBarNum" className={btnClick ? "m-5 h-[60px] w-[60px] border flex rounded-[20px] border-[#0029FF] bg-[#0029FF]" : "m-5 h-[60px] w-[60px] border flex rounded-[20px] border-[#0029FF]"} onClick={btnHandleToggle}>
          <p className={btnClick ? "popi text-[36px] m-auto select-none text-white" : "popi text-[36px] m-auto select-none text-[#0029FF]"}>1</p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
