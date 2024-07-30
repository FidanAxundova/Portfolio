import React from "react";
import "./Home.scss";
import { Typed, ReactTyped } from "react-typed";
import Foto from "../../assets/image/emoji.png";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Home = () => {
  return (
    <section>
      <div className="home">
        <div className="home-text">
          <ReactTyped
            style={{ fontSize: "40px" }}
            strings={[" Hi, I'm Fidan. "]}
            loop
            typeSpeed={40}
            showCursor={false}
            onComplete={(self) => {
              self.backspaceAll();
            }}
          />
          <span>- Who I Am </span>

          <p>
            I’m a front-end developer specializing in creating engaging web
            interfaces with HTML, CSS, JavaScript and React. I’m passionate
            about crafting responsive designs and am eager to continue growing
            my skills in front-end development.
          </p>
          <div className="social-media-account">
            <a href="https://github.com/FidanAxundova" target="_blank">
              <IoLogoGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/fidan-meftahetdinova-0667342a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="" target="_blank">
              <FaTelegram />
            </a>
            {/* <a href="">
              <GrInstagram />
            </a> */}
          </div>
        </div>
        <div className="image">
          <img src={Foto} alt="foto" />
        </div>
      </div>
    </section>
  );
};

export default Home;
