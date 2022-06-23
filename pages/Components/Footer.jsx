import {
  footer,
  connects,
  socialFooter,
} from "../../styles/footerStyle.module.scss";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div className={footer} id="footer">
      <div>
        <h1>Let's talk about how we can work together?</h1>
      </div>
      <div className={connects}>
        <a href="tel:9405266316">
          <FiPhoneCall size="2rem" />
        </a>

        <a href="mailto:shubhamadke@gmail.com">
          <AiOutlineMail size="2rem" />
        </a>
      </div>
      <div className={socialFooter}>
        <div>
          <h3>Social Handles</h3>
        </div>
        <div>
          <a href="https://github.com/markedOneX" target="_blank">
            <GoMarkGithub size="2rem" />
          </a>
          <a href="https://www.linkedin.com/in/shubham-adke/" target="_blank">
            <FaLinkedin size="2rem" />
          </a>
          <a href="https://www.facebook.com/shubham.adke/" target="_blank">
            <RiFacebookCircleLine size="2rem" />
          </a>
        </div>
      </div>
      <div>©2022 All rights reserved. Shubham Adke</div>
    </div>
  );
}

export default Footer;
