import React from "react";
import DrawerAppBar from "../HomePage/drawer";
import { Box, Typography } from "@mui/material";
import Footer from "../footer";

export default function MainLayout({ children, title, bgImg, position }) {
  return (
    <Box>
      <DrawerAppBar />
      {title && (
        <>
          <Box
            sx={{
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "cover",
              backgroundPosition:
                position !== null ? position : "center bottom",
            }}
          >
            <Box bgcolor={"#000000ad"} padding={"18% 40px 5% 40px"}>
              <Typography
                variant="h4"
                fontWeight={"bold"}
                textAlign={"center"}
                color={"white"}
              >
                {title}
              </Typography>
            </Box>
          </Box>
        </>
      )}
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
}
