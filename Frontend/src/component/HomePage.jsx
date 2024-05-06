import React from 'react'
import DrawerAppBar from './drawer'
import Vision from './vision'
import Founder from './founder'
import { Testimonials } from './testimonial'
import Programs from './programs'
import GetInvolved from './getInvolved'
import WorkImpact from './workImpact'
import Footer from './footer'
import FrontDisplay from './frontDisplay'
import Video from './video'

export default function HomePage() {
    return (
        <>
            <DrawerAppBar />
            <FrontDisplay />
            <Vision />
            <Founder />
            <Video />
            <Testimonials />
            <Programs />
            <GetInvolved />
            <WorkImpact />
            <Footer />
        </>
    )
}
