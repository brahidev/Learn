// Dependencies
import React from 'react'
import { Link } from 'react-router-dom'

// Data
import DataMenu from '../../Data/Menu'

const Header = () => (
    <ul className="list-inline lead pt-3">
        {
            DataMenu.map((item, key) =>
                <Link key={key} to={item.url}>
                    <li className="list-inline-item p-1 text-white">
                        {item.title}
                    </li>
                </Link>
            )
        }
    </ul>
);

export default Header