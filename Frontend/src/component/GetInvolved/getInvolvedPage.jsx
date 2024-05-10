import React from "react";
import DrawerAppBar from "../drawer";
import Footer from "../footer";
import { Box, Button, Typography, styled } from "@mui/material";
import img from "../../assets/partners.jpg";
import volunteerImg from "../../assets/volunteer.jpg";
import membership from "../../assets/membership.jpg";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CustomBox = styled(Box)(() => ({
  width: "425px",
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  textAlign: "center",
  rowGap: "20px",
}));

export default function GetInvolvedPage() {
  return (
    <Box sx={{ background: "linear-gradient(to bottom, #a9e0ff, #80aaf5)" }}>
      <DrawerAppBar />
      <Box
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "25px 5%",
        }}
      >
        <Typography
          gutterBottom
          variant="h4"
          fontWeight={"bold"}
          textAlign={"center"}
        >
          {" "}
          Explore opportunity
        </Typography>
        <Typography mb={"20px"} variant="h6" textAlign={"justify"}>
          A person who is concerned about rivers in any way can be a member of
          the BNP family or a participant in it. There will be no difference of
          religion, caste, gender, color, region, and language in this. We all
          are Indians, and we love the richness of our rivers, people who
          believe in this idea can be partners of the BNP in any form. This
          organization is for everyone and for everyone. In this, everyone has
          the freedom to express their ideas and implement them. By associating
          with the BNP, we have resolved to make our country river rich. A river
          loving organization or individual can join the BNP in all two forms -
          member and volunteer. For this he will have to complete the
          formalities of the prescribed procedure of the BNP.
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        columnGap={"20px"}
        rowGap={"20px"}
      >
        <CustomBox>
          <Typography
            color={"#1364ad"}
            variant="h4"
            fontSize={"30px"}
            fontWeight={"bold"}
          >
            Membership
          </Typography>
          <img src={volunteerImg} height={"400px"} />
          <Typography
            color="black"
            mb={"20px"}
            variant="h6"
            textAlign={"justify"}
          >
            "Bharatiya Nadi Paridhad offers an invaluable opportunity for
            individuals passionate about conserving India's rivers to join their
            membership program. Aspiring members gain access to a wealth of
            resources and networking avenues, fostering a community dedicated to
            river preservation."
          </Typography>
          <Link to="/membership">
            <Button
              sx={{ fontSize: "24px", textTransform: "capitalize" }}
              endIcon={<ArrowForwardIosIcon />}
            >
              Get Involved
            </Button>
          </Link>
        </CustomBox>
        <CustomBox>
          <Typography
            color={"#1364ad"}
            variant="h4"
            fontSize={"30px"}
            fontWeight={"bold"}
          >
            Volunteering
          </Typography>
          <img src={membership} height={"400px"} />
          <Typography
            color="black"
            mb={"20px"}
            variant="h6"
            textAlign={"justify"}
          >
            "Bharatiya Nadi Paridhad offers an invaluable opportunity for
            individuals passionate about conserving India's rivers to join their
            membership program. Aspiring members gain access to a wealth of
            resources and networking avenues, fostering a community dedicated to
            river preservation."
          </Typography>
          <Link to="/volunteer">
            <Button
              sx={{ fontSize: "24px", textTransform: "capitalize" }}
              endIcon={<ArrowForwardIosIcon />}
            >
              Get Involved
            </Button>
          </Link>
        </CustomBox>
        <CustomBox>
          <Typography
            color={"#1364ad"}
            variant="h4"
            fontSize={"30px"}
            fontWeight={"bold"}
          >
            Internship
          </Typography>
          <img src={membership} height={"400px"} />
          <Typography
            color="black"
            mb={"20px"}
            variant="h6"
            textAlign={"justify"}
          >
            "Bharatiya Nadi Paridhad offers an invaluable opportunity for
            individuals passionate about conserving India's rivers to join their
            membership program. Aspiring members gain access to a wealth of
            resources and networking avenues, fostering a community dedicated to
            river preservation."
          </Typography>
          <Link to="/internship">
            <Button
              sx={{ fontSize: "24px", textTransform: "capitalize" }}
              endIcon={<ArrowForwardIosIcon />}
            >
              Get Involved
            </Button>
          </Link>
        </CustomBox>
      </Box>
      <Box
        display="flex"
        flexDirection={"column"}
        justifyContent={"center"}
        sx={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "60px 80px 60px 80px",
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
          “For 21 years, River Network has played an essential role in guiding
          our organization’s growth in strategic planning, fundraising, building
          leaders, and professional development skills. River Network also
          brings Southeastern groups together. I don’t know what we would do
          without River Network. “
        </Typography>
        <Typography
          sx={{ color: "#fe9e3d", fontWeight: "bold", fontSize: "20px" }}
        >
          Cindy Lowry
        </Typography>
        <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
          Alabama Rivers Alliance
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
}
