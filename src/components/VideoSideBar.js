import React, { useState } from "react";
import logo from "../assets/logo.png";

export default function VideoSideBar({ setFilters }) {
  const [approval, setApproval] = useState("Tümü");
  const [classNumber, setClassNumber] = useState("Tümü");
  const [section, setSection] = useState("Tümü");

  return (
    <div className="w-[20%] md:flex min-w-[300px] items-center  hidden h-screen bg-[#1B2E63] flex-col">
      <img src={logo} alt="logo" />

      <p className="text-white text-2xl">Filtreler</p>
      <hr className="border-white mt-4 w-full" />

      <div className="flex items-stretch w-[80%] mt-4  text-lg text-white flex-col">
        <label>Onay Durumu</label>
        <select
          className=" border-black outline-none text-black  ring-0 rounded-lg "
          onChange={(e) => {
            e.preventDefault();
            setApproval(e.target.value);
          }}
          value={approval}
        >
          <option>Tümü</option>
          <option>Onaylanmış</option>
          <option>Onay Bekliyor</option>
        </select>
        <label className="mt-4 mb-1">Sınıf</label>
        <select
          className=" border-black outline-none text-black  ring-0 rounded-lg "
          onChange={(e) => {
            e.preventDefault();
            setClassNumber(e.target.value);
          }}
          value={classNumber}
        >
          <option>Tümü</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <label className="mt-4 mb-1">Şube</label>
        <select
          className=" border-black outline-none text-black  ring-0 rounded-lg "
          onChange={(e) => {
            e.preventDefault();
            setSection(e.target.value);
          }}
          value={section}
        >
          <option>Tümü</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>

        <button
          className="px-4 mt-4 py-2 rounded-lg bg-[#558287] "
          onClick={(e) => {
            e.preventDefault();
            setFilters({
              approval,
              section,
              classNumber,
            });
          }}
        >
          Uygula
        </button>
      </div>
    </div>
  );
}
