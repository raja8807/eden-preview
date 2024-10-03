import React from "react";
import BannerSection from "./sections/banner/banner";
import FlavoursSection from "./sections/flavours/flavours";
import SpecsSection from "./sections/specs/specs";
import OurFlavours from "./sections/our_flavours/our_flavours";
import CardsSection from "./sections/cards/cards";
import IngredientsSection from "./sections/ingredients/ingredients";
import LocationsSection from "./sections/locations/locations";
import TestimonialsSection from "./sections/testimonials/testimonials";

const HomeScreen = () => {
  return (
    <div>
      <BannerSection />
      <FlavoursSection />
      <SpecsSection />
      <OurFlavours />
      <CardsSection />
      <IngredientsSection/>
      <LocationsSection/>
      <TestimonialsSection/>
    </div>
  );
};

export default HomeScreen;
