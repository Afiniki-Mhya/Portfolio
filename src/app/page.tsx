import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import Slider from "./Components/Home_Carousel/Slider";
import CardApp from "./Cards/page";
import { IoMdArrowForward } from "react-icons/io";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black bg-cover min-h-screen text-white font-[Courier] flex flex-col justify-between">
      {/* CONTAINER */}
      <div className="flex flex-col lg:flex-row">
        {/* LEFT SIDE */}
        <div className="p-5 flex flex-col items-center lg:items-start">
          <img
            src="profile.jpg"
            className="w-32 sm:w-40 rounded-full"
            alt="Profile Picture"
          />
          <h2 className="py-4 text-center lg:text-left font-semibold text-lg">
            Hello{','} <br /> {"I'm"} Afiniki John Mhya
          </h2>
          <p className="text-sm pb-4 text-center lg:text-left">
          {"I'm"} a frontend developer.
            <br />
            I create interactive and <br />
            responsive experiences for <br /> amazing people using modern <br />
            web technology. I am currently into
            <br /> building immersive web animations <br /> and also exploring
            deploying
            <br /> interesting user experiences for web3 applications.
          </p>
          {/* ICONS */}
          <div className="flex gap-4 pb-1 text-lg">
            <Link href="https://github.com/Afiniki-Mhya" target="_blank">
              <FaGithub />
            </Link>
            <Link href="mailto:johnafinikimhya12@gmail.com" target="_blank">
              <IoIosMail />
            </Link>
            <Link
              href="https://x.com/_afinikiii/status/1500443043471708161?s=46&t=oPa8HQe6M3XL102cO7SF7w"
              target="_blank"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://www.linkedin.com/in/afiniki-john-52bab7212/"
              target="_blank"
            >
              <IoLogoLinkedin />
            </Link>
          </div>
          <div className="border w-32 sm:w-32 border-white mb-4 rounded-sm mt-2 lg:mt-2"></div>
          <Link
            href="/explore"
            className="flex justify-center items-center text-black gap-1 bg-white w-24 sm:w-28 h-8 font-semibold border hover:border-white hover:bg-transparent hover:text-white hover:border-transparent transition-all duration-300"
          >
            Explore <IoMdArrowForward />
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-3/4 mt-8 lg:mt-0">
          <div className="h-[max(80dvh,30rem)] relative -top-48 lg:top-0">
            <Slider />
            <div className="hidden lg:block absolute z-20 -bottom-16 left-1/2 transform -translate-x-1/2 lg:left-12 lg:transform-none">
              <CardApp />
            </div>
          </div>
        </div>
      </div>

      {/* GRAY BACKGROUND */}
      <div className="block lg:hidden w-full bg-gray-500 py-12 rounded-tr-[3rem] rounded-tl-[3rem] mt-[-4rem]">
        <div className="container mx-auto px-4 text-black text-center">
          <p>
            Inspired by <span className="text-gray-800">Prince Charles</span>
          </p>
        </div>
      </div>
    </main>
  );
}
