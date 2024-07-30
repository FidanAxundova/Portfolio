import React from "react";
import "./About.scss";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import about3 from "../../assets/image/about3.png";

const about = () => {
  return (
    <section className="about-container">
      <div className="about-text">
        <div className="first-in">
          <h1>
            I speak
            <span> HTML, </span>
            <span> CSS,</span> and
            <span> JavaScript </span> fluently
          </h1>
          <h2>- but don't ask me about my French</h2>
        </div>

        <div className="about-me">
          <h3>
            I'm a front-end developer who loves creating websites that users
            enjoy.
            <br /> I bring a mix of design and coding skills to the table,
            including expertise in Adobe Illustrator.
            <br /> I build websites that look great and work smoothly on any
            device. <br />I collaborate closely with designers to make sure
            <br /> every project meets the client's goals and is easy for users
            to navigate.
            <br /> I'm always eager to learn and tackle new challenges in web
            development.
          </h3>
        </div>
        <div className="skills">
          <h2>SKILLS:</h2>
        </div>
        <div className="icons">
          <div className="HTML">
            {" "}
            <FaHtml5 />
          </div>
          <div className="CSS">
            <FaCss3 />
          </div>
          <div className="React">
            <FaReact />
          </div>
          <div className="JavaScript">
            <RiJavascriptFill />
          </div>
          <div className="Bootstrap">
            <FaBootstrap />
          </div>
          <div className="Adobe ILL">
            <SiAdobeillustrator />
          </div>
          <div className="Adobe pr">
            <SiAdobephotoshop />
          </div>
          <div className="Python">
            <FaPython />
          </div>
        </div>

        <div className="certification-container">
          <h4>Awards</h4>
          <div className="certifications">
            <div className="adobe">
              Udemy - Logo Design Mastery In Adobe Illustrator
            </div>
            <div className="adobe22">Udemy - Adobe Illustrator Mega Course</div>
            <div className="python">Dr Angela Yu - 100 Days of Code Python</div>
            <div className="Mit">MIT Academy - Front-End Developer</div>
          </div>
        </div>
      </div>
      <div className="about-img">
        <img src={about3} alt="java" />
      </div>
    </section>
  );
};

export default about;
