//Dependencies
import PropTypes from 'prop-types';

//Components
import React, { Component } from 'react'
import Data from './Data';
class Content extends Component{
    render() {
        return(
            <div>
                <h1>Content of Application</h1>
            </div>
        );
    }
}

Content.propTypes = {
  name: PropTypes.string.isRequired,
    year: PropTypes.number
};

export default Content