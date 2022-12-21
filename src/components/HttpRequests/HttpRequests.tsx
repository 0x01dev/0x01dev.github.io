import React, {useEffect, useState} from "react";
import axios from 'axios';

const HttpRequests: React.FC = () => {

    const [url, setUrl] = useState<string>('https://frieden-ukraine.de');

    useEffect(() => {
        axios.get(url)
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.error(error);
            })
            .finally(function () {
                // always executed
            });
    }, [url])

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <form>
                <input/>
            </form>
        </div>
    );
}

export default HttpRequests;