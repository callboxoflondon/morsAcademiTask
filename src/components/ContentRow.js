import React from "react";
import caricature from "../assets/contents/caricature.svg";
import drawing from "../assets/contents/drawing.svg";
import essay from "../assets/contents/essay.svg";
import video from "../assets/contents/video.svg";
import ContentCard from "./ContentCard";
import { useNavigate } from "react-router-dom";

export default function ContentRow() {
  const navigate = useNavigate();

  return (
    <div className="flex  flex-wrap w-full justify-evenly px-4 sm:w-[80%]">
      <ContentCard
        image={drawing}
        text={"Resim"}
        onClick={(e) => {
          e.preventDefault();
        }}
      />
      <ContentCard
        image={video}
        text={"Video"}
        onClick={(e) => {
          e.preventDefault();
          navigate("/videos");
        }}
      />
      <ContentCard
        image={essay}
        text={"Kompozisyon"}
        onClick={(e) => {
          e.preventDefault();
        }}
      />
      <ContentCard
        image={caricature}
        text={"Karikatür"}
        onClick={(e) => {
          e.preventDefault();
        }}
      />
    </div>
  );
}
