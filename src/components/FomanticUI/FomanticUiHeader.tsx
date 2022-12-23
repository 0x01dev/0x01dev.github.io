import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import DarkModeCheckbox from "./DarkModeCheckbox";

interface FomanticUiHeaderProps {
    dark?: boolean,
    toggleDarkMode?: (value?: boolean) => void,
}


const FomanticUiHeader: React.FC<FomanticUiHeaderProps> = (props) => {
    return (
        <>
            <div className={`ui ${(props.dark ? 'dark' : null)} inverted menu`}
            >
                <NavLink to="/" className="ui right item">
                    <i className="home icon"></i>
                    Home
                </NavLink>

                <NavLink to='/fomantic-ui' className="ui item">
                    Fomantic UI
                </NavLink>

                <NavLink to='/fomantic-test-layout' className="ui item">
                    Fomantic Test
                </NavLink>

                <NavLink to='/semantic-ui-react' className="ui item">
                    Semantic React
                </NavLink>

                <NavLink to='/blueprint-react' className="ui item">
                    Blueprint React
                </NavLink>

                <NavLink to='/http-requests' className="ui item">
                    HTTP Requests
                </NavLink>

                {/*<a className="ui right item" href="/">Home</a>*/}

                {/*<a className="ui item" href="/locations/">Test Layout</a>*/}

                {/*<a className="ui item" href="/pricing/">Pricing</a>*/}
                {/*<a className="ui item" href="/blog/">Blog</a>*/}

                <DarkModeCheckbox dark={props.dark} toggleDarkMode={props.toggleDarkMode}/>

            </div>
        </>
    );
}

export default FomanticUiHeader;