import React from "react";
import { Carousel, IconButton, collapse } from "@material-tailwind/react";
import { Box, Typography, styled } from "@mui/material";
import img from '../assets/partners.jpg';
import img1 from '../assets/riverDark.jpg'
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import Icon1 from '../assets/Icons/1.png'
import Icon2 from '../assets/Icons/2.png'
import Icon3 from '../assets/Icons/3.png'
import Icon4 from '../assets/Icons/4.png'
import Icon5 from '../assets/Icons/5.png'
import Icon6 from '../assets/Icons/6.png'





const data1 = [
    {
        awardNumber: "1",
        awardTitle: "River Award",
        description: "The NADI UPASAK Award will be given to the two best efforts made every year at the government and non-government levels for river revitalisation in the country.",
        img: Icon1
    },
    {
        awardNumber: "2",
        awardTitle: "River Symposium",
        description: "A one-day 'BHARTIYA NADI SANGAM' is organized every year on 22 March. This river confluence is organised in any one city of BHARAT according to the circumstances.",
        img: Icon2
    },
    {
        awardNumber: "3",
        awardTitle: "River Fellowship",
        description: "The Forest Award recognizes exceptional contributions to the preservation and restoration of forests.",
        img: Icon3
    },
]

const data2= [
    {
        awardNumber: "4",
        awardTitle: "River Talk",
        description: "The Forest Award recognizes exceptional contributions to the preservation and restoration of forests.",
        img: Icon4
    },
    {
        awardNumber: "5",
        awardTitle: "River Research Centre",
        description: "The Forest Award recognizes exceptional contributions to the preservation and restoration of forests.",
        img: Icon5
    },
    {
        awardNumber: "6",
        awardTitle: "River Research YATRA",
        description: "The Forest Award recognizes exceptional contributions to the preservation and restoration of forests.",
        img: Icon6
    },
];

export default function Programs() {


    const CustomGrid2 = styled(Grid2)({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 400,
        height: 350,
        gap: 8,
        borderRadius: "20px",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        backgroundColor: "rgb(29 78 110)"
    })


    return (

        <Box padding={"40px 10px 20px 10px"}>
            <Typography variant="h4" style={{fontWeight: 'bold', textAlign: "center", marginBottom: "40px", color: "rgb(19 100 173)" }}> 
                    Our Programs
            </Typography>
            <Carousel 
                prevArrow={({ handlePrev }) => (
                    <IconButton
                    variant="text"
                    color="rgb(19 100 173)"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute top-2/4 left-4 -translate-y-2/4"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        color="rgb(19 100 173)"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />
                    </svg>
                    </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                    <IconButton
                    variant="text"
                    color= "rgb(19 100 173)"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute top-2/4 !right-4 -translate-y-2/4"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        color="rgb(19 100 173)"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                    </svg>
                    </IconButton>
                )}

                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                            activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                        />
                    ))}
                    </div>
                )}
                
                style={{
                    color: "blue !important",
                    alignItems: "center", 
                    paddingBottom: "30px"}}
                >
                    <Grid2 container 
                        justifyContent={'center'} 
                        columnGap={6} 
                        rowGap={4} >
                        {data1.map((item, index) => (
                            <CustomGrid2
                                key={index}
                                sx={{
                                    padding: "25px",
                                    marginBottom: "20px",
                                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
                                    color: "white",
                                    textAlign: "center"
                                }}
                            >
                                <img src={item.img} alt="members icon" height={45} width={45} />
                                <Typography variant='h6' sx={{ fontSize: "24px", fontWeight: "bold", color: "#fe9e3d" }}>{item.awardNumber}</Typography>
                                <Typography variant='h6' sx={{ fontSize: "24px", fontWeight: "bold", color: "#fe9e3d" }}>{item.awardTitle}</Typography>
                                <Typography variant='h6' sx={{fontSize: "18px" , textAlign: "justify"}}>{item.description}</Typography>
                            </CustomGrid2>
                        ))}
                    </Grid2>
                    <Grid2 container 
                        justifyContent={'center'} 
                        columnGap={4} 
                        rowGap={4} >
                        {data2.map((item, index) => (
                            <CustomGrid2
                                key={index}
                                sx={{
                                    padding: "20px",
                                    marginBottom: "20px",
                                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
                                    color: "white",
                                    textAlign: "center"
                                }}
                            >
                                <img src={item.img} alt="members icon" height={45} width={45} />
                                <Typography variant='h6' sx={{fontSize: "24px", fontWeight: "bold", color: "#fe9e3d" }}>{item.awardNumber}</Typography>
                                <Typography variant='h6' sx={{ fontSize: "24px", fontWeight: "bold", color: "#fe9e3d" }}>{item.awardTitle}</Typography>
                                <Typography variant='h6' sx={{fontSize: "18px", textAlign: "justify"}}>{item.description}</Typography>
                            </CustomGrid2>
                        ))}
                    </Grid2>
                    
            </Carousel>
        </Box>
    );
}
