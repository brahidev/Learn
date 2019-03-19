import { Component } from "react";
import logo from "./images/logo.svg";
import React from "react";

class header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        );
    }
}

export default header