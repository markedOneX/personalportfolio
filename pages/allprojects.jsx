import {
  projects,
  wrapper,
  proCard,
  proTags,
  liveButtons,
  btn,
} from "../styles/projectStyle.module.scss";
import { titles } from "../styles/Main.module.scss";
import { ProjectData } from "./Components/Projects/ProjectData";

function allprojects() {
  return (
    <div className={projects}>
      <div className={titles}>
        <h2>PROJECTS</h2>
      </div>
      <div className={wrapper}>
        {ProjectData.map(({ id, title, description, image, tags, visit }) => (
          <div className={proCard} key={id}>
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
        ))}
      </div>
    </div>
  );
}

export default allprojects;
