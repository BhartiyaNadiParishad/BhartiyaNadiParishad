import { Box, Typography, styled } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import img4 from '../assets/riverDark.jpg'
import img3 from '../assets/projects.jpg'
import img2 from '../assets/partners.jpg'
import img1 from '../assets/members.jpg'



const CustomGrid2 = styled(Grid2)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 200,
    gap: 8,
    borderRadius: "100%",

})

export default function WorkImpact() {
    return (
        <Box sx={{padding: "60px 10%"}}>
            <Box sx={{ marginBottom: "60px", width: '100%' , display: 'flex', justifyContent: 'center', flexDirection: 'column' , alignItems: 'center'}}>
                <Typography variant="h3" gutterBottom style={{fontWeight: 'bold'}}> 
                    Our work Impact
                </Typography>
                <Typography variant="h6" gutterBottom  style={{fontSize: '18px', textAlign: "center"}}>
                    Here, we aim to provide you with valuable insights and information about the council's activities, initiatives, and achievements.
                </Typography>
            </Box>
            <Grid2 container justifyContent={'space-around'} columnGap={2} rowGap={2} >
                <CustomGrid2  sx={{
                            backgroundImage: `url(${img1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            }}>
                    <img src="src\assets\Icons\members.png" height={45} width={45} />
                    <Typography variant='h5' sx={{fontWeight: "bold", color:"white"}} >1250</Typography>
                    <Typography variant='h6' sx={{fontSize: "18px" ,fontWeight: "bold", color:"white"}} >Members</Typography>
                </CustomGrid2>
                <CustomGrid2  sx={{
                            backgroundImage: `url(${img2})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            }}>
                    <img src="src\assets\Icons\partners.png" height={45} width={45} />
                    <Typography variant='h5' sx={{fontWeight: "bold", color:"white"}} >531</Typography>
                    <Typography variant='h6' sx={{fontSize: "18px" ,fontWeight: "bold", color:"white"}} >Partners</Typography>
                </CustomGrid2>
                <CustomGrid2  sx={{
                            backgroundImage: `url(${img3})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            }}>
                    <img src="src\assets\Icons\projects.png" height={45} width={45} />
                    <Typography variant='h5' sx={{fontWeight: "bold", color:"white"}} >163</Typography>
                    <Typography variant='h6' sx={{fontSize: "18px" ,fontWeight: "bold", color:"white"}} >Projects</Typography>
                </CustomGrid2>
                <CustomGrid2  sx={{
                            backgroundImage: `url(${img4})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            }}>
                    <img src="src\assets\Icons\river.png" height={45} width={45} />
                    <Typography variant='h5' sx={{fontWeight: "bold", color:"white"}} >215</Typography>
                    <Typography variant='h6' sx={{fontSize: "18px" , fontWeight: "bold", color:"white"}} >Rivers Covered</Typography>
                </CustomGrid2>
            </Grid2>
        </Box>
    )
}
