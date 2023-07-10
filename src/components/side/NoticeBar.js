import React from "react";
import "./sBarStyle.css";

const NoticeBar = () => {
  return (
    <>
      {/* <div className="w-[394px]">X</div>
      <div>fdgh</div> */}
      <div className="h-[394px] border shadow-[0px_1px_1px_0px_rgba(0,0,0,0.25)] rounded-[20px_0px_0px_20px] fixed overflow-auto flex" id="nBar">
        <div className="bg-black w-[50px] text-white ">
          <div className=" flex">
            <p className="fa-reguler fa-2x fa-x mx-auto my-4"></p>
          </div>
          <p className="font-normal text-white mx-auto" id="noticeHead">
            Notice Board
          </p>
        </div>
        <div className="bg-white w-[500px] "></div>
      </div>
    </>
  );
};

export default NoticeBar;
