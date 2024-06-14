import React from "react";
import Card from "../Components/CardComp";

function CardApp() {
  return (
    <div className=" flex gap-4 pl-14 ">
      <Card
        title="Pyramid Scheme"
        technologies="Reach + Nextjs + TailwindCSS"
        description="Blockchain based ponzi scheme"
      />
      <Card
        title="Another Scheme"
        technologies="React + Express + SCSS"
        description="A unique project description"
      />
      <Card
        title="Another Scheme"
        technologies="React + Express + SCSS"
        description="A unique project description"
      />
    </div>
  );
}

export default CardApp;
