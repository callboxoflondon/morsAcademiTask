import axios from "axios";
import React, { useEffect, useState } from "react";

import VideoCard from "./VideoCard";

export default function VideoContent({ filters }) {
  const [videos, setVideos] = useState([]);
  const [fullVideos, setFullVideos] = useState([]);
  const [videoURL, setVideoURL] = useState("");
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    axios({
      url: "http://localhost:8000/get",
      method: "post",
      headers: { "Access-Control-Allow-Origin": "*" },
      data: {},
    }).then((data) => {
      if (data.status == 200) {
        setVideos(
          data.data.sort((a, b) => {
            return parseFloat(b.createdAt) - parseFloat(a.createdAt);
          })
        );
        setFullVideos(
          data.data.sort((a, b) => {
            return parseFloat(b.createdAt) - parseFloat(a.createdAt);
          })
        );
      } else {
        alert(
          "Data getirilirken bir sorun oluştu. Portları ve serveri kontrol edin"
        );
      }
    });
  }, []);

  useEffect(() => {
    console.log("aaa");
    if (Object.keys(filters).length > 0) {
      let tempArray = fullVideos;

      setVideos(
        tempArray.filter((obj) => {
          return (
            (filters.approval !== "Tümü"
              ? obj.confirmation === (filters.approval === "Onaylanmış")
              : true) &&
            (filters.classNumber !== "Tümü"
              ? obj.users.class == filters.classNumber
              : true) &&
            (filters.section !== "Tümü"
              ? obj.users.section == filters.section
              : true)
          );
        })
      );
    }
  }, [filters]);

  return (
    <div className="w-full h-full bg-[#eaeaea]    overflow-y-auto overflow-hidden ">
      <div
        className={
          "absolute bg-black bg-opacity-50 flex items-center w-screen inset-0 h-screen scale-0 z-50 transition-all duration-300 justify-center " +
          (videoURL ? "scale-100" : null)
        }
      >
        <div className={"w-full sm:w-[70%] aspect-video  relative "}>
          <button
            className="absolute top-0 right-2 z-50  text-[#ef4b4b] ring-0 outline-none  active:scale-[0.98]   text-6xl"
            onClick={(e) => {
              e.preventDefault();
              setVideoURL("");
            }}
          >
            <i className="fa-solid fa-rectangle-xmark"></i>
          </button>
          <video src={videoURL} className="w-full h-full" controls />
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-evenly  ">
        {videos.map((item, index) => (
          <VideoCard
            key={index}
            text={"Deneme"}
            image={item.users.imageURL}
            videoName={item.videoName}
            confirmation={item.confirmation}
            username={item.users.username}
            time={item.createdAt}
            erase={(e) => {
              e.preventDefault();

              axios({
                url: "http://localhost:8000/delete",
                method: "post",
                headers: { "Access-Control-Allow-Origin": "*" },
                data: { id: item._id },
              }).then((data) => {
                if (data.status == 200) {
                  let tempArray = videos;
                  tempArray = tempArray.filter((obj) => obj._id !== item._id);

                  setVideos(tempArray);
                  setFlag(!flag);
                } else {
                  alert("Bir hata oluştu daha sonra tekrar deneyin");
                }
              });
            }}
            update={(e) => {
              e.preventDefault();
              if (!item.confirmation) {
                axios({
                  url: "http://localhost:8000/update",
                  method: "post",
                  headers: { "Access-Control-Allow-Origin": "*" },
                  data: { id: item._id },
                }).then((data) => {
                  if (data.status == 200) {
                    let tempArray = videos;

                    let objIndex = tempArray.findIndex(
                      (obj) => obj._id === item._id
                    );

                    tempArray[objIndex].confirmation = true;

                    setVideos(tempArray);
                    setFlag(!flag);
                  } else {
                    alert("Bir hata oluştu daha sonra tekrar deneyin");
                  }
                });
              }
            }}
            setVideo={(e) => {
              e.preventDefault();
              setVideoURL(item.videoURL);
              axios({
                url: "http://localhost:8000/watch",
                method: "post",
                headers: { "Access-Control-Allow-Origin": "*" },
                data: { id: item._id },
              }).then((data) => {
                if (!data.status == 200) {
                  alert("log yazılırken hata oluştu");
                }
              });
            }}
          />
        ))}
      </div>
    </div>
  );
}
