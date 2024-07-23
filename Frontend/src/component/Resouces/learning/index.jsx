import React from 'react'
import MainLayout from '../../Layout/mainLayout'
import PDFPreview from '../Documents/pdfViewer'
import bgImg from "../../../assets/bg/bgl-11.jpeg"
import { Box } from '@mui/material'

export default function Learning() {
  return (
    <>
        <MainLayout title="Learning" bgImg={bgImg} position={"center"}>
            <Box p={6}>
                <PDFPreview />
            </Box>
        </MainLayout>
    </>
  )
}
