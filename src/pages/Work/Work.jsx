import React from "react";
import "./Work.scss";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import hermes from "../../assets/image/hermes.jpeg";
import pradaImg from "../../assets/image/pradaImg.jpeg";
import projectImg from "../../assets/image/projectImg.jpeg";
import { ReactTyped } from "react-typed";

const Work = () => {
  return (
    <div className="works">
      <div className="works-text">
        <ReactTyped
          style={{ fontSize: "40px", fontWeight: "400" }}
          strings={[" My Project "]}
          loop
          typeSpeed={40}
          showCursor={false}
          onComplete={(self) => {
            // Remove the typed animation after completion if needed
            self.backspaceAll();
          }}
        />

        <p>
          In my projects, I have leveraged the power of React, utilizing various
          packages to enhance functionality and user experience. By integrating{" "}
          <span className="packages">tsparticles</span>, I've added visually
          appealing particle effects, giving your applications a dynamic and
          interactive feel. With <span className="packages">react-typed</span>,
          I introduced animated typing effects, adding a polished touch to text
          elements. Navigation across my applications is seamless and efficient
          thanks to <span className="packages">react-router-dom</span>, which
          provides powerful routing capabilities. Lastly,{" "}
          <span className="packages">react-particles</span> brings additional
          particle effects, further enriching the visual aesthetics of my
          projects. Overall, these tools and packages have enabled me to create
          highly engaging and visually captivating applications.
        </p>
        <div className="works-icons">
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
        </div>
      </div>
      <div className="works-img">
        <a href="https://luxuria-label.vercel.app" target="-blank">
          <img src={projectImg} alt="project" />
        </a>

        <a href="https://luxuria-label.vercel.app" target="_blank">
          <img src={pradaImg} alt="project" />
        </a>
        <a href="https://luxuria-label.vercel.app" target="blank">
          <img src={hermes} alt="project" />
        </a>
      </div>
    </div>
  );
};

export default Work;
