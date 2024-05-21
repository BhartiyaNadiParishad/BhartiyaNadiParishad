import { Box, Grid, Typography, styled } from "@mui/material";
import Icon1 from "../../assets/Icons/1.png";
import Icon2 from "../../assets/Icons/2.png";
import Icon3 from "../../assets/Icons/3.png";
import Icon4 from "../../assets/Icons/4.png";
import Icon5 from "../../assets/Icons/5.png";
import Icon6 from "../../assets/Icons/6.png";
import { Link } from "react-router-dom";

const data = [
  {
    awardTitle: "Award",
    // description:
    //   "Every year, the 'Nadh Upasak Award' will recognize the outstanding efforts for river rejuvenation in the country from both government and non-government organizations. This award includes a certificate, memento, and a sum of Rs 50,000.",
    img: Icon1,
  },
  {
    awardTitle: "Nadi Sangam",
    // description:
    //   "Every year on March 22, a one-day event called 'Bharatiya Nadi Sangam' will be held. The 'Bharatiya Nadi Sangam' will be organized in any city in India, depending on the conditions. The group encompasses both BNP river enthusiasts and individuals who value the river.",
    img: Icon2,
  },
  {
    awardTitle: "Fellowship",
    // description:
    //   "The Bhagirath River Fellowship is offered by the BNP for river research in India. This fellowship allows for extensive study of any river in the country. The fellowship requires the river lover to provide scientific solutions to the river's concerns. This fellowship provides one lakh rupees.",
    img: Icon3,
  },
  {
    awardTitle: "River Talk",
    // description:
    //   "The BNP will periodically hold 'River Talks' to maintain momentum in India's river rehabilitation efforts. This program aims to discuss every river in India, whether big and small.",
    img: Icon4,
  },
  {
    awardTitle: "Nadi Shoudh Kendra",
    // description: "Grassroot Academy of Nature (GAON)",
    img: Icon5,
  },
  {
    awardTitle: "Nadi Shoudh Yatra",
    // description:
    //   "The 'Know Your River' program will occasionally organize river research trips to help participants better understand their surroundings. This will provide insight on the current state of rivers, as well as old knowledge and mythology surrounding them.",
    img: Icon6,
  },
];

export default function Programs() {
  // const CustomGrid2 = styled(Grid2)({
  // 	display: "flex",
  // 	flexDirection: "column",
  // 	alignItems: "center",
  // 	width: "100%",
  // 	height: 300,
  // 	gap: 4,
  // 	boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  // 	transition: "0.3s",
  // 	backgroundColor: "rgb(29 78 110)",
  // });

  return (
    <Box padding={"30px 30px"} backgroundColor={"#daf0fd"}>
      <Typography
        variant="h4"
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "30px",
          color: "rgb(19 100 173)",
        }}
      >
        Our Programs
      </Typography>
      <Grid container spacing={3}>
        {data.map((item, index) => (
          <Grid item md={4} xs={12}>
            <Link to={"/programmesMenu"} key={index}>
              <Box
                sx={{
                  padding: "30px",
                  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
                  color: "white",
                  backgroundColor: "rgb(29 78 110)",
                  height: "100%",
                  "&:hover": {
                    backgroundColor: "#051a36",
                  },
                }}
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  columnGap={2}
                  mb={2}
                >
                  <img
                    src={item.img}
                    alt="members icon"
                    height={45}
                    width={45}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      color: "#fe9e3d",
                    }}
                  >
                    {item.awardTitle}
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "18px",
                    textAlign: "justify",
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
