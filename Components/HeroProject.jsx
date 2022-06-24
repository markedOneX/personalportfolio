import {
  projects,
  wrapper,
  proCard,
  proTags,
  liveButtons,
  btn,
  seeAll,
} from "../styles/projectStyle.module.scss";
import { titles } from "../styles/Main.module.scss";
import dataProject from "./Data/dataProject";
import Link from "next/link";

function HeroProject() {
  return (
    <div className={projects}>
      <div className={titles}>
        <h2>Projects I&apos;ve worked on in the past:</h2>
      </div>
      <div className={wrapper}>
        {dataProject
          .slice(0, 3)
          .map(({ id, title, description, image, tags, visit }) => (
            <div className={proCard} key={id}>
              <div>
                <img src={image} />
              </div>
              <div>
                <h3>{title}</h3>
              </div>
              <div>{description}</div>
              <div className={proTags}>
                {tags.map((e, i) => (
                  <p key={i}>{e}</p>
                ))}
              </div>
              <div className={liveButtons}>
                <a
                  href={visit}
                  className={btn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check Out
                </a>
              </div>
            </div>
          ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <Link href="/allprojects">
          <a id={seeAll}>See All</a>
        </Link>
      </div>
    </div>
  );
}

export default HeroProject;
