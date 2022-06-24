import {
  projects,
  wrapper,
  proCard,
  proTags,
  liveButtons,
  btn,
} from "../styles/projectStyle.module.scss";
import { titles } from "../styles/Main.module.scss";
import dataProject from "../Components/Data/dataProject";
import Head from "next/head";

function allprojects() {
  return (
    <div className={projects}>
      <Head>
        <title>Projects | Shubham Adke</title>
      </Head>
      <div className={titles}>
        <h2>PROJECTS</h2>
      </div>
      <div className={wrapper}>
        {dataProject.map(({ id, title, description, image, tags, visit }) => (
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
    </div>
  );
}

export default allprojects;
