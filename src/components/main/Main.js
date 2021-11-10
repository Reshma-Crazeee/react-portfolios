import React from 'react';
import { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Home from '../modules/home/Home';
import About from '../modules/about/About';
import Portfolio from '../modules/portfolio/Portfolio';
import Resume from '../modules/resume/Resume';
import Testimonial from '../modules/testimonial/Testimonial';
import Contact from '../modules/contact/Contact';
import Footer from '../modules/footer/Footer';

export default class Main extends Component{
    render(){
        return(
            <div className="main">
                   
                    <Navbar />
                    <Home />
                    <About />
                    <Portfolio />
                    <Resume />
                    <Testimonial />
                    <Contact />
                    <Footer />
                
            </div>
        )
    }
}