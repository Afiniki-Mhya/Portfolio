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
    <main className="bg-black bg-cover min-h-screen text-white font-[Courier] ">
      {/* LEFT SIDE */}
      <div className=" flex ">
        <div className=" p-5 ">
          <img src="profile.jpg" className=" w-40 rounded-full"></img>
          <h2 className="py-4 pl-4 font-semibold text-lg">
            Hello, <br /> I'm Afiniki John Mhya
          </h2>
          <p className=" text-sm pb-4 ">
            I'm a frontend developer.
            <br />
            I create interactive experiences
            <br />
            for amazing people using modern
            <br /> web technology. I create Backend
            <br /> systems that help drive critical
            <br /> infrastructure necessary for the <br /> modern web. I am
            currently into
            <br /> building immersive web animations <br /> and also exploring
            deploying
            <br /> DApps on the decentralized web.
          </p>
          {/* ICONS */}
          <div className=" flex gap-4 pb-1 text-lg">
            <Link
              href="https://github.com/Afiniki-Mhya"
              target="_blank"
              className=""
            >
              <FaGithub />
            </Link>
            <Link href="johnafinikimhya12@gmail.com" target="_blank">
              <IoIosMail />
            </Link>
            <Link href="https://x.com/_afinikiii/status/1500443043471708161?s=46&t=oPa8HQe6M3XL102cO7SF7w">
              <FaTwitter />
            </Link>
            <Link
              href="https://www.linkedin.com/in/afiniki-john-52bab7212/"
              target="_blank"
            >
              <IoLogoLinkedin />
            </Link>
          </div>
          <div className="border w-32 border-white item-center mb-4 rounded-sm"></div>
          <Link
            href="/explore"
            className="flex justify-center items-center text-black gap-1 bg-white w-28 h-8 font-semibold border hover:border-white hover:bg-transparent hover:text-white hover:border-transparent transition-all duration-300"
          >
            Explore <IoMdArrowForward />
          </Link>
        </div>
        {/* Vertical Line */}
        {/* <div className="border border-gray-600 "></div> */}

        {/* RIGHT SIDE */}
        <div className=" ml-auto w-3/4   ">
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
