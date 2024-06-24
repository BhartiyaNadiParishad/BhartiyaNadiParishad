import { useState } from "react";
import img from "./assets/background9.png";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomePage from "./component/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Internship from "./component/GetInvolved/internship";
import Membership from "./component/GetInvolved/membership";
import Volunteer from "./component/GetInvolved/volunteer";
import Contact from "./component/contactUs/contact";
import Testing from "./component/testing";
import AboutBNP from "./component/AboutUs/about";
import Gallery from "./component/gallery";
import OurValues from "./component/ourValues";
import Partners from "./component/AboutUs/Partners";
import MissionVision from "./component/AboutUs/missionVision";
import History from "./component/AboutUs/history";
import PdfDocument from "./component/Resouces/Documents/document";
import NadiPortal from "./component/Nadi Darshan/nadiPortal";
import CoreTeam from "./component/Team/coreTeam";
import Advisors from "./component/Team/advisors";
import TechAdvisors from "./component/Team/techAdvisors";
import RiverVideo from "./component/Nadi Darshan/riverVideo";
import AboutLogo from "./component/AboutUs/aboutLogo";
import Newsletter from "./component/Resouces/Newsletter";
import Publication from "./component/Resouces/Publication";
import Learning from "./component/Resouces/learning";
import RiverGallery from "./component/Nadi Darshan/riverGallery";
import Faqs from "./component/contactUs/faq";
import Career from './component/GetInvolved/career';
import Factsheet from './component/GetInvolved/factsheet';
import SuccessStories from "./component/Resouces/sucsess-stories";
import GetInvolvedPage from "./component/GetInvolved/getInvolvedPage";
import Inspiration from "./component/Team/inspiration";
import StateHeads from "./component/Team/stateHeads";
import ProgramPage from "./component/AboutUs/ourProgramPage";
import NeedHelp from "./NeedHelp/needHelp";
import Patron from "./component/Team/patron";
import RiverBasinMap from "./component/Nadi Darshan/riverBasinMap";


const theme = createTheme({
  typography: {
    fontFamily: ["sans-serif"].join(","),
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route
              exact
              path="/getInvolvedMenu"
              element={<GetInvolvedPage />}
            />
            <Route exact path="/membership" element={<Membership />} />
            <Route exact path="/internship" element={<Internship />} />
            <Route exact path="/volunteer" element={<Volunteer />} />
            <Route exact path="/contactMenu" element={<Contact />} />
            <Route exact path="/testing" element={<Testing />} />
            {/* <Route exact path="/team" element={ <Team /> } /> */}
            <Route exact path="/about" element={ <AboutBNP /> } />
            <Route exact path="/gallery" element={ <Gallery />} />
            <Route exact path="/programmesMenu" element={ <ProgramPage /> } />
            <Route exact path="/values" element={ <OurValues /> } />
            <Route exact path="/partners" element={ <Partners /> } />
            <Route exact path="/mission" element={ <MissionVision /> } />
            <Route exact path="/history" element={ <History /> } />
            <Route exact path="/document" element={ <PdfDocument /> } />
            <Route exact path="/nadiDarshanMenu" element={ <NadiPortal /> } />
            <Route exact path="/coreteam" element={ <CoreTeam /> } />
            <Route exact path="/advisors" element={ <Advisors /> } />
            <Route exact path="/technicaladvisor" element={ <TechAdvisors /> } />
            <Route exact path="/rivervideo" element={ <RiverVideo /> } />
            <Route exact path="/success-stories" element={ <SuccessStories/> } />
            <Route exact path="/about-logo" element={ <AboutLogo /> } />
            <Route exact path="/newsletter" element={ <Newsletter /> } />
            <Route exact path="/publication" element={ <Publication /> } />
            <Route exact path="/learning" element={ <Learning /> } />
            <Route exact path="/river-gallery" element={ <RiverGallery /> } />
            <Route exact path="/faqs" element={ <Faqs /> } />
            <Route exact path="/career" element={ <Career /> } />
            <Route exact path="/factsheet" element={ <Factsheet /> } />
            <Route exact path="/inspiration" element={ <Inspiration /> } />
            <Route exact path="/state-heads" element={ <StateHeads /> } />
            <Route exact path="/need-help" element={ <NeedHelp /> } />
            <Route exact path="/patron" element={ <Patron /> } />
            <Route exact path="/river-basin-map" element={ <RiverBasinMap /> } />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
