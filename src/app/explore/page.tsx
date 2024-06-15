import React from "react";
import ExploreCard from "../Components/exploreComp/page";

interface CardProps {
  title: string;
  technologies: string;
  description: string;
}

function ExplorePage({ title, technologies, description }: CardProps) {
  return (
    <main className="bg-black text-white min-h-screen pt-16 flex flex-col items-center font-[Courier]">
      <div className="border-2 border-white text-center rounded-md mb-8">
        <h1 className="px-4 py-2">Projects</h1>
      </div>
      <div className="flex justify-center items-center w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
