import HeroSection from "components/HeroSection/HeroSection";
import StatsSection from "components/StatsSection/StatsSection";

const HomePage = () => {
  return (
    <main className="container m-auto flex flex-col gap-6 px-4 pb-4 tablet:px-8 tablet:pb-8 desktop:px-16">
      <HeroSection />
      <StatsSection />
    </main>
  );
};

export default HomePage;
