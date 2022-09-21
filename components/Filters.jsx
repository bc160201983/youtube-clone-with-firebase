import React from "react";
import { BiTv } from "react-icons/bi";

const data = [
  "all",
  "live",
  "cricket",
  "samaa tv",
  "pakistani dramas",
  "game shows",
  "dramedy",
  "tourist destinations",
  "science",
  "recently uploaded",
  "watched",
];

const Filters = () => {
  return (
    <div className="border-y  border-[#303030] text-white text-[14px] leading-5 whitespace-nowrap bg-[#212121] top-[56px] w-[calc(100%-224px)] right-0 h-[56px] fixed flex justify-center items-center">
      <ul className="flex justify-center items-center gap-4 ">
        {data.map((d) => (
          <li className="min-w-[12px] cursor-pointer  border border-[#616060]  px-3 h-8 rounded-full bg-[#313131] hover:bg-[#4d4d4d] hover:transition-all capitalize flex justify-center items-center">
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
