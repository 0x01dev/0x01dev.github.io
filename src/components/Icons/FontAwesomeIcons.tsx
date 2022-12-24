import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faCoffee,
    faHeart,
    faCircleInfo,
    faBasketball,
    faTriangleExclamation,
    faCompactDisc,
    faBell,
    faCog,
    faCompass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

const FontAwesomeIcons: React.FC = () => {
    return (
        <div style={{
            margin: '2rem',
            fontSize: '2rem'
        }}>
            {/* T-shirt sizes */}
            <FontAwesomeIcon icon={faCoffee} size="xs"/>
            <FontAwesomeIcon icon={faCoffee} size="lg"/>
            <br/> <br/>

            {/* X-factor sizing */}
            <FontAwesomeIcon icon={faCoffee} size="2x"/>
            <br/> <br/>

            {/* Rotate */}
            <FontAwesomeIcon icon={faCoffee} rotation={90}/>
            <FontAwesomeIcon icon={faCoffee} rotation={180}/>
            <FontAwesomeIcon icon={faCoffee} rotation={270}/>
            <br/> <br/>

            {/* Flip */}
            <FontAwesomeIcon icon={faCoffee} flip="horizontal"/>
            <FontAwesomeIcon icon={faCoffee} flip="vertical"/>
            <FontAwesomeIcon icon={faCoffee} flip="both"/>
            <br/> <br/>

            <FontAwesomeIcon icon={faHeart} beat/>{' '}
            <FontAwesomeIcon icon={faCircleInfo} beatFade/>{' '}
            <FontAwesomeIcon icon={faBasketball} bounce/>{' '}
            <FontAwesomeIcon icon={faTriangleExclamation} fade/>{' '}
            <br/><br/>


            <FontAwesomeIcon icon={faBell} shake/>{' '}
            <FontAwesomeIcon icon={faCog} spin/>{' '}
            <FontAwesomeIcon icon={faCompass} spin spinReverse/>{' '}
            <FontAwesomeIcon icon={faSpinner} spinPulse/>{' '}
        </div>
    );
}

export default FontAwesomeIcons;