import { Box, Typography } from "@mui/material";

const HeroSection = ({ backgroundImage, title }) => {
  return (
    <Box>
      <Box
        height={320}
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{ backgroundColor: "#0000008a" }}
          height={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingTop={"170px"}
        >
          <Typography
            variant="h4"
            fontWeight={"bold"}
            color={"white"}
            sx={{ textAlign: "left", fontSize: "40px" }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
