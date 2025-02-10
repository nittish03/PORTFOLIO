import React, { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import Button from "../Components/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Student", "Front-End Developer","Back-End Developer","Full-Stack Developer","Video-Editor"],
    loop: {},
  });

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row h-screen md:p-[10%] p-[6%]">
        {/* Kolom Kiri */}
        <div className="flex justify-center items-center md:mt-0 mt-[20%] md:w-2/3 z-20 ">
          <div className="relative bottom-[4em] transition-all duration-300">

            <h5 className="text-[#a6adba] text-2xl " data-aos="fade-up" data-aos-duration="800">
              Hello There 👋
            </h5>
            <h1 className="md:text-6xl text-4xl text-[#ced4d7] font-bold mb-2 pr-[1%]" data-aos="fade-up" data-aos-duration="1000">
              I’m Nittish
            </h1>

            <div data-aos="fade-up" data-aos-duration="1100">
              <span className="text-[#a6adba] text-2xl ">
                {text}
                <Cursor cursorStyle="|" cursorColor="white" />
              </span>
            </div>

            <br />
            <div className="mt-5 flex justify-center items-center gap-4" data-aos="fade-up" data-aos-duration="1200">
              <Button />
              <div className="flex justify-center items-center gap-4">
        <a className="hover:scale-125 transition-all duration-300" href="https://www.instagram.com/nittish_baboria" target="_blank">  <img src="https://skillicons.dev/icons?i=instagram" height="40" alt="instagram logo"  /></a>
        <a className="hover:scale-125 transition-all duration-300" href="https://www.linkedin.com/in/nittish-baboria/" target="_blank">  <img src="https://skillicons.dev/icons?i=linkedin" height="40" alt="linkedin logo"  /></a>
        <a className="hover:scale-125 transition-all duration-300" href="https://github.com/nittish03" target="_blank">  <img src="https://skillicons.dev/icons?i=github" height="40" alt="github logo"  /> </a>
        </div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan */}
        <div className="flex justify-center items-center md:w-1/2">
          <Tilt>
            <div className="transition-all duration-300  relative md:bottom-[3em] bottom-[5em]">
              <img src="/Computer.svg" alt="Ilustrasi komputer" id="ImgKomputer" />
            </div>
          </Tilt>
        </div>
      </div>
    </>
  );
};

export default Home;
