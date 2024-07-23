import React from "react";
import MainLayout from "../Layout/mainLayout";
import Grid from "@mui/material/Grid";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import bg from "../../assets/bg/dirty-river.jpeg";
import bg1 from "../../assets/bg/bgl-20.jpg";
import bg2 from "../../assets/bg/bgl-15.jpeg";
import bg3 from "../../assets/bg/sangam.jpeg";
import QuoteSection from "../Layout/contentLayout/quoteSection";
import { useTranslation } from "react-i18next";
import HistoryTree from "./historyTree";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function AboutBNP() {
  const { t } = useTranslation();
  return (
    <MainLayout title={t("about.title")} bgImg={bg} position={"bottom"}>
      <Box m={"40px"} mt={2}>
        <Grid container spacing={5}>
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box pt={"20px"} width={"15%"}>
              <Typography
                fontSize={"40px"}
                fontWeight={"bold"}
                textAlign={"center"}
                fontFamily={"cursive"}
              >
                History
              </Typography>
            </Box>
            <Box>
              <ArrowDownwardIcon
                sx={{ color: "#1cabe2", fontSize: "40px", mt: "20px" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            position="relative"
            sx={{
              "&::after": {
                content: '""',
                position: "absolute",
                top: 5,
                left: "13.5vw",
                right: "14vw",
                width: "73vw",
                borderTop: "3px solid #1cabe2",
              },
            }}
          >
            <Grid container spacing={4}>
              <Grid
                item
                xs={12}
                md={3}
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
              >
                <Box>
                  <ArrowDownwardIcon
                    sx={{
                      color: "#1cabe2",
                      fontSize: "40px",
                      mb: "20px",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    border: "2px solid #1cabe2",
                    backgroundColor: "#d6f4ff",
                    padding: "20px",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                >
                  <Typography variant="h6">
                    India, the country of rivers, is currently going through a
                    difficult phase, causing economic, social, and environmental
                    damage. The rivers of the country are facing three major
                    problems: <br />
                    <br />
                    1. Water shortage <br />
                    <br />
                    2. Pollution <br />
                    <br />
                    3. Encroachment
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
              >
                <Box>
                  <ArrowDownwardIcon
                    sx={{
                      color: "#1cabe2",
                      fontSize: "40px",
                      mb: "20px",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    border: "2px solid #1cabe2",
                    backgroundColor: "#d6f4ff",
                    padding: "20px",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                >
                  <Typography variant="h6">
                    This idea gained more strength when I came across the
                    collective efforts of river rejuvenation being done by the
                    Water Keeper Alliance for the rivers of Buffalo City, USA,
                    in 2018.
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
              >
                <Box>
                  <ArrowDownwardIcon
                    sx={{
                      color: "#1cabe2",
                      fontSize: "40px",
                      mb: "20px",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    border: "2px solid #1cabe2",
                    backgroundColor: "#d6f4ff",
                    padding: "20px",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                >
                  <Typography variant="h6">
                    The idea of forming the Bhartiya Nadi Parishad to address
                    these issues first started brewing in my mind in June 2015,
                    when we faced practical difficulties during river
                    rejuvenation work at the grassroots level.
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
              >
                <Box>
                  <ArrowDownwardIcon
                    sx={{
                      color: "#1cabe2",
                      fontSize: "40px",
                      mb: "20px",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    border: "2px solid #1cabe2",
                    backgroundColor: "#d6f4ff",
                    padding: "20px",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                >
                  <Typography variant="h6">
                    The idea took a decisive turn in 2020 during the difficult
                    times of COVID-19 when the rivers of the country started
                    getting cleaner without any human intervention. After
                    preliminary talks with dignitaries from various fields
                    engaged in river rejuvenation work across the country, the
                    Bhartiya Nadi Parishad was constituted on 2 February 2023
                    under the Indian Trusts Act, 1882.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={12}>
            <QuoteSection
              quoteColor="black"
              backgroundImage={bg1}
              quoteLine1="पिबन्ति नद्यः स्वयमेव नाम्भः, स्वयं न खादन्ति फलानि वृक्षाः।"
              quoteLine2="नादन्ति सस्यं खलु वारिवाहाः, परोपकाराय सतां विभूतयः॥"
              translationLine1={t("about.sections.6.translationLine1")}
              translationLine2={t("about.sections.6.translationLine2")}
            />
          </Grid> */}
          <Grid item xs={12}>
            <img
              src={bg2}
              style={{
                objectFit: "cover",
                width: "100%",
                maxHeight: "300px",
                objectPosition: "center",
              }}
              alt="Background"
            />
          </Grid>
          <Grid item xs={12} textAlign={"center"}>
            <Box
              sx={{
                margin: "auto",
                mb: "10px",
              }}
              py={"20px"}
              width={"35%"}
            >
              <Typography
                fontSize={"40px"}
                fontWeight={"bold"}
                textAlign={"center"}
                fontFamily={"cursive"}
              >
                Mission and Objectives
              </Typography>
            </Box>
            <Box>
              <Grid container spacing={3}>
                {t("about.objective", {
                  returnObjects: true,
                }).map((item, index) => (
                  <Grid item xs={12} sm={6} md={6} key={index}>
                    <Box
                      sx={{
                        backgroundColor: "#d6f4ff",
                        border: "2px solid #1cabe2",
                        borderRadius: "10px",
                        padding: "20px",
                        height: "100%",
                      }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight={"bold"}
                        textAlign={"center"}
                        mb={2}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="h6" textAlign={"justify"}>
                        {item.text}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <QuoteSection
              quoteColor="black"
              backgroundColor="#d6f4ff"
              quoteLine1="पिबन्ति नद्यः स्वयमेव नाम्भः, स्वयं न खादन्ति फलानि वृक्षाः।"
              quoteLine2="नादन्ति सस्यं खलु वारिवाहाः, परोपकाराय सतां विभूतयः॥"
              translationLine1={t("about.sections.6.translationLine1")}
              translationLine2={t("about.sections.6.translationLine2")}
            />
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mt={2}
          >
            <Box display={"flex"} justifyContent={"center"}>
              <Typography
                fontSize={"40px"}
                fontWeight={"bold"}
                textAlign={"center"}
                fontFamily={"cursive"}
              >
                Core values
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={9}>
                <Box
                  sx={{
                    border: "2px solid #1cabe2",
                    backgroundColor: "#d6f4ff",
                    padding: "20px",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", textAlign: "center", mb: "8px" }}
                  >
                    Respect
                  </Typography>
                  <Typography variant="h6">
                    Bhartiya Nadi Parishad respects every person who is thinking
                    positively for the betterment of the rivers of India. The
                    views of every such person are welcome on the platform of
                    Indian River Council.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <img src={bg2} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Box
                  sx={{
                    border: "2px solid #1cabe2",
                    backgroundColor: "#d6f4ff",
                    padding: "20px",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", textAlign: "center", mb: "8px" }}
                  >
                    Integrity
                  </Typography>
                  <Typography variant="h6">
                    Bhartiya Nadi Parishad is committed to high ethical values
                    and integrity in its work. We are accountable to every
                    person who is a river lover.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <img src={bg3} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Box
                  sx={{
                    border: "2px solid #1cabe2",
                    backgroundColor: "#d6f4ff",
                    padding: "20px",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", textAlign: "center", mb: "8px" }}
                  >
                    Balance
                  </Typography>
                  <Typography variant="h6">
                    Bhartiya Nadi Parishad is in favor of bringing to the ground
                    the vision of a healthy society along with the pure and
                    uninterrupted nature of the rivers.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <img src={bg3} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Box
                  sx={{
                    border: "2px solid #1cabe2",
                    backgroundColor: "#d6f4ff",
                    padding: "20px",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", textAlign: "center", mb: "8px" }}
                  >
                    Development
                  </Typography>
                  <Typography variant="h6">
                    Some priorities have been set by the Bhartiya Nadi Parishad
                    for the improvement of rivers. Apart from this, we as an
                    organization believe in adopting new technologies and
                    implementing them on the ground. We are also in favor of
                    changing our approach with time.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <img src={bg2} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Box
                  sx={{
                    border: "2px solid #1cabe2",
                    backgroundColor: "#d6f4ff",
                    padding: "20px",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", textAlign: "center", mb: "8px" }}
                  >
                    Inclusion
                  </Typography>
                  <Typography variant="h6">
                    There is no discrimination of any kind on the platform of
                    Bhartiya Nadi Parishad. We do not discriminate based on any
                    kind of color, gender, caste, religion, region, or society.
                    We are in favor of giving equal opportunity to all positive
                    viewpoints.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>
                  <img src={bg3} />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button
              component={Link}
              to="/getInvolvedMenu"
              variant="contained"
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                padding: "15px 30px",
                marginBottom: "20px",
                borderRadius: "5px",
                border: "2px solid #1cabe2",
                backgroundColor: "#1cabe2",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#1cabe2",
                },
              }}
            >
              {t("about.sections.4.title")}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </MainLayout>
  );
}
