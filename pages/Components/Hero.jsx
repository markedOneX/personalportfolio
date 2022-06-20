import { hero, Headshot } from "../../styles/Main.module.scss";
import headshot from "./Assets/Headshot.png";
import Image from "next/image";

function Hero() {
  return (
    <div className={hero} id="hero">
      <div>
        <h1 style={{ fontWeight: "400", fontSize: "3rem" }}>
          Hey, <br />
          I'm Shubham
        </h1>
        <h2 style={{ color: "rgb(247, 103, 20)" }}>MERN Stack Developer</h2>
        <h3 style={{ fontWeight: "lighter", fontSize: "20px" }}>
          High level experience in web design and development <br />
          knowledge producing quality work.
        </h3>
      </div>
      <div
        style={{
          filter: "drop-shadow(47px 26px 0px #FFBD38)",
          width: "25rem",
        }}
      >
        <Image src={headshot} />
      </div>
    </div>
  );
}

export default Hero;
