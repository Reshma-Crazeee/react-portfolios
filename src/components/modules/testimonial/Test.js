import React from 'react';
import './Testimonial.css';

export default function Test(props){

    return(
        <div className="row_-test">
            <div className="box1 box__test">
                <div className="col__test test1">
                    <img src={props.imgSrc} alt="pic" />
                </div>
                <div className="author__test">{props.author}</div>
                <div className="company__test">{props.comp}</div>
                <div className="desc__test">Loreum Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</div>
            </div>
           
        </div>

    )
}