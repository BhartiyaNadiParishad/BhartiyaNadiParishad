import { useState } from 'react'
import img from './assets/background9.png'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomePage from './component/HomePage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetInvolvedPage from './component/GetInvolved/getInvolvedPage';
import Internship from './component/GetInvolved/internship';
import Membership from './component/GetInvolved/membership';
import Volunteer from './component/GetInvolved/volunteer';


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
            <Route exact path="/getInvolved" element={ <GetInvolvedPage />} />
            <Route exact path="/membership" element={ <Membership /> } />
            <Route exact path="/internship" element={ <Internship />} />
            <Route exact path="/volunteer" element={ <Volunteer />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
