import { Component } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

export default class Menu extends Component{
    state={
        choose:true
    }
    toggle=()=>{
        const val = this.state.choose;
        this.setState({choose:!val});
    }
    render(){
        return(
            <div className="menu">
                <div className="list_box">
                    <button className="cross" onClick={this.toggle} >X
                        {
                            this.state.choose ? "" : ""
                        }
                    </button >
                        { this.state.choose&&(
                    <ul>
                        <li className="items-icons"><Link to="/home">Home</Link></li><hr/>
                        <li className="items-icons"><Link to="/about">About</Link></li><hr/>
                        <li className="items-icons"><Link to="/portfolios">Portfolio</Link></li><hr/>
                        <li className="items-icons"><Link to="/resume">Resume</Link></li><hr/>
                        <li className="items-icons"><Link to="/contact">Contact</Link></li>
                    </ul>
                    )} 
                </div>
            </div>
        )
    }
}