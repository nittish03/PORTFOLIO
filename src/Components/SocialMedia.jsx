import * as React from "react"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import SwipeableViews from "react-swipeable-views" // Import react-swipeable-views


function TabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}>
			{value === index && (
				<Box
					sx={{
						px: 4,
						"@media (max-width: 960px)": {
							px: 3,
						},
					}}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
}

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	}
}

export default function SocialMedia() {
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	const handleChangeIndex = (index) => {
		setValue(index)
	}

	return (
		<Box sx={{ flexGrow: 1, bgcolor: "transparent", display: "flex", height: "auto" }}>
			<Tabs
			
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				textColor="secondary"
				indicatorColor="secondary"
				sx={{ borderRight: 1, borderColor: "divider" }}>
				<Tab
				
					label={
						<div className="flex gap-x-3 w-full text-[#ff27f4]">
							<img className="h-6 w-6 transition-all duration-300 hover:scale-125" src="https://skillicons.dev/icons?i=instagram" alt="Instagram nittish_baboria" />
							Instagram
						</div>
					}
					{...a11yProps(0)}
					scrollbuttons="auto"
					sx={{
						fontWeight: "Bold",
						color: "#ced4d7",
						fontSize: ["0.7rem", "1rem"],
					}}
				/>
				<Tab
				            className="transition-all duration-300 hover:scale-110"

					label={
						<div className="flex gap-x-3 w-full text-[#2f36ff]">
							<img className="h-6 w-6 transition-all duration-300 hover:scale-125" src="https://skillicons.dev/icons?i=linkedin" alt="Linkedin nittish-baboria" />
							Linkedin
						</div>
					}
					{...a11yProps(1)}
					scrollbuttons="auto"
					sx={{
						fontWeight: "Bold",
						color: "#ced4d7",
						fontSize: ["0.7rem", "1rem"],
					}}
				/>
      <Tab
	  
					label={
						<div className="flex gap-x-3 w-full text-white">
							<img className="h-6 w-6 transition-all duration-300 hover:scale-125" src="https://skillicons.dev/icons?i=github" alt="Github nittish03" />
							Github
						</div>
					}
					{...a11yProps(2)}
					scrollbuttons="auto"
					sx={{
						fontWeight: "Bold",
						color: "#ced4d7",
						fontSize: ["0.7rem", "1rem"],
					}}
				/>
			</Tabs>


			<SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
				<TabPanel value={value} index={0}>
					<a target="_blank" href="https://www.instagram.com/nittish_baboria">
						<img
							src="/insta.jpg"
							alt="Instagram nittish_baboria"
							className="object-contain h-auto w-[10rem] md:w-[14.3rem]  rounded-xl transition-all duration-300 hover:scale-105 "
						/>
					</a>
				</TabPanel>

				<TabPanel value={value} index={1}>
					<a target="_blank" href="https://www.linkedin.com/in/nittish-baboria/">
						<img
							src="/linked.jpg"
							alt="Linkedin nittish-baboria"
							className="object-contain h-auto w-[10rem] md:w-[14.3rem] rounded-xl transition-all duration-300 hover:scale-105"
						/>
					</a>
				</TabPanel>
        <TabPanel value={value} index={2}>
					<a target="_blank" href="https://github.com/nittish03">
						<img
							src="/github.jpg"
							alt="Github nittish03"
							className="object-contain h-auto w-[10rem] md:w-[14.3rem] rounded-xl transition-all duration-300 hover:scale-105"
						/>
					</a>
				</TabPanel>
			</SwipeableViews>
		</Box>
	)
}
