const CardProject = (props) => {
	const Img = props.Img;
	const Title = props.Title;
	const Link = props.Link;
	const Live = props.Live

	return (
		<div className="card">
			<div className="rounded-xl shadow-lg h-auto transition-all duration-300 hover:scale-105" id="Card">

				<div className="p-5 flex flex-col h-max gap-4 justify-between">
					<div>
						<div className="rounded-xl overflow-hidden">
							<img className="transition-all duration-300 hover:scale-110" style={{aspectRatio:3/2,objectFit:"contain"}} src={Img} alt="Gambar Project nittish"/>
						</div>
						<p className="text-lg md:text-xl font-medium mt-3 text-[#ced4d7]">{Title}</p>
					</div>

<div className="flex justify-between items-center ">
						<a
						target="_blank"
							href={Live}
							className="transition-all duration-300 hover:scale-110 text-center px-4 md:mt-0 mt-5 bg-[#ced4d7] text-[#212121] py-2 rounded-lg font-semibold hover:bg-[#1f2937] hover:text-[#ced4d7] ease-out">
							Live
						</a>
						<a
						target="_blank"
							href={Link}
							className="transition-all duration-300 hover:scale-110 text-center md:mt-0 px-4 mt-5 bg-[#ced4d7] text-[#212121] py-2 rounded-lg font-semibold hover:bg-[#1f2937] hover:text-[#ced4d7]  ease-out">
							Github
						</a>
</div>
				</div>
			</div>
		</div>
	);
};

export default CardProject;
