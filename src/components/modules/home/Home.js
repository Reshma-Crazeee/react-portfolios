import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home(){
    return(
        <div className="container">
            <div className="inner">
                <div className="intro">Hi,<div className="iam"> I am Reshma Kandregula</div></div>
                <div className="role">A Front-end Developer</div>
                <div className="tagline">Get Ready to turn ideas into reality</div >
                <div className="btns">
                    <Link to="#Contact">
                    <button className="btn hire-me">Hire Me</button>
                    </Link>
                    <a href="resume.pdf" download="Reshma resume.pdf ">
                    <button className="btn get-resume">Get Resume</button>
                    </a>
                </div>
            </div>
            <div className="prof-pic">
                <div className="prof-img">

                </div>
            </div>
        </div>
    )
}