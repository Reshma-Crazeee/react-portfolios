import React, { Component } from 'react';
import { Link,Routes,Route } from 'react-router-dom';
import About from '../modules/about/About';
import Footer from '../modules/footer/Footer';
import Home from '../modules/home/Home';
import Portfolio from '../modules/portfolio/Portfolio';
import Resume from '../modules/resume/Resume';
import Testimonial from '../modules/testimonial/Testimonial';
import Contact from '../modules/contact/Contact';
import Menu from './Menu';
import './Navbar.css';


export default class Navbar extends Component{
    state={
        play:false
    }
    change=()=>{
        const val = this.state.play;
        this.setState({play:!val});
    }
    render(){
        return(
            <div className="navbar">
               <div className="line">
                <div className="logo-name">Reshma Kandregula</div>
                <nav className="header">
                    <div className="move">
                    <button onClick={this.change} className="menu__bar">
                    <i class="fas fa-bars"></i>
                    </button>
                    {
                        this.state.play ? <Menu /> : null
                    }
                   
                    </div>
                        <ul>
                        <li className="items"><Link to="#home">Home</Link></li>
                        <li className="items"><Link to="#about">About</Link></li>
                        <li className="items"><Link to="#portfolios">Portfolio</Link></li>
                        <li className="items"><Link to="#resume">Resume</Link></li>
                        <li className="items"><Link to="#contact">Contact</Link></li>
                    </ul>
                    <div className="top">
                            <i class="fas fa-times"></i>

                    </div>
                </nav>
                <Routes>
                    <Route path='/home' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/portfolios' element={<Portfolio/>}/>
                    <Route path='/resume' element={<Resume/>} />
                    <Route path='/testimonial' element={<Testimonial/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/footer' element={<Footer/>} />
                </Routes>
               </div>
            
           </div>
       
        )
    }
}