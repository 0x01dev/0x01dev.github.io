import React, {useEffect, useState} from "react";
import Cookies from 'js-cookie';
import 'fomantic-ui/dist/semantic.min.css';

interface DarkModeCheckboxProps {
    dark?: boolean,
    toggleDarkMode?: (value?: boolean) => void,
}

const DarkModeCheckbox: React.FC<DarkModeCheckboxProps> = (props) => {

    useEffect(() => {
        if (props.toggleDarkMode) {
            const darkModeCookie = Cookies.get('darkMode');
            if (darkModeCookie && darkModeCookie === 'true') {
                console.log('darkModeCookie:', darkModeCookie)
                props.toggleDarkMode(true);
            } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                props.toggleDarkMode(true);
                console.log('user browser prefers dark mode')
            }
        }
    }, [])

    const handleClick = () => {
        if (props.toggleDarkMode) {
            props.toggleDarkMode();
        }
    }

    return (
        <div onClick={handleClick} className={'item'} style={{cursor: 'pointer'}}>

            <i className={`sun icon ${(props.dark ? '' : 'yellow')}`}></i>

            <div className={`ui slider checkbox ${(props.dark ? 'inverted' : 'secondary')}`}
                 style={{marginLeft: '5px'}}>

                {/* Warning: You provided a `checked` prop to a form field without
                           an `onChange` handler. This will render a read-only field. If the field should be mutable use
                           `defaultChecked`. Otherwise, set either `onChange` or `readOnly`*/}
                <input type="checkbox"
                       tabIndex={0}
                       className={"hidden"}
                       checked={props.dark}
                       onChange={(e) => {
                           handleClick(); // works with 'Space' key, not with 'Enter' key
                       }}
                />
                {/* <label></label> is used by Fomantic UI to show slider */}
                <label></label>
            </div>

            <i className={`moon icon ${(props.dark ? 'yellow' : '')}`}></i>

        </div>
    );

}

export default DarkModeCheckbox;
