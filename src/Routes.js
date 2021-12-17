import React, { Component } from "react";
import { Routes as Rou,  Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
class Routes extends Component {
    render() {
    return (
        <div>
        <Rou >
            <Route path="/"  exact element={<App />} />            
            <Route path="/Home"  element={<Home />} />            
        </Rou>
        </div>
    )
}
}

export default Routes;
