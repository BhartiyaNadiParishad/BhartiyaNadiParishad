import { Carousel } from "@material-tailwind/react";
import { Box } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import img1 from "../../assets/NEWS/Screenshot_20190929-082654_Chrome.jpg";
import img2 from "../../assets/NEWS/Screenshot_20190908-083353_Chrome.jpg";
import img3 from "../../assets/NEWS/Screenshot_20200322-075724_WhatsApp.jpg";
import img4 from "../../assets/NEWS/Screenshot_20200419-051508_Chrome.jpg";
import img5 from "../../assets/NEWS/Screenshot_20201228-094940_Drive.jpg";
import img6 from "../../assets/NEWS/Screenshot_20210118-111436_Drive.jpg";
import img7 from "../../assets/NEWS/Screenshot_20200605-083019_Chrome.jpg";
import img8 from "../../assets/NEWS/18881758_10203265901804430_2560261588913403142_n.jpg";
import img9 from "../../assets/NEWS/IMG-20170421-WA0035.jpg";
import img10 from "../../assets/NEWS/Screenshot_20230906_194243_WhatsApp.jpg";
import img11 from "../../assets/NEWS/Screenshot_20230828_081414_Facebook.jpg";
import img12 from "../../assets/NEWS/Screenshot_20230820_211427_Samsung Internet.jpg";


const data = [
	{
		image1: img1,
		image2: img2,
		image3: img3,
	},
	{
		image1: img4,
		image2: img5,
		image3: img6,
	},
	{
		image1: img7,
		image2: img8,
		image3: img9,
	},
	{
		image1: img10,
		image2: img11,
		image3: img12
	},
];

export default function News() {
	const [autoplayInterval, setAutoplayInterval] = useState(500); // Initial autoplay interval
	const [isPaused, setIsPaused] = useState(false); // State to track hover pause

	const handleHover = (isHovering) => {
		setIsPaused(isHovering);
		setAutoplayInterval(isHovering ? null : 500); // Pause autoplay on hover
	};

	return (
		<>
			<Box sx={{ backgroundColor: "#f2f2f2" }}>
				<Carousel
					autoplay={!isPaused}
					autoplayInterval={autoplayInterval}
					loop={true}
					onMouseEnter={() => handleHover(true)}
					onMouseLeave={() => handleHover(false)}
					prevArrow={({ handlePrev }) => (
						<ArrowBackIosIcon
							onClick={handlePrev}
							className="!absolute top-2/4 left-4 -translate-y-2/4"
                            sx={{
                                '&:hover': {
                                    cursor: "pointer" , 
                                    color: "grey"
                                }
                            }}
						/>
					)}
					nextArrow={({ handleNext }) => (
						<ArrowForwardIosIcon
							onClick={handleNext}
							className="!absolute top-2/4 !right-4 -translate-y-2/4"
                            sx={{
                                '&:hover': {
                                    cursor: "pointer" , 
                                    color: "grey"
                                }
                            }}
						/>
					)}
					navigation={({ setActiveIndex, activeIndex, length }) => (
						<div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
							{new Array(length).fill("").map((_, i) => (
								<span
									key={i}
									className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
										activeIndex === i
											? "w-8 bg-black"
											: "w-4 bg-black/50"
									}`}
									onClick={() => setActiveIndex(i)}
								/>
							))}
						</div>
					)}
				>
					{data.map((data, index) => (
						<div
							key={index}
							style={{
								padding: "40px 80px",
                                display: "flex",
                                justifyContent: "center",
                                columnGap: "40px",
                                alignItems: "center",

							}}
						>
							<div>
								<img
									src={data.image1}
									style={{
										width: "auto",
										height: "350px",
										objectFit: "cover",
									}}
								/>
							</div>
                            <div>
								<img
									src={data.image2}
									style={{
										width: "auto",
										height: "350px",
										objectFit: "cover",
									}}
								/>
							</div>
                            <div>
								<img
									src={data.image3}
									style={{
										width: "auto",
										height: "350px",
										objectFit: "cover",
									}}
								/>
							</div>
						</div>
					))}
				</Carousel>
			</Box>
		</>
	);
}
