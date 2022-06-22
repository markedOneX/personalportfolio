import {
  header,
  logo,
  navlinks,
  socialHeader,
} from "../../styles/headerStyle.module.scss";

import Link from "next/link";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <div className={header}>
      <div className={logo}>
        <Link href="/">
          <a>
            <span style={{ color: "rgb(253, 130, 82)" }}>Shubham</span>Adke
          </a>
        </Link>
      </div>
      <div className={navlinks}>
        <div>
          <a href="./#technologies">Technologies</a>
        </div>
        <div>
          <Link href="/allprojects">
            <a>Projects</a>
          </Link>
        </div>
        <div>
          <a href="./#footer">Connect</a>
        </div>
      </div>
      <div className={socialHeader}>
        <div>
          <a href="https://www.linkedin.com/in/shubham-adke/" target="_blank">
            <FaLinkedin size="2rem" />
          </a>
        </div>
        <div>
          <a href="https://github.com/markedOneX" target="_blank">
            <GoMarkGithub size="2rem" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
