/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

const ContentSection = ({
  content,
  backgroundColor,
  textColor,
  fontFamily = "sans-serif",
  fontSize = "22px",
  fontStyle = "normal",
}) => {
  return (
    <Box
      sx={{
        backgroundColor: backgroundColor,
        padding: "20px",
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
