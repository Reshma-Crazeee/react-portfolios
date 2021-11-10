import React from 'react';
import { Component } from 'react';
import imgSrc1 from '../../images/one1.png';
import imgSrc2 from '../../images/two2.png';
import imgSrc3 from '../../images/three3.png';
import imgSrc4 from '../../images/four4.png';
import imgSrc5 from '../../images/five5.png';
import imgSrc6 from '../../images/six6.png';
import './Portfolio.css';

export default class Portfolio extends Component{
    render(){
    return(
        <div className="portfolio">
           <div className="port__role">My Portfolio</div>
            <p className="color__port"/>
            <div className="port__line">
                <a href="https://reshma-crazeee.github.io/Clock-Project/">
                    <img src={imgSrc1} className="violet box" alt="violet"></img>
                </a>
                <a href="https://reshma-crazeee.github.io/todo-UI-mobile/">
                    <img src={imgSrc2} className="gray box" alt="gray"></img>
                </a>
                <a href="https://reshma-crazeee.github.io/css6/">
                    <img src={imgSrc3} className="yellow box" alt="yellow"></img>
                </a>
                <a href="https://reshma-crazeee.github.io/css5/">
                    <img src={imgSrc4} className="navyblue box" alt="navyblue"></img>
                </a>
                <a href="https://reshma-crazeee.github.io/My-project/">
                    <img src={imgSrc5} className="pink box" alt="pink"></img>
                </a>
                <a href="https://reshma-crazeee.github.io/Todo-Js/">
                    <img src={imgSrc6} className="blue box" alt="blue"></img>
                </a>
            </div>
        </div>
    )
}
}