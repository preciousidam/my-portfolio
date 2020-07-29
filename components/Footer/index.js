import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { MessageForm } from '../contact';

export default function Footer(){
    return (
        <footer id="footer" className="container-fluid">
            <div className="container" id="footer-container">
                <div className="row">
                    <div className="col-md-6">
                        <header id="contact-header-cont">
                            <h4 id="contact-header">Contact Me</h4>
                            <div className="underline-inverse"></div>
                            <p className="sub">Please leave me a message and I will get back to you</p>
                        </header>
                        <MessageForm />
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
            <div id="bottom-footer">
                <div id="socials-container-footer">
                    <ul id="socials">
                        <li className="social-icons-footer"><a href='https://github.com' className="btn pres-footer github" target="blank"><FontAwesomeIcon icon={['fab',"github"]} size="lg" /></a></li>
                        <li className="social-icons-footer"><a href='https://twitter.com' className="btn pres-footer twitter" target="blank"><FontAwesomeIcon icon={['fab',"twitter"]} size="lg" /></a></li>
                        <li className="social-icons-footer"><a href='https://facebook.com' className="btn pres-footer facebook" target="blank"><FontAwesomeIcon icon={['fab',"facebook"]} size="lg" /></a></li>
                        <li className="social-icons-footer"><a href='https://instagram.com' className="btn pres-footer instagram" target="blank"><FontAwesomeIcon icon={['fab',"instagram"]} size="lg" /></a></li>
                        <li className="social-icons-footer"><a href='https://linkedin.com' className="btn pres-footer linkedin" target="blank"><FontAwesomeIcon icon={['fab',"linkedin"]} size="lg" /></a></li>
                    </ul>
                </div>
                <div>
                    <p id="copyright">IDAM EBUBECHUKWU &copy; 2020</p>
                </div>
            </div>
        </footer>
    );
}