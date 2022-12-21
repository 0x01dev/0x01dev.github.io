import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import './HomePage.css';
import ShowMarkdown from "../ShowMarkdown";

import homepage from './HomePage.md'

const HomePage: React.FC = () => {
    return (
        <div id={'HomePage'}>

            <h1>CSS Frameworks:</h1>

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

            <h1>Utilities</h1>

            <NavLink to={'/http-requests'} className={'navLink'}>
                HTTP requests
            </NavLink>


            <h1>Render Markdown:</h1>
            <ShowMarkdown markdownFilePath={homepage}/>
        </div>
    );
}

export default HomePage;