import  { useRef } from "react";
import DrawerAppBar from "../drawer";
import Founder from "./founder";
import { Testimonials } from "./testimonial";
import Programs from "./programs";
import GetInvolved from "./getInvolved";
import WorkImpact from "./workImpact";
import Footer from "../footer";
import FrontDisplay from "./frontDisplay";
import Video from "./video";


export default function HomePage() {

  const founder = useRef(null);
  const scrollToSection = () => {
    if (founder.current) {
        founder.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <DrawerAppBar founderScroll={scrollToSection} />
      <FrontDisplay />
      {/* <Vision /> */}
      <Founder ref={founder}/>
      <Video />
      <Testimonials />
      <Programs />
      <GetInvolved />
      <WorkImpact />
      <Footer />
    </>
  );
}
