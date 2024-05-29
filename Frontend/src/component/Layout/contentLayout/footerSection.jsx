import { Box, Typography } from "@mui/material";

const FooterSection = ({ backgroundImage, content, textColor, fontFamily }) => {
  return (
    <Box
      minHeight={400}
      //   sx={{
      //     backgroundImage: `url(${backgroundImage})`,
      //     backgroundSize: "cover",
      //     backgroundPosition: "top",
      //   }}
    >
      <Box p={"5px 40px 10px 40px"}>
        <Typography
          variant="h6"
          fontSize={"22px"}
          textAlign={"justify"}
          color={textColor}
          fontFamily={fontFamily}
          fontStyle={"italic"}
        >
          {content}
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterSection;
