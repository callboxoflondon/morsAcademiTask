import React, { useState } from "react";

export default function ContentCard({ text, image, onClick }) {
  const [hover, setHover] = useState("");

  return (
    <button
      className={
        "active:shadow-lg  active:scale-[0.98] transition-all duration-200 rounded-3xl m-4 w-[20%] max-w-[300px] min-w-[125px] shadow-2xl flex flex-col justify-around items-center  aspect-square bg-[#FAFAFA] "
      }
      onPointerEnter={() => {
        setHover("Caricature");
      }}
      onPointerLeave={() => {
        setHover("");
      }}
      onClick={onClick}
    >
      <img
        src={image}
        alt={text + "-icon"}
        className={
          "w-[50%] transition-all duration-200  aspect-square select-none rounded-full " +
          (hover === "Caricature" ? "w-[55%] border-4 border-[#558287]" : null)
        }
      />
      <p className=" text-lg font-bold">{text}</p>
    </button>
  );
}
