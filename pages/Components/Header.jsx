import {
  header,
  logo,
  navlinks,
  socialHeader,
} from "../../styles/Main.module.scss";
import Link from "next/link";

import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <div className={header}>
      <div className={logo}>
        <Link href="/">
          <a>
            Shubham Adke
            {/* <Image src={newlogo} width="50px" height="50px" /> */}
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
