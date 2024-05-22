import { Box, Typography } from "@mui/material";
import img from "../../assets/bg20.jpg";
import img1 from "../../assets/team/Raman Kant 1.jpg";

const Founder = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "40px 30px",
        }}
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        columnGap={2}
        justifyContent={"center"}
      >
        <Box>
          <img src={img1} width={"310px"} style={{ borderRadius: "50%" }} />
        </Box>
        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent={"center"}
          sx={{
            maxWidth: { xs: "100%", md: "calc(100% - 450px)" },
            borderRadius: "10px",
            color: "white",
            padding: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "justify",
              marginBottom: "10px",
            }}
          >
            Formation of Bhartiya Nadi Parishad is an important step taken after
            brainstorming with stakeholders for rejuvenation of Indian rivers
            towards prosperous India. The aim of Bhartiya Nadi Parishad is to
            contribute towards the sustainable development goals (SDG 6, 12, 13,
            14 & 15) of the United Nations with the cooperation of the society
            and the government, and under the India's Water Vision 2047
            announced by the Hon'ble Prime Minister Shri Narendra Modi.
          </Typography>
          <Typography
            sx={{ color: "#f5ff00", fontWeight: "bold", fontSize: "20px" }}
          >
            Raman Kant
          </Typography>
          <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
            Riverman of India
          </Typography>
          <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
            Founder - Bharatiya Nadi Parishad
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Founder;
