import React, { useState } from "react";
import VideoContent from "../components/VideoContent";
import VideoHeader from "../components/VideoHeader";
import VideoSideBar from "../components/VideoSideBar";

export default function SectionVideos() {
  const [filters, setFilters] = useState({});

  return (
    <div className="flex w-full duration-200 transition-all font-serif overflow-hidden h-screen bg-red-500">
      <VideoSideBar setFilters={setFilters} />
      <div className="flex flex-col w-full">
        <VideoHeader />
        <VideoContent filters={filters} />
      </div>
    </div>
  );
}
