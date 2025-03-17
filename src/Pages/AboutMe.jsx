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
I am a passionate Full Stack Web Developer and a 2nd-year B.Tech IT student at Bhagwan Parshuram Institute of Technology. I specialize in building scalable and efficient web applications with expertise in Next.js, React.js, Node.js, Express.js, MongoDB, PostgreSQL, Tailwind CSS, and Bootstrap.

My skills include frontend and backend development, API design, authentication, database management, and UI/UX optimization. I have developed full-stack applications, such as a study platform for university students and a feature-rich e-commerce website, demonstrating my ability to create high-performance digital solutions.

With hands-on experience from multiple internships and projects, I am committed to continuous learning and innovation in web development and software engineering. 🚀

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
