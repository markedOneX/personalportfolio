import { App, container } from "../styles/Main.module.scss";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Photoshop from "./Components/Photoshop/Photoshop";
import Projects from "./Components/Projects/HeroProject";
import Technologies from "./Components/Technologies";

export default function Home() {
  return (
    <div className={App}>
      {/* <Hero />
      <Technologies />
      <Projects />
      <Photoshop /> */}
    </div>
  );
}
