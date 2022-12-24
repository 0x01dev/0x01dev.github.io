import React, {useEffect, useState} from "react";

import 'fomantic-ui/dist/semantic.min.css';
import FomanticForm from "./FomanticForm";
import DarkModeCheckbox from "./DarkModeCheckbox";
import './FomanticUI.css'
import Cookies, {CookieAttributes} from "js-cookie";
import FomanticUiHeader from "./FomanticUiHeader";
import FomanticUiLeftSidebar from "./FomanticUiLeftSidebar";
import FomanticUiHome from "./FomanticUiHome";
import changeBodyBackgroundColor from "../../utilities/changeBodyBackgroundColor";

const FomanticUI: React.FC = (props) => {

    const [dark, setDark] = useState<boolean>(false);

    // const [bodyBackgroundColor, setBodyBackgroundColor] = useState('white')
    // useEffect(() => {
    //     changeBodyBackgroundColor(bodyBackgroundColor);
    // }, [bodyBackgroundColor])


    const toggleDarkMode = (value?: boolean) => {
        const cookieAttributes: CookieAttributes = {
            // secure: true
            sameSite: 'strict',
        };
        if (value) {
            setDark(value);
            Cookies.set('darkMode', (value ? 'true' : 'false'), cookieAttributes);
        } else {
            setDark(!dark);
            Cookies.set('darkMode', (!dark ? 'true' : 'false'), cookieAttributes);
        }
    };

    return (
        <div
            className={`ui ${(dark ? 'inverted' : 'light')} root`}
            style={
                {
                    height: '100%',
                    width: `100%`,
                    // backgroundColor: 'green'
                }
            }>

            <FomanticUiHome dark={dark} toggleDarkMode={toggleDarkMode}/>

        </div>

        // <div className={`ui pushable`}>
        //     <FomanticUiLeftSidebar/>
        //     <div className="pusher">
        //         <FomanticUiHome dark={dark} toggleDarkMode={toggleDarkMode}/>
        //     </div>
        // </div>

        // <div className={`ui grid`}>
        //     <div className="four wide column"><FomanticUiLeftSidebar/></div>
        //     <div className="twelve wide column"><FomanticUiHome dark={dark} toggleDarkMode={toggleDarkMode}/></div>
        // </div>

    );
}

export default FomanticUI;