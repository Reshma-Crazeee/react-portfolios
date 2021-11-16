import React from "react";
import './About.css';

export default function About(){
    return(
        <div className="about">
           <div className="box__about">
               <div className="row">
                   <div className="col col__1">
                        <div className="abt__img">

                        </div>
                   </div>
                   <div className="col col__2">
                       <p className="abt__me">About Me</p>
                       <p className="colo__abt"/>
                       <p className="para__1">
                           I'm a web designer & front-end developer . I'm interested in all kinds of visual communication, but my major focus is on designing web, mobile & tablet interfaces.
                       </p>
                       <p className="para__1">
                           I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not pushing pixels, you'll find me cooking, gardening or working out in the park.
                       </p>
                       <div className="lang para__1">
                            Languages/Library/Technology 
                            <div className="lib">
                                <div className="lib__names">HTML&nbsp;&nbsp;&nbsp; CSS 
                                </div>
                                    <i class="fab fa-html5 fa-3x"></i>
                                <i class="fab fa-css3-alt fa-3x"></i>
                                <i class="fab fa-js-square fa-3x"></i>
                                <i class="cib-netlify"></i>                            
                                <i class="fab fa-bootstrap fa-3x"></i>
                                <i class="fab fa-react fa-3x"></i>
                                <i class="fab fa-github fa-3x"></i>
                            </div>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}