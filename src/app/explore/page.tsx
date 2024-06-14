import React from "react";
import { IoIosEye } from "react-icons/io";
import { FaCodeBranch } from "react-icons/fa6";
import ExploreCard from "../Components/exploreComp/page";
import Card from "../Components/CardComp";

interface CardProps {
  title: string;
  technologies: string;
  description: string;
}

function ExplorePage({ title, technologies, description }: CardProps) {
  return (
    <main className="bg-black text-white min-h-screen pt-16 flex flex-col items-center font-[Courier]">
        <div className="border-2 border-white text-center rounded-md">
            <h1 className="p-2 ">Projects</h1>
        </div>
      <div className="flex justify-center items-center">
          <div className=" grid grid-cols-3 gap-5 pl-14 pt-11">
            <ExploreCard
              title="Pyramid Scheme"
              technologies="Reach + Nextjs + TailwindCSS"
              description="Blockchain based ponzi scheme"
            />
            <ExploreCard
              title="Another Scheme"
              technologies="React + Express + SCSS"
              description="A unique project description"
            />
            <ExploreCard
              title="Another Scheme"
              technologies="React + Express + SCSS"
              description="A unique project description"
            />
            <ExploreCard
              title="Another Scheme"
              technologies="React + Express + SCSS"
              description="A unique project description"
            />
            <ExploreCard
              title="Another Scheme"
              technologies="React + Express + SCSS"
              description="A unique project description"
            />
          </div>
      </div>
    </main>
  );
}

export default ExplorePage;
