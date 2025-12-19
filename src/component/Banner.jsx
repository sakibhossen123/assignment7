import React from "react";
import banImg1 from "../assets/vector1.png";
// import banImg2 from './assets/vector2.png'

const Banner = ({ InProgress, Resolved }) => {
  return (
    <div className="max-w-[1000px] mx-auto flex gap-2.5 my-8 px-4">
      <div className="flex justify-between items-center w-1/2 h-fit bg-gradient-to-r from-[#632ee3] to-[#9f62f2] rounded-md text-center">
        <img className="h-fit w-1/3" src={banImg1} alt="" />

        <div className="w-1/3">
          <p>In-Progress</p>
          <h1 className="text-3xl font-bold">{InProgress}</h1>
        </div>

        <img className=" h-fit w-1/3 rotate-y-180" src={banImg1} alt="" />
      </div>
      <div className="w-1/2 flex justify-between items-center bg-gradient-to-r from-[#54cf67] to-[#00827a] rounded-md text-center">
        <img className="h-fit w-1/3" src={banImg1} alt="" />

        <div className="w-1/3">
          <p>Resolved</p>
          <h1 className="text-3xl font-bold">{Resolved}</h1>
        </div>
        <img className=" h-fit w-1/3 rotate-y-180" src={banImg1} alt="" />
      </div>
    </div>
  );
};

export default Banner;
