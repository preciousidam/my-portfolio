import React, {useState, useLayoutEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from "next/router";

export default function header(props){

    const router = useRouter();
    const [scrollPosition, setSrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    };

    useLayoutEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    return(
        <header id={scrollPosition >= 105 ? "navbar-solid" : "navbar"}>
            <nav id="navbar-content">
                <ul id="navbar-content-ul">
                    <li className={`links ${router.pathname == '/' ? 'active' : ''}`}><Link href="/"><a><FontAwesomeIcon icon="home" /></a></Link></li>
                    <li className={`links ${router.pathname == '/#about' ? 'active' : ''}`}><Link href="/#about"><a>About</a></Link></li>
                    <li className={`links ${router.pathname == '/#portfolio' ? 'active' : ''}`}><Link href="/#portfolio"><a>Portfolio</a></Link></li>
                    <li className={`links ${router.pathname == '/#services' ? 'active' : ''}`}><Link href="/#services"><a>Services</a></Link></li>
                    <li className={`links ${router.pathname == '/#reviews' ? 'active' : ''}`}><Link href="/#reviews"><a>Reviews</a></Link></li>
                    <li className={`links ${router.pathname == '/#contact' ? 'active' : ''}`}><Link href="/#contact"><a>Contact</a></Link></li>
                </ul>
            </nav>
        </header>
    );
}