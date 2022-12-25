import React from 'react';
import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';

import HomePage from "./components/HomePage/HomePage";
import FomanticUI from "./components/FomanticUI/FomanticUI";
import HttpRequests from "./components/HttpRequests/HttpRequests";
import SemanticReact from "./components/SemanticReact/SemanticReact";
import TestLayout from "./components/FomanticUI/TestLayout";
import BlueprintReact from "./components/Blueprint/BlueprintReact";
import FontAwesomeIcons from "./components/Icons/FontAwesomeIcons";

const Router: React.FC = () => {
    return (
        // <BrowserRouter>
        // is not supported by GitHub Pages
        // https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages
        // see https://reactrouter.com/en/main/router-components/hash-router
        <HashRouter>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/fomantic-ui'} element={<FomanticUI/>}/>
                <Route path={'/fomantic-test-layout'} element={<TestLayout/>}/>
                <Route path={'/semantic-ui-react'} element={<SemanticReact/>}/>
                <Route path={'/blueprint-react'} element={<BlueprintReact/>}/>
                <Route path={'/fontawesome-icons'} element={<FontAwesomeIcons/>}/>
                <Route path={'/http-requests'} element={<HttpRequests/>}/>
            </Routes>
            {/*</BrowserRouter>*/}
        </HashRouter>
    );
}

export default Router;