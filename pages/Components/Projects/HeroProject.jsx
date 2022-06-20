import {
  projects,
  titles,
  wrapper,
  proCard,
  proTags,
  liveButtons,
  btn,
  seeAll,
} from "../../../styles/Main.module.scss";
import Link from "next/link";
import { ProjectData } from "./ProjectData";

function HeroProject() {
  return (
    <div className={projects}>
      <div>
        <h1 className={titles}>Projects I've worked on in the past:</h1>
      </div>
      <div className={wrapper}>
        {ProjectData.slice(0, 3).map(
          ({ id, title, description, image, tags, visit }) => (
            <div className={proCard} id={id}>
              <div>
                <img src={image} />
              </div>
              <div>
                <h3>{title}</h3>
              </div>
              <div>{description}</div>
              <div className={proTags}>
                {tags.map((e) => (
                  <p>{e}</p>
                ))}
              </div>
              <div className={liveButtons}>
                <a href={visit} className={btn} target="_blank">
                  Check Out
                </a>
              </div>
            </div>
          )
        )}
      </div>
      <Link href="/allprojects">
        <a id={seeAll}>See All</a>
      </Link>
    </div>
  );
}

export default HeroProject;
