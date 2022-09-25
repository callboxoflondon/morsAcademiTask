import React from "react";
import ContentRow from "../components/ContentRow";

export default function Home() {
  return (
    <div className=" items-center px-2 flex pt-[15vh] flex-col font-serif w-screen h-screen bg-[#eaeaea]  overflow-hidden">
      <p className="text-3xl mb-24 font-bold text-[#558287] text-center clip">
        İncelemek istediğiniz içerik başlığını seçin.
      </p>
      <ContentRow />
    </div>
  );
}
