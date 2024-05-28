import DrawerAppBar from "./drawer";
import Founder from "./founder";
import { Testimonials } from "./testimonial";
import Programs from "./programs";
import GetInvolved from "./getInvolved";
import WorkImpact from "../AboutUs/workImpact";
import Footer from "../footer";
import FrontDisplay from "./frontDisplay";
import Video from "./video";
import Quote from "./quote";
import News from "./news";
import VerticalScroll from "../news/verticalScroll";

export default function HomePage() {
  return (
    <>
      <DrawerAppBar />
      <FrontDisplay />
      <Quote />
      <Founder />
      <Video />
      <Testimonials />
      <Programs />
      <News />
      <GetInvolved />
      {/* <WorkImpact /> */}
      <Footer />
    </>
  );
}
