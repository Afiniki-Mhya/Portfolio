import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import Slider from "./Components/Home_Carousel/Slider";
import CardApp from "./Cards/page";
import { IoMdArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <main className="bg-black bg-cover min-h-screen text-white font-[Courier] ">
      {/* LEFT SIDE */}
      <div className=" flex ">
        <div className=" p-6 ">
          <img src="profile.jpg" className=" w-40 rounded-full"></img>
          <h2 className="py-8 pl-4 font-semibold text-lg">
            Hello, <br /> I'm Afiniki John Mhya
          </h2>
          <p className=" text-sm pb-4 ">
            I'm a Software developer.
            <br />
            I create interactive experiences
            <br />
            for amazing people using modern
            <br /> web technology.
            <br />
            <br />
            I create Backend systems that
            <br /> help drive critical infrastructure
            <br /> necessary for the modern web. I am
            <br />
            currently into building immersive
            <br /> web animations and also exploring
            <br /> deploying DApps on the decentralized web.
          </p>
          {/* ICONS */}
          <div className=" flex gap-2 pb-1 text-lg">
            <FaGithub />
            <IoIosMail />
            <FaTwitter />
            <IoLogoLinkedin />
          </div>
          <div className="border w-24 border-white item-center mb-4 rounded-sm"></div>
          <button className="flex justify-center items-center text-black gap-1 bg-white w-28 h-8 font-semibold border hover:border-white hover:bg-transparent hover:text-white hover:border-transparent transition-all duration-300">
            Explore <IoMdArrowForward />
          </button>
        </div>
        {/* Vertical Line */}
        <div className="border border-gray-600 "></div>

        {/* RIGHT SIDE */}
        <div className=" ml-auto w-2/3   ">
          <div className=" h-[max(80dvh,30rem)] relative">
            <Slider />
            <div className="absolute z-20  -bottom-16 left-12 ">
              <CardApp />
            </div>
          </div>
        </div>
      </div>
      {/* CARDS */}
    </main>
  );
}
