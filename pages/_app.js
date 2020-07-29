import React from 'react';
import App, { Container } from 'next/app';
 
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'animate.css';
config.autoAddCss = false;
 
import { faBars, faHome, faBriefcase, faCaretLeft, 
        faCaretRight, faCaretDown
} from '@fortawesome/free-solid-svg-icons';
import { fab, faTwitter, faFacebook, faInstagram, 
        faGithub, faLinkedin 
} from '@fortawesome/free-brands-svg-icons'
 
library.add(faBars, faHome, faBriefcase, fab, faTwitter, faFacebook, faInstagram, 
  faGithub, faLinkedin, faCaretLeft, faCaretRight, faCaretDown);
 
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}
 
export default MyApp;