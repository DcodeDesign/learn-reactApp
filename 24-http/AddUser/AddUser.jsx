import React, {Component} from 'react';
import {Formik, Field} from 'formik';
import axios from 'axios';

export default class extends Component {

    getInitValues = () => {
        return this.props.user ? {...this.props.user} : {name: '', username: '', email: ''}
    }

    submit = (values, actions) => {
        if (!this.props.user) {
            axios.post('/users', values)
                .then(response => {
                    this.props.adduser(response.data);
                })
        } else {
            axios.put(`/users/${values.id}`, values)
                .then(response => {
                    this.props.adduser(response.data);
                })
        }
    }

    render() {
        return (
            <Formik initialValues={this.getInitValues()}
                    onSubmit={this.submit}
                    enableReinitialize={true}>
                {({handleSubmit}) => (
                    <form onSubmit={handleSubmit} className={"d-flex flex-column"}>
                        <Field name={"name"} placeholder={"Name"}/>
                        <Field name={"username"} placeholder={"Username"}/>
                        <Field name={"email"} placeholder={"Email"}/>
                        <button type={"submit"}>Save</button>
                    </form>
                )}
            </Formik>
        );
    }
}
