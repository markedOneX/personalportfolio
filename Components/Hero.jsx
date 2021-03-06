import { hero, Headshot } from "../styles/heroStyle.module.scss";
import headshot from "../public/Headshot.png";
import Image from "next/image";

function Hero() {
  return (
    <div className={hero} id="hero">
      <div className="heroDes">
        <h1 style={{ fontWeight: "400", fontSize: "3rem" }}>
          Hey, <br />
          I&apos;m Shubham
        </h1>
        <h2 style={{ color: "rgb(253, 130, 82)" }}>Web Developer</h2>
        <h3
          style={{
            fontWeight: "lighter",
            fontSize: "20px",
            wordBreak: "keepAll",
            width: "30rem",
          }}
        >
          I&apos;m a web developer with expertise in frontend and exposure to
          backend and database technlogies. I can create a fully responsive
          dynamic website for you using high level experience and development
          knowledge in web design, producing quality work.
        </h3>
        <div
          style={{
            marginTop: "2rem",
          }}
        >
          <a
            href="#footer"
            style={{
              padding: "0.7rem",
              background: "white",
              borderRadius: "10px",
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            Hire Me!
          </a>
        </div>
      </div>
      <div
        className={Headshot}
        style={{ filter: "drop-shadow(47px 26px 0px #FFBD38)" }}
      >
        <Image src={headshot} alt="My headshot" />
      </div>
    </div>
  );
}

export default Hero;
