import React, { useEffect, useState } from "react"
import ButtonCV from "../Components/ButtonCV"
import "aos/dist/aos.css"
import Card from '../Components/uiverse/Card'
const AboutMe = () => {


	return (
		<>
			<div className="md:px-[10%] px-[6%]" id="About">
				<div
					className="text-4xl text-[#ced4d7] font-bold md:pb-8 pb-4"
					data-aos="fade-up"
					data-aos-duration="400">
					ABOUT ME
				</div>
				<div className="flex justify-center items-start flex-col md:flex-row">
					{/* Kolom Kiri */}
					<div className="flex justify-center items-center md:pr-10 pr-0 md:w-auto ">
						<div data-aos="fade-up" data-aos-duration="1000">
<Card/>
						</div>
					</div>

					{/* Kolom Kanan */}
					<div className="md:w-full flex flex-col justify-between">
						<p
							className="text-[#a6adba] w-full text-justify text-lg mb-5 mt-5 md:mt-0"
							data-aos="fade-up"
							data-aos-duration="600">
I am a passionate and driven 2nd-year student at Bhagwan Parshuram Institute of Technology, currently pursuing a B.Tech in Information Technology. With a strong foundation in web development, I am proficient in both frontend and backend technologies.I have my hands on various frameworks and tools, including ReactJS, NodeJS, Nextjs, Express-js, Tailwind-CSS and Bootstrap, as well as databases like MongoDB and SQL.

As a full stack web developer, I have successfully completed numerous projects that demonstrate my skills and dedication to creating seamless, user-friendly applications. Some of my notable projects include a news app, an e-commerce website, and a Netflix clone.


						</p>

						<div className="relative" data-aos="fade-up" data-aos-duration="800">
							<ButtonCV />
						</div>

						<div
							className="grid grid-cols-3 md:gap-4 gap-5 mt-5"
							data-aos="fade-up"
							data-aos-duration="1000">
							<div
								className="w-auto h-[8em] flex flex-col justify-center items-center rounded-sm transition-all duration-300 hover:scale-110"
								id="InfoAbout">
								<b className="text-3xl text-[#ced4d7]">1+</b>
								<div className="text-center text-[#a6adba]">Years of Experience</div>
							</div>
							<div
								className="w-auto h-[8em] flex flex-col justify-center items-center rounded-sm transition-all duration-300 hover:scale-110"
								id="InfoAbout">
								<b className="text-3xl text-[#ced4d7]">17+</b>
								<div className="text-center text-[#a6adba]">Project Created</div>
							</div>
							<div
								className="w-auto h-[8em] flex flex-col justify-center items-center rounded-sm transition-all duration-300 hover:scale-110"
								id="InfoAbout">
								<b className="text-3xl text-[#ced4d7]">9+</b>
								<div className="text-center text-[#a6adba]">Certificate</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AboutMe
