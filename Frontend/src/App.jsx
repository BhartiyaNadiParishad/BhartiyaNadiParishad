import { useState } from 'react'
import img from './assets/background9.png'
import './App.css'
import DrawerAppBar from './component/drawer'
import Vision from './component/vision'
import { Box, Typography } from '@mui/material'
import Footer from './component/footer'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Testimonials } from './component/testimonial'
import Video from './component/video'
import Programs from './component/programs'
import WorkImpact from './component/workImpact'
import GetInvolved from './component/getInvolved'
import Founder from './component/founder'
import video from "./assets/bgvideo.mp4"



const theme = createTheme({
  typography: {
    fontFamily: [
      'sans-serif',
    ].join(','),
  },
});

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider theme={theme}>
        <DrawerAppBar />
        <Box px={4}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '97vh',
            overflow: 'hidden' // Ensure the video doesn't overflow its container
          }}
        >
          <video
            autoPlay
            loop
            muted
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              overflow: "hidden",
              objectFit: 'cover', // Similar to background-size: cover
              zIndex: '-1' // Ensure the video is behind the content
            }}
          >
            <source src={video} type="video/mp4" />
            {/* Add additional source elements for different video formats if needed */}
          </video>
          <div style={{
            padding: '20px',
            borderRadius: '10px'
          }}>
            <Typography mb={1} variant='h5' style={{ fontSize: "28px", fontWeight: 'bold', color: 'white', textAlign: "center" }}>
              <q>समृद्धभारतस्य कृते निर्मलानि निर्बाधानि च नद्यः</q>
            </Typography>
            <Typography variant='h5' style={{ fontSize: "28px", color: 'white', textAlign: "center" }}>
              (समृद्ध भारत के लिए निर्मल व अविरल नदियां)
            </Typography>
            <Typography variant='h5' style={{ fontSize: "28px", color: 'white', textAlign: "center" }}>
              <q>Clean and uninterrupted rivers for prosperous India</q>
            </Typography>
          </div>
        </Box >

        <Vision />
        <Founder />
        <Video />
        <Testimonials />
        <Programs />
        <GetInvolved />
        <WorkImpact />
        <Footer />
      </ThemeProvider >
    </>
  )
}

export default App
