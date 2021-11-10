import React from 'react';
import Test from './Test';
import img from './imgs/uncle.jfif';
import img1 from './imgs/lady.jfif';
import img2 from './imgs/guide.png';
import './Testimonial.css';

export default function Testimonial(){
    return(
        <div className="test">
            <div className="test__role">What People say about me</div>
            <p className="underline__color"></p>
            <div className="new__test">
            
                <div>
                    <Test
                        imgSrc ={ img1 }
                        author="Elizabeth Martin" 
                        comp="SaveSpace Inc." 
                    />
                    <div className="alberto">
                    <Test 
                        imgSrc ={ img }
                        author="Alberto Donko" 
                        comp="ScreepApp"
                    />
                    </div>
                    <div className="alberto">
                    <Test 
                        imgSrc ={ img2 }
                        author="Alexander Parkinson" 
                        comp="MyTravel.com"
                    />
                    </div>

                </div>   
                <div className="border__test">
                    <div className="view__test">View more testimonials   </div>
                </div>
            </div>
        </div>
    )
}