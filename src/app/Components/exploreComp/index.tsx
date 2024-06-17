import React from "react";

interface IconLink {
  icon: React.ReactNode;
  link: string;
}

type ExploreCardProps = {
  title: string;
  technologies?: string;
  description?: string;
  icons?: IconLink[];
}

function ExploreCard({ title, technologies, description, icons }: ExploreCardProps) {
  return (
    <div className=" ">
      <div className="bg-black/65 w-60 h-44 text-white shadow-md shadow-gray-600 rounded-xl">
        {/* CARD CONTENT */}
        <div className="flex flex-col items-left text-left pl-4 pt-3">
          <h1 className="font-extrabold text-[18px]">{title}</h1>
          <p className="text-[12px] pb-4">{technologies}</p>
          <p className="text-[14px] pb-4">{description}</p>
          <div className="flex flex-row gap-10">
            {icons?.map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreCard;
