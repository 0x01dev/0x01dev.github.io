import React from "react";
import FomanticUiHeader from "./FomanticUiHeader";
import FomanticForm from "./FomanticForm";

interface FomanticUiHomeProps {
    dark?: boolean,
    toggleDarkMode?: (value?: boolean) => void,
}

const FomanticUiHome: React.FC<FomanticUiHomeProps> = (props) => {
    return (
        // <div id={'FomanticUI'}
        //      className={`ui ${(props.dark ? 'inverted' : null)} root`}
        //      style={{height: '100%', width: '100%'}}>
        //
        //     <div className={`ui segment`}>
        //         <FomanticUiHeader dark={props.dark} toggleDarkMode={props.toggleDarkMode}/>
        //         <FomanticForm dark={props.dark} toggleDarkMode={props.toggleDarkMode}/>
        //     </div>
        // </div>

        <div className={`ui ${(props.dark ? 'inverted' : null)} container`}>
            <FomanticUiHeader dark={props.dark} toggleDarkMode={props.toggleDarkMode}/>
            <FomanticForm dark={props.dark} toggleDarkMode={props.toggleDarkMode}/>
        </div>
    );
}

export default FomanticUiHome;