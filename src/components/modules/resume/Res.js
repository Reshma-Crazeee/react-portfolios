import React from "react";
import './Resume.css';

export default function Res(props) {
    return(
        <div>
            <div className="line__flex">
                <div className="marginLine"></div>
                <div className="sr__role">{props.university}</div>
                <div className="year__res year">{props.year}</div>
            </div>
            <div className="ver__line">
                <div className="tag__res">{props.clg}</div>
                <div className="tag__res">{props.specilization}</div>
                <div className="tag__res">{props.marks}</div>
            </div> 
        </div>
    )
}