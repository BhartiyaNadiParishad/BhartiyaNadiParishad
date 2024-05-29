import MainLayout from "./Layout/mainLayout";
import HeroSection from "./Layout/contentLayout/heroSection";

export default function AboutLogo() {
  return (
    <MainLayout>
      <HeroSection backgroundImage={bg} title="About us" />
    </MainLayout>
  );
}
