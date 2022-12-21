import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import HomePage from "./components/HomePage/HomePage";
import FomanticUI from "./components/FomanticUI/FomanticUI";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/fomantic-ui'} element={<FomanticUI/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
