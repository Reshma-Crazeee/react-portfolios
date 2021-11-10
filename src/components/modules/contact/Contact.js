import React from 'react';
import './Contact.css';

export default function name() {
    return(
        <div className="contact">
            <div className="color-bg">
            <div className="cont__role">Contact me</div>
            <div className="col__cont" /></div>
            <div className="cont__list">
                <div className="cont__row">
                    <div className="cont__col cont1">
                        <div className="connect">
                           <div className="let">Let's connect</div>
                            <div className="p_box">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta...</div>
                            <div className="info">
                                <div className="icon">
                                    <div className="flex_mail">
                                        <i class="far fa-envelope"></i>
                                        <div className="enve">reshmakandregula27@gmail.com</div>
                                    </div>
                                    <div className="flex_mail">
                                        <i class="fas fa-phone-volume"></i>
                                        <div className="enve">+91 9381816118</div>
                                    </div>
                                    <div className="flex_mail">
                                        <i class="fas fa-map-marker-alt"></i>
                                        <div className="enve">Rajeev Street Visakhapatnam, AndhraPradesh 531001</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cont__col cont2">
                        <div className="box__size">
                            <div className="msg">Send me a message</div>
                            <div className="cont__form">
                                <form>
                                    <div className="ht__cont">
                                        <label>First & Last Name <span style={{color:"red"}}> *</span></label>
                                        <br/>
                                        <input type="text" id="name" required />
                                    </div>
                                    <div className="ht__cont">
                                        <label>Phone number<span style={{color:"red"}}> *</span></label>
                                        <br/>
                                        <input type="number"   id="num" required />
                                    </div>
                                    <div className="ht__cont">
                                        <label>Email address <span style={{color:"red"}}> *</span></label>
                                        <br/>
                                        <input type="email" id="mail" required />
                                    </div>
                                    <div className="ht__cont">
                                        <label>Message <span style={{color:"red"}}> *</span></label>
                                        <br/>
                                        <textarea id="text" required placeholder="Your message here..."/>
                                    </div>
                                    <div >
                                       
                                        <button className="sub__cont">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}