import { Component } from "react";
import './Navbar.css';
import { Link } from "react-scroll";

export default class Menu extends Component{
    state={
        choose:false
    }
    toggle=()=>{
        const val = this.state.choose;
        this.setState({choose:!val});
    }
    render(){
        return(
            <div>
                <button className="cross" onClick={this.toggle} />
                    {
                        this.state.choose ? (
                <div className="menu">
                    <div className="list_box">   
                        <div className="dissappear">x</div>
                        <ul>
                            <li className="items-icons"><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li><hr/>
                            <li className="items-icons"><Link to="about" spy={true} smooth={true}>About</Link></li><hr/>
                            <li className="items-icons"><Link to="portfolio" spy={true} smooth={true}>Portfolio</Link></li><hr/>
                            <li className="items-icons"><Link to="resume" spy={true} smooth={true}>Resume</Link></li><hr/>
                            <li className="items-icons"><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
                        </ul>
                    
                    </div>
                </div>):(null)}
            </div>
        )
    }
}