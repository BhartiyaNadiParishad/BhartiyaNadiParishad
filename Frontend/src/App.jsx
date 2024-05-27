import { useState } from 'react'
import img from './assets/background9.png'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomePage from './component/HomePage/HomePage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetInvolvedPage from './component/GetInvolved/getInvolvedPage';
import Internship from './component/GetInvolved/internship';
import Membership from './component/GetInvolved/membership';
import Volunteer from './component/GetInvolved/volunteer';
import Contact from './component/contactUs/contact';
import Testing from './component/testing';
import Team from './component/Team/teamPage';
import AboutBNP from './component/about';
import Gallery from './component/gallery';
import ProgramPage from './component/ourProgramPage';
import OurValues from './component/ourValues';
import Partners from './component/AboutUs/Partners';
import MissionVision from './component/AboutUs/missionVision';
import History from './component/AboutUs/history';
import PdfDocument from './component/Resouces/Documents/document';
import NadiPortal from './component/Nadi Darshan/nadiPortal';


const theme = createTheme({
  typography: {
    fontFamily: [
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes >
            <Route exact path="/" element={ <HomePage />} />
            <Route exact path="/getInvolvedMenu" element={ <GetInvolvedPage />} />
            <Route exact path="/membership" element={ <Membership /> } />
            <Route exact path="/internship" element={ <Internship />} />
            <Route exact path="/volunteer" element={ <Volunteer />} />
            <Route exact path="/contactMenu" element={ <Contact /> } />
            <Route exact path="/testing" element={ <Testing /> } />
            <Route exact path="/team" element={ <Team /> } />
            <Route exact path="/about" element={ <AboutBNP /> } />
            <Route exact path="/gallery" element={ <Gallery />} />
            <Route exact path="/programmesMenu" element={ <ProgramPage /> } />
            <Route exact path="/values" element={ <OurValues /> } />
            <Route exact path="/partners" element={ <Partners /> } />
            <Route exact path="/mission" element={ <MissionVision /> } />
            <Route exact path="/history" element={ <History /> } />
            <Route exact path="/document" element={ <PdfDocument /> } />
            <Route exact path="/nadiDarshanMenu" element={ <NadiPortal /> } />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
