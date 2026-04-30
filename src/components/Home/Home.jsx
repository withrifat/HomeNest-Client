import HeroSection from "./HeroSection";
import FeaturedPropertiesSection from "./FeaturedPropertiesSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import PopularLocationsSection from "./PopularLocationsSection";
import TestimonialsSection from "./TestimonialsSection";
import useProperties from "../../Hooks/useProperties";

const Home = () => {
  const { properties, isLoading } = useProperties(6);

  return (
    <main className="pb-16">
      <HeroSection />
      <FeaturedPropertiesSection properties={properties} isLoading={isLoading} />
      <WhyChooseUsSection />
      <PopularLocationsSection />
      <TestimonialsSection />
    </main>
  );
};

export default Home;
