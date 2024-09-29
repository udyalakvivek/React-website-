import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import Contact from "./Contact";
import { useGlobalContext } from "./context";
import Projects from "./Projects";
import Skills from "./Skill";

const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <>
      <HeroSection />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
