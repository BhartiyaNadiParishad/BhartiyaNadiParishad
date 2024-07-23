import { Grid, Box, Typography } from "@mui/material";

const ImageSection = ({
  imageSrc,
  content,
  textColor,
  fontSize,
  backgroundColor,
  fontFamily,
}) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <img
          src={imageSrc}
          style={{
            height: "400px",
            objectFit: "cover",
            width: "100vw",
            padding: "20px",
          }}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <Typography
          variant="h4"
          textAlign={"justify"}
          color={textColor}
          padding={"20px"}
          fontFamily={fontFamily}
          fontSize={fontSize}
          backgroundColor={backgroundColor}
        >
          {content}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ImageSection;
