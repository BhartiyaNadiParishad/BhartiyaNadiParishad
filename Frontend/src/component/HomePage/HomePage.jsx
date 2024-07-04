import DrawerAppBar from "./drawer";
import Founder from "./founder";
import { Testimonials } from "./testimonial";
import Programs from "./programs";
import WorkImpact from "../AboutUs/workImpact";
import Footer from "../footer";
import FrontDisplay from "./frontDisplay";
import Video from "./video";
import Quote from "./quote";
import News from "./news";
import { Box } from "@mui/material";

export default function HomePage() {
  return (
    <Box sx={{ position: "relative" }}>
      <DrawerAppBar />
      <FrontDisplay />
      <Quote />
      <Founder />
      <Video />
      <Testimonials />
      <Programs />
      <News />
      <WorkImpact />
      <Footer />
    </Box>
  );
}
