import { Box, Grid, Typography } from "@mui/material";
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
    img: Icon1,
  },
  {
    awardTitle: "Nadi Sangam",
    img: Icon2,
  },
  {
    awardTitle: "Fellowship",
    img: Icon3,
  },
  {
    awardTitle: "River Talk",
    img: Icon4,
  },
  {
    awardTitle: "Nadi Shoudh Kendra",
    img: Icon5,
  },
  {
    awardTitle: "Nadi Shoudh Yatra",
    img: Icon6,
  },
];

export default function Programs() {
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
          <Grid item md={4} xs={12} key={index}>
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
