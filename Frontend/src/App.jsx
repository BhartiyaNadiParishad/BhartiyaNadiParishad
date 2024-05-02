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



const theme = createTheme({
  typography: {
    fontFamily: [
      'Comfortaa', 
      'Arial', // Fallback font
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
                  backgroundImage: `url(${img})`, 
                  height: '93vh', 
                  backgroundSize: 'cover'
                  }}>
          <Typography mb={1} variant='h4' 
                      style={{fontWeight: 'bold', color: 'white' ,fontFamily: 'Comfortaa'}}>
            Riviving Rivers, Reviving Hopes
          </Typography>
          <Typography variant='h4'
                      style={{fontWeight: 'bold', color: 'white' ,fontFamily: 'Comfortaa'}}>
            Ecosystem Revitalization
          </Typography>
        </Box>
        <Vision />
        <Founder />
        <Video />
        <Testimonials />
        <Programs />
        <WorkImpact />
        <GetInvolved />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
