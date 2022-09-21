import React from "react";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardVoice } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import Filters from "./Filters";

const Navbar = () => {
  return (
    <div className="fixed w-full opacity-1 top-0 flex justify-between h-[56px] px-4 bg-[#212121] text-white items-center">
      <div className="log flex items-center flex-1">
        <div className="menu cursor-pointer w-10 h-10 hover:transition-all hover:bg-[#313131] rounded-full flex justify-center items-center">
          <AiOutlineMenu className="w-[24px] h-[24px]" />
        </div>
        <div className="py-[18px] pr-[14px] pl-[16px]">
          <img
            src="/YouTube.svg"
            alt=""
            className="w-[90px] h-[20px] cursor-pointer"
          />
        </div>
      </div>
      <div className="search relative flex-1 h-[42px] border border-[#303030] bg-[#121212] py-[2px] px-[6px]">
        <input
          type="text"
          placeholder="Search"
          className="h-full w-full  outline-none bg-inherit"
        />
        <div className="icon absolute h-full w-[64px] bg-[#313131] right-0 top-0 flex justify-center items-center cursor-pointer">
          <AiOutlineSearch className="h-[24px] w-[24px]" />
        </div>
      </div>
      <div className="flex justify-between items-center flex-1">
        <div className="voice hover:transition-all rounded-full cursor-pointer hover:bg-[#313131] bg-[#121212] w-10 h-10 flex justify-center items-center ml-[10px]">
          <MdKeyboardVoice className="w-6 h-6" />
        </div>
        <div className="signUp flex justify-center items-center gap-4">
          <div className="iconBar hover:transition-all w-10 h-10 hover:bg-[#313131] flex justify-center items-center rounded-full cursor-pointer">
            <BiDotsVerticalRounded className="w-6 h-6" />
          </div>
          <div className="avatar hover:transition-all flex justify-center items-center gap-2 text-blue-400 cursor-pointer hover:bg-blue-400 hover:bg-opacity-20 px-4 py-2 rounded-full border border-[#303030]">
            <div className="user">
              <FaRegUserCircle className="w-5 h-5" />
            </div>
            <span className="text-[16px] font-normal">Sign in</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
