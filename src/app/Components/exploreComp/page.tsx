import React from "react";
import { IoIosEye } from "react-icons/io";
import { FaCodeBranch } from "react-icons/fa6";

interface CardProps {
  title: string;
  technologies: string;
  description: string;
}

function ExploreCard({ title, technologies, description }: CardProps) {
  return (
    <div className=" ">
      <div className="bg-gray-500/45 w-60 h-44 text-white shadow-md shadow-gray-600 rounded-xl">
        {/* CARD CONTENT */}
        <div className="flex flex-col items-left text-left pl-4 pt-3">
          <h1 className="font-extrabold text-[18px]">{title}</h1>
          <p className="text-[12px] pb-8">{technologies}</p>
          <p className="text-[14px]">{description}</p>
          <div className="flex flex-row gap-8">
            <IoIosEye />
            <FaCodeBranch />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreCard;
