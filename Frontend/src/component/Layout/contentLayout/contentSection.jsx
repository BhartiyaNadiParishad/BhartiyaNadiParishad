/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

const ContentSection = ({
  content,
  backgroundColor,
  textColor,
  fontFamily = "",
  fontSize = "20px",
  fontStyle = "",
}) => {
  return (
    <Box
      height={"100%"}
      sx={{
        backgroundColor: backgroundColor,
        padding: backgroundColor? "30px": "0px",
      }}
      color={textColor}
    >
      <Typography
        variant="h6"
        fontSize={fontSize}
        textAlign={"justify"}
        fontFamily={fontFamily}
        fontStyle={fontStyle}
      >
        {content}
      </Typography>
    </Box>
  );
};

export default ContentSection;
