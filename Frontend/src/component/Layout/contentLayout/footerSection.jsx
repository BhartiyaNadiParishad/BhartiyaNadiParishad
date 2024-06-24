import { Box, Typography } from "@mui/material";

const FooterSection = ({ backgroundImage, content, textColor, fontFamily }) => {
  return (
    <Box
      minHeight={400}
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
    >
      <Box p={"0 17%"}>
        <Typography
          variant="h6"
          fontSize={"20px"}
          textAlign={"justify"}
          color={textColor}
          fontFamily={fontFamily}
        >
          {content}
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterSection;
