//Dependencies
import PropTypes from 'prop-types';

//Components
import React, { Component } from 'react'
import Data from './Data';
class Content extends Component{
    render() {
        const { name, year = 2019 } = this.props;
        return(
            <div>
                <h1>Content of Application</h1>
                <p>
                    {name + ' ' + year}
                </p>
            </div>
        );
    }
}

Content.propTypes = {
  name: PropTypes.string.isRequired,
    year: PropTypes.number
};

export default Content