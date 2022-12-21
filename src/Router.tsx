import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import HomePage from "./components/HomePage/HomePage";
import FomanticUI from "./components/FomanticUI/FomanticUI";
import HttpRequests from "./components/HttpRequests/HttpRequests";
import SemanticReact from "./components/SemanticReact/SemanticReact";
import TestLayout from "./components/FomanticUI/TestLayout";

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/fomantic-ui'} element={<FomanticUI/>}/>
                <Route path={'/fomantic-test-layout'} element={<TestLayout/>}/>
                <Route path={'/semantic-ui-react'} element={<SemanticReact/>}/>
                <Route path={'/http-requests'} element={<HttpRequests/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;