import Image from "next/image";
import Bg from "../../public/bg.png";
import VR from "../../public/vr-icon.png";
import Globe from "../../public/globe-icon.png";
import { MdArrowDropDown } from "react-icons/md";

const Hero = () => {
  return (
    <section>
      <div className="w-full min-h-screen h-full flex flex-col items-center justify-center relative">
        <Image
          src={Bg}
          alt="Bg"
          className="w-full object-fill absolute h-full z-0"
        />
        <Image
          src={VR}
          alt="VR"
          className="absolute md:w-[250px] lg:w-[300px] w-[150px] right-5 top-10 xs:right-32 xs:top-20 animate-up-down"
        />
        <Image
          src={Globe}
          alt="Globe"
          className="absolute md:w-[250px] lg:w-[300px] w-[150px] left-5 bottom-0 sm:left-32 sm:bottom-10 animate-up-down"
        />
        <div className="z-10 font-geist text-center text-white">
          <h1
            className="text-2xl xs:text-4xl sm:text-6xl font-extrabold bg-gradient-to-br from-white to-[#1b24c4] inline-block text-transparent bg-clip-text"
            data-aos="zoom-in-up"
          >
            ARKAVIDIA 8.0
          </h1>
          <h3
            className="text-lg xs:text-xl sm:text-3xl font-semibold font-geistMono"
            data-aos="zoom-in-up"
          >
            IT & Informatics Festival
          </h3>
        </div>
        <div className="absolute bottom-20 items-center flex flex-col cursor-pointer">
          <a
            href="#countdown"
            className="text-gray-200 items-center flex flex-col font-geist hover:scale-105 duration-200 hover:text-white"
          >
            Explore
            <MdArrowDropDown />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
