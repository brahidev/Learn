import { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "./images/logo.svg";
import React from "react";

class Header extends Component {
    render() {
        const { menu } = this.props;
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <br/>
                <ul className="menu">
                    {
                        menu.map((value, key) =>
                            <li key={key}>
                                <Link to={value.url}>{value.title}</Link>
                            </li>
                        )
                    }
                </ul>
            </header>
        );
    }
}

Header.propTypes = {
  menu: PropTypes.array.isRequired
};

export default Header