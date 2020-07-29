import React, {useState} from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import MainLayout from '../Layouts/main';
import Hero from '../components/Hero';
import {Timeline, MyTimeLine} from '../components/timeline';
import { LinearIndicator } from '../components/ProgressIndicators/linearIndicator';

export default function Home(){

    const web = 90;
    const mobile = 95;
    const desktop = 79;
    const DL = 60;

    const data = [
        {site: {link: "https://facebook.com", title: 'Smilesdotcom.ng'},
            title: 'Software Developer',
            desc: 'Creative Direction, User Experience, Visual Design, SEO, Online Marketing',
            date: 'May - June 2020',
        },
        {site: {link: "https://facebook.com", title: 'Smilesdotcom.ng'},
            title: 'Software Developer',
            desc: 'Creative Direction, User Experience, Visual Design, SEO, Online Marketing',
            date: 'May - June 2020',
        },
        {site: {link: "https://facebook.com", title: 'Smilesdotcom.ng'},
            title: 'Software Developer',
            desc: 'Creative Direction, User Experience, Visual Design, SEO, Online Marketing',
            date: 'May - June 2020',
        },
        {site: {link: "https://facebook.com", title: 'Smilesdotcom.ng'},
            title: 'Software Developer',
            desc: 'Creative Direction, User Experience, Visual Design, SEO, Online Marketing',
            date: 'May - June 2020',
        },
        {site: {link: "https://facebook.com", title: 'Smilesdotcom.ng'},
            title: 'Software Developer',
            desc: 'Creative Direction, User Experience, Visual Design, SEO, Online Marketing',
            date: 'May - June 2020',
        },
        {site: {link: "https://facebook.com", title: 'Smilesdotcom.ng'},
            title: 'Software Developer',
            desc: 'Creative Direction, User Experience, Visual Design, SEO, Online Marketing',
            date: 'May - June 2020',
        },
    ]

    const [isOpen, setIsOpen] = useState(false)

    return(
        <MainLayout toogle={!isOpen ? 'slide-out': 'slide-in'}>
            <Hero />
            <section id="about">
                <div id="about-content" className="container">
                    
                    <div className="row">
                        <div className="col-md-6 background-me">

                        </div>
                        <div className="col-md-6 bio">
                            <h4  className="headers">About Me</h4>
                            <div className="underline"></div>`
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                                accusantium doloremque Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                                accusantium doloremque accusantium doloremque accusantium doloremque Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                                accusantium doloremque accusantium doloremque.
                            </p>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                                accusantium doloremque Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                                accusantium doloremque accusantium doloremque accusantium doloremque Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                                accusantium doloremque accusantium doloremque.
                            </p>
                            <div>
                                <button className="btn btn-primary">Download CV</button>
                                <button className="btn btn-outline-secondary">Leave Message</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h5 className="subheaders">Professional Experience</h5>
                            <p id="my-story">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                                accusantium doloremque Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                                accusantium doloremque accusantium doloremque accusantium doloremque Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                                accusantium doloremque accusantium doloremque
                            </p>
                        </div>
                    </div>
                    <div className="row" id="skill">
                        <div className="col-md-6">
                            <LinearIndicator pathColor="#FFF" color="#000" progress={90} label="Design Implementation"/>
                            <LinearIndicator pathColor="#FFF" color="#000" progress={50} label="Design faem"/>
                            <LinearIndicator label="Design Imp"/>
                            <LinearIndicator label="Design Implementation"/>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-sm-3">
                                    <CircularProgressbar
                                        className="skill web"
                                        value={web} 
                                        text={`${web}%`} 
                                    />
                                    <p>Web</p>
                                    
                                </div>
                                <div className="col-sm-3">
                                    <CircularProgressbar
                                        className="skill mobile" 
                                        value={mobile} 
                                        text={`${mobile}%`} 
                                    />
                                    <p>Mobile</p>
                                </div>
                                <div className="col-sm-3">
                                    <CircularProgressbar
                                        className="skill desktop"
                                        value={desktop} 
                                        text={`${desktop}%`} 
                                    />
                                    <p>Desktop</p>
                                </div>
                                <div className="col-sm-3">
                                    <CircularProgressbar
                                        className="skill dl"
                                        value={DL} 
                                        text={`${DL}%`} 
                                    />
                                    <p>Deep Learning</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="work">
                <header id="about-header">
                    <h4  className="headers">Work Experience</h4>
                    <div className="underline"></div>
                </header>
                <div className="container">
                    <MyTimeLine data={data} />
                </div>
            </section>
        </MainLayout>
    );
}