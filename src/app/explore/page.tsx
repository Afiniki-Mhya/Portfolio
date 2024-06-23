import React from "react";
import ExploreCard from "../Components/exploreComp";
import { IoIosEye } from "react-icons/io";
import { FaCodeBranch } from "react-icons/fa";

// interface CardProps {
//   title: string;
//   technologies: string;
//   description: string;
// }

function ExplorePage() {
  return (
    <main className="bg-black text-white min-h-screen pt-16 flex flex-col items-center font-[Courier]">
      <div className="border-2 border-white text-center rounded-md mb-8">
        <h1 className="px-4 py-2">Projects</h1>
      </div>
      <div className="flex justify-center items-center w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <ExploreCard
           icons={[
            { icon: <IoIosEye />, link: "https://pyramidscheme.vercel.app/" },
            {
              icon: <FaCodeBranch />,
              link: "https://github.com/Afiniki-Mhya/A-ponzi-scheme",
            },
          ]}
          title="Pyramid Scheme"
          technologies="React + Nextjs + TailwindCSS"
          description="Blockchain based ponzi scheme"
          />
          <ExploreCard
             icons={[
              { icon: <IoIosEye />, link: "https://job-listings-5owk.vercel.app/" },
              { icon: <FaCodeBranch />, link: "https://github.com/Afiniki-Mhya/JobListings" },
            ]}
            title="Job Listings"
            technologies="Nextjs + TSX + TailwindCSS"
            description="Job, scholarships and internships listings"
          />
          <ExploreCard
            icons={[
              { icon: <IoIosEye />, link: "https://rps-js-wine.vercel.app/" },
              { icon: <FaCodeBranch />, link: "https://github.com/Afiniki-Mhya/RPS-JS-" },
            ]}
            title="Another Scheme"
            technologies="HTML + CSS + Javascript"
            description="A unique game of rock paper scissors"
          />
          <ExploreCard
           icons={[
            { icon: <IoIosEye />, link: "https://loans-and-raffle.vercel.app/" },
            { icon: <FaCodeBranch />, link: "https://github.com/Afiniki-Mhya/Loans-and-raffle" },
          ]}
            title="Another Scheme"
            technologies="React + Express + SCSS"
            description="A unique project description"
          />
          <ExploreCard
           icons={[
            { icon: <IoIosEye />, link: "https://rps-js-wine.vercel.app/" },
            { icon: <FaCodeBranch />, link: "https://github.com/Afiniki-Mhya/RPS-JS-" },
          ]}
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
