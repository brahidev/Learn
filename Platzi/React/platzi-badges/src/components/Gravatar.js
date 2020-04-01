import React from 'react'
import md5 from 'md5'

function Gravatar(props) {
    const mail = props.mail
    const hash = md5(mail)

    return ( 
        <img
            className={props.className}
            src={`https://s.gravatar.com/avatar/${hash}?d=identicon`}
            alt="Avatar"
        />
    )
}

export default Gravatar