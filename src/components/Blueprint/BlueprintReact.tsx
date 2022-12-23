import React, {useEffect, useState} from "react";
import {
    Button,
    Card,
    Elevation,
    Icon,
    IconSize,
    FormGroup,
    H5,
    InputGroup,
    Intent,
    Switch,
    EditableText
} from "@blueprintjs/core";

import changeBodyBackgroundColor from "../../utilities/changeBodyBackgroundColor";
import {NavLink} from "react-router-dom";
import Cookies from "js-cookie";

const BlueprintReact: React.FC = () => {

    const bodyBackgroundLightColor = '#F5F8FAD3';
    // const bodyBackgroundDarkColor = '#475869FF';
    const bodyBackgroundDarkColor = '#31343c';

    const [darkMode, setDarkMode] = useState<boolean>();

    const buttonIconStyle = {marginRight: '0.4rem', marginLeft: '0.1rem'};
    const cardStyle = {marginRight: '0.5rem', marginLeft: '0.5rem'};

    const setDarkModeHandler = () => {
        setDarkMode(true);
        changeBodyBackgroundColor(bodyBackgroundDarkColor)
    };

    const setLightModeHandler = () => {
        setDarkMode(false);
        changeBodyBackgroundColor(bodyBackgroundLightColor);
    }

    const toggleTheme = () => {
        if (darkMode) {
            setLightModeHandler();
        } else {
            setDarkModeHandler();
        }
    }

    useEffect(() => {
        const darkModeCookie = Cookies.get('darkMode');
        if (darkModeCookie) {
            if (darkModeCookie === 'true') {
                console.log('darkModeCookie:', darkModeCookie);
                setDarkModeHandler();
            } else {
                setLightModeHandler();
            }
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            console.log('user browser prefers dark mode');
            setDarkModeHandler();
        } else {
            setLightModeHandler();
        }

    }, [])

    // just mockup
    let disabled = false;
    let helperText = 'just some text';

    return (
        <div id={'blueprintRoot'} className={` ${(darkMode ? 'bp4-dark' : null)}  `}>

            <nav className="bp4-navbar">

                <div className="bp4-navbar-group bp4-align-left">
                    <div className="bp4-navbar-heading">Blueprint</div>
                </div>

                <div className="bp4-navbar-group bp4-align-right">

                    <NavLink to={'/'} className="bp4-button bp4-minimal">
                        <Icon icon={'home'} style={buttonIconStyle}/>
                        Home
                    </NavLink>

                    {/*<button className="bp4-button bp4-minimal bp4-icon-home">Home</button>*/}

                    <button className="bp4-button bp4-minimal bp4-icon-document">Files</button>

                    <span className="bp4-navbar-divider"></span>

                    <button className="bp4-button bp4-minimal bp4-icon-user"></button>
                    <button className="bp4-button bp4-minimal bp4-icon-notifications"></button>
                    <button className="bp4-button bp4-minimal bp4-icon-cog"></button>

                </div>
            </nav>

            <Card id={'themeButtons'}
                  interactive={false}
                  elevation={Elevation.ONE}
                  style={{
                      ...cardStyle,
                      marginTop: '0.7rem',
                      marginBottom: '0.7rem',
                      display: 'flex',
                      justifyContent: 'flex-end'
                  }}
            >
                <Button
                    onClick={(e) => {
                        setDarkModeHandler();
                    }}
                > <Icon
                    icon={'moon'}
                    color={darkMode ? 'yellow' : undefined}
                    style={buttonIconStyle}
                />
                    Dark mode
                </Button>
                <Button

                    onClick={(e) => {
                        setLightModeHandler();
                    }}
                >
                    <Icon
                        icon={'flash'}
                        color={darkMode ? 'yellow' : undefined}
                        style={buttonIconStyle}
                    />
                    Light mode
                </Button>
            </Card>


            <Card interactive={true} elevation={Elevation.ONE} style={cardStyle}>

                <h5><a href="#">Card heading</a></h5>

                <p>Card content</p>
                <p>We can use some emoji: 😎 </p>

                <FormGroup
                    disabled={disabled}
                    helperText={helperText && "Helper text with details..."}
                    label={"Label"}
                    labelFor="text-input"
                    labelInfo={"(required)"}
                    subLabel={"Label helper text with details..."}
                >
                    <InputGroup id="text-input" placeholder="Placeholder text" disabled={disabled}/>
                    <InputGroup id="text-input" placeholder="Placeholder text" disabled={disabled}/>
                </FormGroup>

                <FormGroup
                    disabled={disabled}
                    helperText={helperText && "Helper text with details..."}
                    label={"Label"}
                    labelInfo={"(required)"}
                >
                    <Switch label="Engage the hyperdrive" disabled={disabled}/>
                    <Switch label="Initiate thrusters" disabled={disabled}/>
                </FormGroup>

                <Button>Submit</Button>

            </Card>

            <Card style={cardStyle}>
                <h2>Editable text</h2>
                <a href={'https://blueprintjs.com/docs/#core/components/editable-text'}>EditableText</a> from Blueprint:
                <br/>
                <br/>
                <EditableText
                    multiline={true}
                    minLines={3}
                    maxLines={12}
                />
            </Card>
        </div>
    );
}

export default BlueprintReact;