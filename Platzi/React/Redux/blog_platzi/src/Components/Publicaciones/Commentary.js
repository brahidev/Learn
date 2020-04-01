import React from 'react'

import { connect } from 'react-redux'
import Loading from '../../Components/loader/Loading'
import Error from '../../Components/error/Error'

const Commentary = (props) => {
    if (props.com_error) return <Error message={ props.com_error } />
    if (props.com_loading && !props.commentary.length) return <Loading />

    const showCommentary = () => (
        props.commentary.map((comment) => (
            <li key={ comment.id }>
                <b>
                    <u>
                        { comment.email }
                    </u>
                </b>
                <br/>
                { comment.body }
            </li>
        ))
    )

    return (
        <ul>
            { showCommentary() }
        </ul>
    )
}

const mapStateToProps = ({ publicationsReducer }) => publicationsReducer

export default connect(mapStateToProps)(Commentary)