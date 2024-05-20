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
        justifyContent={"space-between"}
      >
        <Box>
          <img src={img1} width={"310px"} style={{ borderRadius: "50%" }} />
        </Box>
        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent={"center"}
          sx={{
            maxWidth: { xs: "100%", md: "calc(100% - 330px)" },
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
            The Formation of BHARTIYA NADI PARISHAD is an important step taken
            after deep brainstorming with the cooperation of society and system
            for the prosperity of India's rivers. The aim of BNP is to achieve
            the sustainable development goals related to rivers, water and
            environment of the United Nations with the cooperation of the
            society and the government, and under the Water Vision 2047 of the
            Hon'ble Prime Minister Shri Narendra Modi, the rivers of the country
            till the completion of 100 years of India's independence. To make it
            pure and uninterrupted.
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
