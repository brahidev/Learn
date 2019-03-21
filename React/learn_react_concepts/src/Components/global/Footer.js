import React, { Component } from 'react'
import PropTypes from "prop-types";

class Footer extends Component {
    render () {
        const { name, year = 2019 } = this.props;
        return(
            <div>
                <h1>Footer Application</h1>
                <p>
                    {name + ' ' + year}
                </p>
            </div>
        );
    }
}
Footer.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number
};
export default Footer