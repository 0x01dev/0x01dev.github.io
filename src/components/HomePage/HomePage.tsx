import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";

import './HomePage.css';
import changeBodyBackgroundColor from "../../utilities/changeBodyBackgroundColor";

import ShowMarkdown from "../Markdown/ShowMarkdown";
import homepage from './HomePage.md';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faFlask,
    faFlaskVial,
    faCaretRight,
    faCaretLeft,
    faCaretDown,
    faCaretUp
} from '@fortawesome/free-solid-svg-icons';

import Cookies from 'js-cookie';

const HomePage: React.FC = () => {

    // test cookie
    useEffect(() => {
        Cookies.set(
            'test cookie',
            '00001',
            {}
        )
    }, [])

    const bodyBackgroundColor = '#e9e9e9';
    useEffect(() => {
        changeBodyBackgroundColor(bodyBackgroundColor);
    }, [])

    const [showMarkdownExample, setShowMarkdownExample] = useState<boolean>(false);
    const showMarkdownExampleClickHandler = () => {
        setShowMarkdownExample(!showMarkdownExample);
    }

    return (
        <div id={'HomePage'}>

            <h1>
                <FontAwesomeIcon icon={faFlask}/>{' '}
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
            <div>

                <Link to={'/fontawesome-icons'} className={'navLink'}>
                    FontAwesome icons
                </Link>
            </div>

            <h2>Utilities</h2>

            <h3>HTTP requests</h3>

            <NavLink to={'/http-requests'} className={'navLink'}>
                HTTP requests
            </NavLink>

            <h3>
                Render Markdown: {' '}
                <span
                    onClick={showMarkdownExampleClickHandler}
                    style={{cursor: 'pointer'}}
                    title={showMarkdownExample ? 'Hide' : 'Show'}
                >
                    {showMarkdownExample ?
                        <FontAwesomeIcon icon={faCaretDown}/> :
                        <FontAwesomeIcon icon={faCaretRight}/>
                    }
                </span>

            </h3>

            <div hidden={!showMarkdownExample}>
                <ShowMarkdown markdownFilePath={homepage}/>
            </div>

            {/*{showMarkdownExample ? <ShowMarkdown markdownFilePath={homepage}/> : null}*/}

            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default HomePage;