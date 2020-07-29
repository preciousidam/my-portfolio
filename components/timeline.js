import React, { useState } from 'react';
import 'react-vertical-timeline-component/style.min.css';
import VizSensor  from 'react-visibility-sensor';



export function MyTimeLine({data}){
    const colors = ['#089de3', '#e3089d', '#e34e08', '#08e34e'];
    return (
        <div className="MyTimeLine">
            <span className="vertical-line"></span>
            {
                data.map((element, id) => {
                    return(<TimelineElement
                        key={id} 
                        date={element.date}
                        title={element.title}
                        description={element.desc}
                        site={element.site}
                        push={ id % 2 == 0 ? 'left' : 'right' }
                        color={colors[id%colors.length]}
                    />)
                })
            }
        </div>
    );
}

export function TimelineElement(props){

    const [visible, setVisible] = useState(false);
    //const icon = props.push === 'left'? 'caret-right' : 'caret-left';
    //const iconClass = props.push === 'left'? 'caretLeft' : 'caretRight';
    const animate = props.push === 'left'? 'animate__slideInLeft': 'animate__slideInRight'

    return (
        <VizSensor
            partialVisibility
            onChange={isVisible => {
                if(visible === false){
                    setVisible(isVisible);
                }
            }}
        >
            <div className={`timeline-container `}>
                <span className="indicator" style={{backgroundColor: props.color}}></span>
                <div className={`timeline-element ${props.push} animate__animated ${visible ? animate: ''}`} style={{borderColor: props.color}}>
                    
                    <p className="timeline-date">{props.date}</p>
                    <h3 className="timeline-title" style={{color: props.color}} >{props.title}</h3>
                    <p className="timeline-description">{props.description}</p>
                    <a className="link-to-project" target="blank" href={props.site.link}>{props.site.title}</a>
                </div>
            </div>
        </VizSensor>
    );
}