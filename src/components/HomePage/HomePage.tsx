import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faCoffee,
    faCode,
    faFileCode
} from '@fortawesome/free-solid-svg-icons'
import './HomePage.css';
import ShowMarkdown from "../ShowMarkdown";
import changeBodyBackgroundColor from "../../utilities/changeBodyBackgroundColor";

import homepage from './HomePage.md'

const HomePage: React.FC = () => {

    const bodyBackgroundColor = '#BABABA';

    useEffect(() => {
        changeBodyBackgroundColor(bodyBackgroundColor);
    }, [])

    return (
        <div id={'HomePage'}>

            <h1>
                <FontAwesomeIcon icon={faCoffee} size={"xs"}/>
                <FontAwesomeIcon icon={faCode} size={"xs"}/>
                {' '}
                Front-end technologies studies
            </h1>

            <p>
                This is a project for study front-end technologies.
            </p>

            <h2>CSS Frameworks:</h2>

            <div>
                <Link to={'/fomantic-ui'} className={'navLink'}>
                    Fomantic UI
                </Link>
            </div>

            <div>
                <Link to={'/semantic-ui-react'} className={'navLink'}>
                    Semantic UI React
                </Link>
            </div>

            <div>
                <Link to={'/blueprint-react'} className={'navLink'}>
                    Blueprint React
                </Link>
            </div>

            <h2>Utilities</h2>

            <h3>HTTP requests</h3>

            <NavLink to={'/http-requests'} className={'navLink'}>
                HTTP requests
            </NavLink>


            <h3>Render Markdown:</h3>

            <ShowMarkdown markdownFilePath={homepage}/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default HomePage;