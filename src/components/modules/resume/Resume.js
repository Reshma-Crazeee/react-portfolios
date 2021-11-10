import React from 'react';
import './Resume.css';
import Res from './Res';

export default function Resume() {
    return(
        <div className="resume">
            <div className="box__resume">Resume</div>
            <div className="color__res"></div>
            <div className="row__res">
                <div className="col__res1">
                    <div className="res__role">Education</div><hr/>
                    <div className="new__res">
                        <div className="align__row">
                            <Res 
                                university="Jawaharlal Nehru Technological University Kakinada"
                                clg= "Dadi Institute of Enginnering and Technology"
                                specilization= "B.Tech in Computer Science and Engineering"
                                marks= "7.87"
                                year="2016-2020"
                            />
                            <Res
                                university= "Sri Chaitanya Junior College"
                                specilization= "MPC"
                                marks="90%"
                                year= "2014-2016"
                            />
                        </div>
                    </div> 

                    <div className="res__role">Work experience</div><hr/>
                    <div className="align__row">
                        <Res
                            university= "Training for FullStack Web Development"
                            specilization= "Prepbytes"
                            marks= "HTML CSS JavaScript ReactJs"
                            year="2021-present"
                
                        />
                    </div>
                </div>
                <div className="back__res">
                    <div className="col__res2">
                        <div className="img__res"></div>
                    </div>
                    <div className="col__res3">
                        <i class="fab fa-facebook-square" id="i__col"></i>
                        <i class="fab fa-behance-square" id="i__col"></i>
                        <i class="fab fa-dribbble-square" id="i__col"></i>
                        <i class="fab fa-pinterest-square" id="i__col"></i>
                        <i class="fab fa-skype" id="i__col"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}