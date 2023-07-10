import React from "react";
import info from "../../img/info.png";
import "./style.css";
const ContainerComp = (props) => {
  const { head, desc, children } = props;
  return (
    <div className=" rounded border rounded-[15px] my-8 shadow-[1px_1px_4px_2px_rgba(0,0,0,0.25)] float-left my-auto">
      <div className="h-[50px]  bg-black rounded-[15px_15px_0px_0px] text-white text-center flex  justify-between  ">
        <p className=" my-auto ml-28">{head} </p>
        <img className="h-[22px] right-0 my-auto mr-5" src={info} alt="i" id="info" />
      </div>
      <div className=" m-4">
        <b>Description : </b>
        {desc}
      </div>
      <hr className="shadow-[0px_1px_1px_0px_rgba(0,0,0,0.25)]" />
      <div className=" m-4 my-32">{children}</div>
    </div>
  );
};

export default ContainerComp;
