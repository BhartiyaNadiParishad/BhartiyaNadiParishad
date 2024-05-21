import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import img from "../../assets/background9.png";
import { Link } from "react-router-dom";

export default function GetInvolved() {
  return (
    <Box
      sx={{
        padding: "50px 10%",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        rowGap: "30px",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" style={{ fontWeight: "bold", color: "#f5ff00" }}>
        GET INVOLVED
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        style={{
          fontSize: "20px",
          color: "white",
          textAlign: "justify",
          fontWeight: "bold",
        }}
      >
        Every person can join the BHARTIYA NADI PARISHAD who has a strong belief
        in BHARTIYA traditions, the BHARTIYA Constitution, and the sovereignty
        of BHARAT, to see the rivers of Bharat flowing clean and uninterrupted.
        Any river-loving organisation or collective efforts of common people,
        society and government can become a part of the positive river
        revitalization mass movement. A river-loving organization or individual
        can join the BHARTIYA NADI PARISHAD in all three forms - associate,
        member, and volunteer. For this, they will have to complete the
        formalities of the prescribed procedure of the BHARTIYA NADI PARISHAD.
      </Typography>
      <Link to="/getInvolvedMenu" style={{ textDecoration: "none" }}>
        <Button
          sx={{
            backgroundColor: "white",
            border: "none",
            color: "rgb(19 100 173)",
            padding: "10px 80px 10px 80px",
            borderRadius: "20px",
            fontWeight: "bold",
            fontSize: "16px",
            "&:hover": {
              // Corrected: '&' before ':hover'
              backgroundColor: "rgb(19 100 173)",
              color: "white",
              border: "none",
            },
          }}
          variant="outlined"
        >
          Explore More
        </Button>
      </Link>
    </Box>
  );
}
