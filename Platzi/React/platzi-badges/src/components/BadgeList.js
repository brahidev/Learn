import React from 'react'
import { Link } from 'react-router-dom'

import BadgesListItem from './BadgesListItems'

class BadgeList extends React.Component {
    render() {
        if (this.props.badges.length === 0) {
            return (
                <div>
                    <h3> No badges were found </h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new badge
                    </Link>
                </div>
            )
        }

        return (
            <div className="BadgesList">
                <ul className="list-unstyled">
                {this.props.badges.map(badge => {
                    return (
                    <li key={badge.id}>
                        <Link className="text-reset text-decoration-none" to={`badges/${ badge.id }/edit`} >
                            <BadgesListItem badge={badge} />
                        </Link>
                    </li>
                    );
                })}
                </ul>
            </div>
        );
    }
}

export default BadgeList