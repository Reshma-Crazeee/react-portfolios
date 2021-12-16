import React from "react";
import { Link } from "react-scroll";
import resume from "./Resume.pdf";
import "./Home.css";

export default function Home() {
  return (
    <div className="container">
      <div className="inner">
        <div className="intro">
          Hi,<div className="iam"> I am Reshma Kandregula</div>
        </div>
        <div className="role">A Front-end Developer</div>
        <div className="tagline">Get Ready to turn ideas into reality</div>
        <div className="btns">
          <Link to="contact" spy={true} smooth={true}>
            <button className="btn hire-me">Hire Me</button>
          </Link>
          <a
            href={resume}
            download="Reshma Resume"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn get-resume">Get Resume</button>
          </a>
        </div>
      </div>
      <div className="prof-pic">
        <div className="prof-img"></div>
      </div>
    </div>
  );
}
