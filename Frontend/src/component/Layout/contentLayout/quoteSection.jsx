/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

const QuoteSection = ({
  backgroundImage,
  quoteLine1,
  quoteLine2,
  translationLine1,
  translationLine2,
  quoteColor = "white",
}) => {
  return (
    <Box sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "bottom",
    }}>
      <Box
        sx={{
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.28)",
        }}
        p={5}
        color={"white"}
      >
        <Typography
          textAlign={"center"}
          variant="h4"
          sx={{ fontWeight: "bold", fontSize: "24px" }}
          color={quoteColor}
        >
          {quoteLine1}
        </Typography>
        <Typography
          textAlign={"center"}
          variant="h4"
          sx={{ fontWeight: "bold", fontSize: "24px" }}
          mb={2}
          color={quoteColor}
        >
          {quoteLine2}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontSize: "22px" }}
          textAlign={"center"}
          color={quoteColor}
        >
          {translationLine1}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontSize: "22px" }}
          textAlign={"center"}
          color={quoteColor}
        >
          {translationLine2}
        </Typography>
      </Box>
    </Box>
  );
};

export default QuoteSection;
