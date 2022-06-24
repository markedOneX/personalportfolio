import Link from "next/link";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import {
  header,
  logo,
  navlinks,
  socialHeader,
} from "../styles/headerStyle.module.scss";

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
          <Link href="./#technologies">
            <a>Technologies</a>
          </Link>
        </div>
        <div>
          <Link href="/allprojects">
            <a>Projects</a>
          </Link>
        </div>
        <div>
          <Link href="./#footer">
            <a>Connect</a>
          </Link>
        </div>
      </div>
      <div className={socialHeader}>
        <div>
          <a
            href="https://www.linkedin.com/in/shubham-adke/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size="2rem" />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/markedOneX"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoMarkGithub size="2rem" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
