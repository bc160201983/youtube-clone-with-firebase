import React from "react";
import { BsDot } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
const VideoGrid = () => {
  return (
    <>
      <div className="featureVideos max-w-[1504px] mx-4">
        <div className="video cursor-pointer w-[360px] mb-5">
          <img
            src="https://i.ytimg.com/vi/MLS_Nof_54w/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDu-kAfJIHf_mJWBLhpvHTGBm6qPg"
            alt=""
            className="max-w-full h-[202px]"
          />
          <div className="details flex mt-3 gap-2 w-full">
            <div className="avatar w-[45px] h-full  mt-3">
              <img
                src="https://yt3.ggpht.com/ytc/AMLnZu8kwx8fpW61fxqziDlJRLl2CEOPGFjxuPB-EU0_=s68-c-k-c0x00ffffff-no-rj"
                alt=""
                className="rounded-full w-[36px] h-[36px]"
              />
            </div>
            <div className="flex flex-col h-[100px] mt-3 w-full space-y-2">
              <div className="overflow-hidden title text-[16px] font-medium text-white leading-5">
                Full Highlights | Pakistan vs England | 1st T20I 2022 | PCB |
                MU2L
              </div>
              <div className="channel text-[14px] text-[#AAAAAA] flex items-center gap-2">
                <span> Sports Centrals</span> <MdVerified />
              </div>
              <div className="time-views text-[14px] text-[#AAAAAA] flex items-center">
                <div className="time">1,524,550 views</div>
                <BsDot />
                <div className="time">21 Sept 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoGrid;
