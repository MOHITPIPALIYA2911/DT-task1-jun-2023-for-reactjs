import React from "react";
import logo from "../../img/logoImg.png";
import home from "../../img/homeImg.png";
import setting from "../../img/settingImg.png";
import dp from "../../img/dpImg.png";
import notif from "../../img/notiImg.png";
import dots from "../../img/dotsImg.png";

const HeaderComp = () => {
  return (
    <div className="bg-[#F0F0F0] flex justify-between px-16 h-[80px] shadow-lg sticky top-0 select-none">
      <div className="flex ">
        <img src={logo} alt="Deep Thought" className="w-[270px] h-[43px] my-auto" />
      </div>
      <div className="flex ">
        <img src={home} alt="" className="w-[30px] h-[32px] mx-2 my-auto" />
        <img src={setting} alt="" className="w-[30px] h-[32px] mx-2 my-auto" />
        <img src={notif} alt="" className="w-[30px] h-[32px] mx-2 my-auto" />
        <img src={dp} alt="" className="w-[30px] h-[32px] mx-2 my-auto" />
        <img src={dots} alt="" className=" h-[28px] mx-4 my-auto" />
      </div>
    </div>
  );
};

export default HeaderComp;
