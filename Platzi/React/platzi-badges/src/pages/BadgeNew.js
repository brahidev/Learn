import React from 'react';

import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading'

import api from '../api'

class BadgeNew extends React.Component {
    state = {
        loading: false,
        error: null, 
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
            avatarUrl: '',
        } 
    };

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.currentTarget.name]: e.currentTarget.value
            }
        })

    }

    handleSubmit = async (e) => {
        e.preventDefault();

        this.setState({ loading: true, error: null })

        try {
            await api.badges.create(this.state.form)
            this.setState({ loading: false })

            this.props.history.push('/badges')
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading />
        }

        return (
            <div>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={ header } alt="logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName={ this.state.form.firstName || 'First Name' }
                                lastName={ this.state.form.lastName || 'Last Name' }
                                jobTitle={ this.state.form.jobTitle || 'Job Title' }
                                twitter={ this.state.form.twitter || 'Twitter' }
                                email={ this.state.form.email || 'prueba@gmail.com' }
                            />
                        </div>

                        <div className="col">
                            <h1> New Attendant </h1>
                            <BadgeForm 
                                onSubmit={ this.handleSubmit } 
                                onChange={ this.handleChange } 
                                formValues={ this.state.form }
                                error={ this.state.error }
                            />
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}

export default BadgeNew