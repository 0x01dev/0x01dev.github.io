import React, {useEffect, useState} from "react";
import axios from 'axios';

const HttpRequests: React.FC = () => {

    const isValidHttpUrl = (string: string) => {
        let url;
        try {
            url = new URL(string);
        } catch (error) {
            return false;
        }
        return url.protocol === "http:" || url.protocol === "https:";
    };

    const [urlString, setUrlString] = useState<string | undefined>(undefined);
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

    useEffect(() => {
        if (urlString && !isValidHttpUrl(urlString)) {
            setErrorMessage(urlString + ' is not a valid URL');
        } else {
            setErrorMessage(undefined);
        }
    }, [urlString])

    const buttonOnClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        e.preventDefault();

        if (urlString) {
            console.log(urlString);
            if (!isValidHttpUrl(urlString)) {
                setErrorMessage(urlString + " is not a valid URL")
                return;
            }

            axios.get(urlString, {
                // withCredentials: true, // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials
            })
                .then(function (response) {
                    // handle success
                    console.log(response);
                })
                .catch(function (error: TypeError) {
                    setErrorMessage(
                        error.message + ' || ' + error.stack
                    );
                    // console.error(error);
                })
                .finally(function () {
                    // always executed
                });
        }
    }

    return (
        <div style={{
            margin: '2rem'
        }}>

            <form>
                <label>Input URL:</label>
                <br/>
                <input
                    type={'url'}
                    onChange={(e) => {
                        setUrlString(e.target.value);
                    }}
                />
                <br/>
                <div id={'errorMessage'}>
                    {errorMessage}
                </div>
                <br/>
                <button
                    onClick={buttonOnClickHandler}
                >
                    Get info
                </button>
            </form>
        </div>
    );
}

export default HttpRequests;