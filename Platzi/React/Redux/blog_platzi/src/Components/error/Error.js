import React from 'react'

const Error = (props) => (
    <div className='center red'>
        <h2>
            { props.message }
        </h2>
    </div>
);

export default Error