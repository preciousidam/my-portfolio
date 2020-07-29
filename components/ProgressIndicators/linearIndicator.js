import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VizSensor  from 'react-visibility-sensor';
import { CSSTransition } from 'react-transition-group';

export function LinearIndicator(props){
    const [visible, setVisible] = useState(false);
    const p = props.progress || 80;
    const pathColor = props.pathColor || "#c6c6c6";
    const color = props.color || "#ff0000";
    const progress = `${p}%`;

    return (
        <VizSensor
            partialVisibility
            onChange={isVisible => {
                if(visible === false){
                    setVisible(isVisible);
                }
            }}
        >
            <div className="indicator-cont">
                <span className="label">{props.label}</span>
                <div className="path" style={{backgroundColor: pathColor }}>
                    <span className="marker" style={{backgroundColor: color, left: `${p-3}%` }}>{p}<FontAwesomeIcon icon="caret-down" color={color} className="caret" /></span>
                    <CSSTransition
                        in={visible}
                        timeout={1000}
                        classNames="progressAnimate"
                    >
                        <span className="progress" style={{backgroundColor: color,}}></span>
                    </CSSTransition>
                    
                </div>
            </div>
        </VizSensor>
    );
}