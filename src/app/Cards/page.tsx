import React from "react";
import Card from "../Components/CardComp";
import { IoIosEye } from "react-icons/io";
import { FaCodeBranch } from "react-icons/fa";

function CardApp() {
  return (
    <div className="flex gap-6">
      <Card
        icon={[
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
      <Card
        icon={[
          { icon: <IoIosEye />, link: "https://job-listings-5owk.vercel.app/" },
          { icon: <FaCodeBranch />, link: "https://github.com/Afiniki-Mhya/JobListings" },
        ]}
        title="Job Listings"
        technologies="Nextjs + TSX + TailwindCSS"
        description="Job, scholarships and internships listings"
      />
      <Card
        icon={[
          { icon: <IoIosEye />, link: "https://rps-js-wine.vercel.app/" },
          { icon: <FaCodeBranch />, link: "https://github.com/Afiniki-Mhya/RPS-JS-" },
        ]}
        title="Another Scheme"
        technologies="HTML + CSS + Javascript"
        description="A unique game of rock paper scissors"
      />
    </div>
  );
}

export default CardApp;
