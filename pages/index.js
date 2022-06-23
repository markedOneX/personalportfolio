import Hero from "./Components/Hero";
import Photoshop from "./Components/Photoshop/Photoshop";
import Projects from "./Components/Projects/HeroProject";
import Technologies from "./Components/Technologies";

export default function Home() {
  return (
    <>
      <Hero />
      <Technologies />
      <Projects />
      <Photoshop />
    </>
  );
}
