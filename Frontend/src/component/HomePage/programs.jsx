import { Box, Grid, Typography } from "@mui/material";
import Icon1 from "../../assets/Icons/1.png";
import Icon2 from "../../assets/Icons/2.png";
import Icon3 from "../../assets/Icons/3.png";
import Icon4 from "../../assets/Icons/4.png";
import Icon5 from "../../assets/Icons/5.png";
import Icon6 from "../../assets/Icons/6.png";
import Icon7 from "../../assets/Icons/partners.png";
import Icon8 from "../../assets/Icons/8.png";
import Icon9 from "../../assets/Icons/9.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";



export default function Programs() {

  const {t} = useTranslation();
  const data = [
    {
      awardTitle: t('programs.1'),
      img: Icon1,
    },
    {
      awardTitle: t('programs.2'),
      img: Icon2,
    },
    {
      awardTitle: t('programs.3'),
      img: Icon3,
    },
    {
      awardTitle: t('programs.4'),
      img: Icon4,
    },
    {
      awardTitle: t('programs.5'),
      img: Icon5,
    },
    {
      awardTitle: t('programs.6'),
      img: Icon6,
    },
    {
      awardTitle: t('programs.7'),
      img: Icon7,
    },
    {
      awardTitle: t('programs.8'),
      img: Icon8,
    },
    {
      awardTitle: t('programs.9'),
      img: Icon9,
    },
  ];

  return (
    <Box padding={"30px 30px"} >
{/* backgroundColor={"#daf0fd"} */}
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
      <Grid container spacing={3} p={2}>
        {data.map((item, index) => (
          <Grid item md={4} xs={12} key={index}>
            <Link to={"/programmesMenu"} key={index}>
              <Box
                sx={{
                  padding: "30px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
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
                      // color: "#fe9e3d",
                      color: "#f49b0e"
                      // color: "rgb(255, 197, 0)",
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
