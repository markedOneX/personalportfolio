import {
  titles,
  technologies,
  techCard,
  highlight,
} from "../../styles/techStyle.module.scss";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";

function Technologies() {
  return (
    <section id="technologies">
      <div style={{ textAlign: "center" }}>
        <h1 className={titles}>TECH STACK</h1>
      </div>
      <div className={technologies}>
        <div className={techCard}>
          <div>
            <FaReact size="5rem" />
          </div>
          <h3>Frontend</h3>
          <div>
            <p>
              Experience With{" "}
              <span className={highlight}>
                React, Next.js, Redux, Javascript, Bootstrap
              </span>
            </p>
          </div>
        </div>
        <div className={techCard}>
          <div>
            <FaNodeJs size="5rem" />
          </div>
          <h3>Backend</h3>
          <div>
            <p>
              Experience With <span className={highlight}>Node.js</span>
            </p>
          </div>
        </div>
        <div className={techCard}>
          <div>
            <FiDatabase size="5rem" />
          </div>
          <div>
            <h3>Database</h3>
          </div>

          <div>
            <p>
              Experience With{" "}
              <span className={highlight}>MongoDB, Firebase</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
