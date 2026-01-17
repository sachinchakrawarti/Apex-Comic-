import React from "react";
import HeroSection_1 from "./components/HeroSection_1.jsx";
import HeroSection_2 from "./components/HeroSection_2.jsx";
import CharacterCarousel from "./components/CharacterCarousel.jsx";

function Home() {
  return (
    <>
      <HeroSection_1 />
      <HeroSection_2 />
      <CharacterCarousel />
    </>
  );
}

export default Home;
