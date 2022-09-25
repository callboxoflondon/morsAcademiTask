import React, { useState } from "react";
import axios from "axios";

export default function VideoCard({
  erase,
  image,
  username,
  setVideo,
  videoName,
  time,
  confirmation,
  update,
}) {
  const timeDifference = () => {
    const now = Date.now();
    const oldDate = new Date(parseInt(time, 10));
    const difference = now - oldDate;

    if (difference < 60000) {
      return `${Math.floor(difference / 1000)} sn önce`;
    } else if (difference < 60000 * 60) {
      return `${Math.floor(difference / 60000)} dk önce`;
    } else if (difference < 60000 * 60 * 24) {
      return `${Math.floor(difference / (60000 * 60))} s önce`;
    } else if (difference < 60000 * 60 * 24 * 7) {
      return `${Math.floor(difference / (60000 * 60 * 24))} g önce`;
    } else if (difference < 60000 * 60 * 24 * 7 * 4) {
      return `${Math.floor(difference / (60000 * 60 * 24 * 7))} h önce`;
    } else if (difference < 60000 * 60 * 24 * 7 * 52) {
      return `${Math.floor(difference / (60000 * 60 * 24 * 30))} ay önce`;
    }
  };

  return (
    <div
      className={
        " transition-all duration-150 w-[20%] min-w-[250px] max-w-[300px]  aspect-square  rounded-b-3xl m-4  shadow-2xl flex flex-col  items-center   bg-[#FAFAFA] "
      }
    >
      <div className="w-full aspect-[5] relative   bg-[#558287]">
        <img
          src={image}
          alt={username + "-image"}
          className={
            "w-[30%] -bottom-[65%] border-4 border-[#88C5CC]  transition-all absolute left-1/2 -translate-x-1/2 duration-200  aspect-square select-none rounded-full "
          }
        />
      </div>
      <div className="pt-[13%] pb-4 flex flex-grow  justify-between flex-col items-center text-center w-full">
        <div>
          <p className="text-lg  font-black">{username}</p>
          <span className="text-base text-[#5e5e5e]">{videoName}</span>
        </div>
        <div className="flex flex-col items-stretch">
          <span className="text-sm text-[#5e5e5e]  ">{timeDifference()}</span>
          <div
            className={
              "py-1 px-2 mb-1 mt-1 text-center text-sm  rounded-lg " +
              (confirmation ? "bg-[#558287] text-white" : "bg-[#c7c7c7]")
            }
          >
            {confirmation ? "Onaylanmış" : "Onay Bekliyor"}
          </div>
          <div className="flex justify-center ">
            <button
              className="px-2 py-1 ring-0 outline-none hover:scale-[0.96]  rounded-md text-white text-xl bg-[#af2c2c]"
              onClick={erase}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
            <button
              className="px-2 py-1 ring-0 outline-none hover:scale-[0.96] ml-2 mr-2 rounded-md text-white text-xl bg-[#1f7853]"
              onClick={update}
            >
              <i className="fa-solid fa-check"></i>
            </button>
            <button
              className="px-2 py-1 ring-0 outline-none hover:scale-[0.96] rounded-md text-white text-xl bg-[#2d1d85]"
              onClick={setVideo}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
