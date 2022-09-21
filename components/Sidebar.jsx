import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import {
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
} from "react-icons/md";

import { FiMusic } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="w-[224px] h-screen bg-[#212121] text-white text-[14px] top-[56px] fixed left-0">
      <div className="menu leading-6 whitespace-nowrap py-3">
        <ul className="w-[215px]">
          <li className="btn-primary">
            <AiFillHome className="icon-sidebar" />
            <span className="">Home</span>
          </li>
          <li className="btn-primary">
            <MdOutlineExplore className="icon-sidebar" />
            <span>Explore</span>
          </li>
          <li className="btn-primary">
            <img
              src="/youtube-shorts-logo-15253.svg"
              alt=""
              className="icon-sidebar"
            />
            <span>Shots</span>
          </li>
          <li className="btn-primary">
            <MdOutlineSubscriptions className="icon-sidebar" />
            <span>Subscriptions</span>
          </li>
        </ul>
      </div>
      <div className="history leading-6 whitespace-nowrap">
        <ul className="w-[215px] border-y border-[#303030] py-3">
          <li className="btn-primary">
            <MdOutlineVideoLibrary className="icon-sidebar" />
            <span>Library</span>
          </li>
          <li className="btn-primary">
            <MdHistory className="icon-sidebar" />
            <span>History</span>
          </li>
        </ul>
      </div>
      <div className="signIn leading-6 w-[215px] py-4 px-8 border-b border-[#303030]">
        <div className="text-[14px] leading-5 w-[176px] mb-3">
          Sign in to like videos, comment and subscribe.
        </div>
        <div className="avatar w-[100px] py-2 hover:transition-all flex justify-center items-center gap-2 text-blue-400 cursor-pointer hover:bg-blue-400 hover:bg-opacity-20 rounded-full border border-[#303030]">
          <div className="user">
            <FaRegUserCircle className="w-5 h-5" />
          </div>
          <span className="text-[16px] font-normal">Sign in</span>
        </div>
      </div>

      {/* explore */}
      <div className="menu leading-6 whitespace-nowrap py-3">
        <div className="heading w-[215px] font-medium text-[14px] uppercase py-2 px-6 text-[#AAAAAA]">
          Explore
        </div>
        <ul className="w-[215px]">
          <li className="btn-primary">
            <img
              src="https://yt3.ggpht.com/JNgxxfXiv7FOGATI1K66Hc-nDCceCaK40nxJTUUfP88ZR-ObwW_goUcUOStk-6IkSG6Fs70ZoQ=s88-c-k-c0x00ffffff-no-rj"
              className="w-6 h-6 rounded-full mr-[24px] max-w-full"
              alt=""
            />
            <span className="">Music</span>
          </li>
          <li className="btn-primary">
            <img
              src="https://yt3.ggpht.com/yAJmA-suCCQagXjr2Z0hF8DJZATYD0p_EljGBIvM1Rs6_-UW7qnAEYBeZ1ncq9O4eRzF6ZGYEb8=s88-c-k-c0x00ffffff-no-rj"
              className="w-6 h-6 rounded-full mr-[24px] max-w-full"
              alt=""
            />
            <span>Sports</span>
          </li>
          <li className="btn-primary">
            <img
              src="https://yt3.ggpht.com/f52q7juPLLEYoLa-hDZ14HMYZXYZUyUFlV8Z-kxktUQsX3yjVwUBxG-Y1RCFfAOyqf50Qf1bmW0=s88-c-k-c0x00ffffff-no-rj"
              className="w-6 h-6 rounded-full mr-[24px] max-w-full"
              alt=""
            />
            <span>Gaming</span>
          </li>
          <li className="btn-primary">
            <img
              src="https://yt3.ggpht.com/yyvnDCUp8n75OCqe-StBsJ7Ustb_ltwMFlbfhis59WXChvUpjToQeV3PmY7G7QftRZyaweJxKks=s88-c-k-c0x00ffffff-no-rj"
              className="w-6 h-6 rounded-full mr-[24px] max-w-full"
              alt=""
            />
            <span>News</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
