import React from "react";
import { Routes, Route } from "react-router-dom";
import SingleMovie from "./SingleMovie";
import Error from "./Error";
import Home from "./Home";
import './App.css';


const App = () => {
    return (<>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/movie/:id" element={<SingleMovie />} />
            <Route path="*" element={<Error />} />
        </Routes>

    </>)

}


export default App;