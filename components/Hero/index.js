import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SimpleParticles } from './particles';

export default function Hero(props){
    return (
        <section id="hero" className="container-fluid">
            <div id="hero-content-container">
                <SimpleParticles />
                <div id="hero-content">
                    <img id="me" src="https://media-exp1.licdn.com/dms/image/C5603AQF6rzndzu3ovA/profile-displayphoto-shrink_200_200/0?e=1597881600&v=beta&t=Wu6JQXl2Em7zHv39szpwUJUu-x-8Ll72EVDMAPAEXcY" />
                    <h3 id="name">idam ebubechukwu</h3>
                    <h3 id="proffession">Software Developer</h3>
                    <div className="underline-inverse"></div>
                    <div id="socials-container">
                        <ul id="socials">
                            <li className="social-icons"><a href='https://github.com' className="btn pres github" target="blank"><FontAwesomeIcon icon={['fab',"github"]} size="lg" /></a></li>
                            <li className="social-icons"><a href='https://twitter.com' className="btn pres twitter" target="blank"><FontAwesomeIcon icon={['fab',"twitter"]} size="lg" /></a></li>
                            <li className="social-icons"><a href='https://facebook.com' className="btn pres facebook" target="blank"><FontAwesomeIcon icon={['fab',"facebook"]} size="lg" /></a></li>
                            <li className="social-icons"><a href='https://instagram.com' className="btn pres instagram" target="blank"><FontAwesomeIcon icon={['fab',"instagram"]} size="lg" /></a></li>
                            <li className="social-icons"><a href='https://linkedin.com' className="btn pres linkedin" target="blank"><FontAwesomeIcon icon={['fab',"linkedin"]} size="lg" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}