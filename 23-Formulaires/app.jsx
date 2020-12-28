import {render} from 'react-dom';
import React, {Component} from 'react';
import {Formik, Field, ErrorMessage, FieldArray} from "formik";
import * as Yup from 'yup';

const CustomInput = ({field, form, ...props}) => {
    return (
        <div className={"form-group"}>
            <label>{props.displayname ? props.displayname : field.name}</label>
            <input type={"text"} {...field} {...props} className={"form-control"}/>
        </div>
    );
}

const CustomError = (props) => {
    return (
        <div className={"text-danger"}> {props.children}</div>
    );
}

class App extends Component {
    userSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Trop cours !').max(7, 'trop long !').required('Ce Champs est requis!'),
        email: Yup.string().email('Email incorrect !').required('Ce Champs est requis!'),
        password: Yup.string().min(5, 'Trop cours !'),
        items: Yup.array().of(Yup.object().shape({
            name: Yup.string().required('Ce Champs est requis!'),
            quantity: Yup.number().typeError('Doit être un nombre').min(5, 'Trop faible')
        }))
    })

    submit = (values, actions) => {
        console.log(values, actions);
        actions.setSubmitting(false);
    }

    /*validate = (values) => {
        let errors = {};

        if(!values.name){
            errors.name = 'Ce champs est requis';
        } else if (values.name.length < 3) {
            errors.name = 'Trop court';
        }
        return errors;
    }*/

    render() {
        return (
            <div
                style={{'height': '100vh'}}
                className={"container-fluid p-5 bg-light d-flex flex-column justify-content-center align-items-center"}>
                <Formik
                    onSubmit={this.submit}
                    initialValues={{
                        name: "",
                        email: "",
                        password: "",
                        items: []
                    }}
                    validationSchema={this.userSchema}
                    /*
                    validate={this.validate}
                    validateOnBlur={false}
                    validateOnChange={false}*/
                >{({
                       handleBlur,
                       handleSubmit,
                       handleChange,
                       isSubmitting,
                       values,
                       errors,
                       touched
                   }
                ) => (
                    <form onSubmit={handleSubmit} className={"bg-white border p-5 d-flex flex-column"}>
                        <Field name={"name"} type={"text"} component={CustomInput}/>
                        <ErrorMessage name={"name"} component={CustomError}/>
                        {/*{errors.name && touched.name ? (
                            <div className={"text-danger"}> {errors.name}</div>
                        ) : null}*/}
                        <Field name={"email"} type={"email"} component={CustomInput}/>
                        <ErrorMessage name={"email"} component={CustomError}/>
                        {/*{errors.email && touched.email ? (
                            <div className={"text-danger"}> {errors.email}</div>
                        ) : null}*/}
                        <Field name={"password"} type={"password"} component={CustomInput}/>
                        <ErrorMessage name={"password"} component={CustomError}/>
                        <FieldArray name={"items"}>
                            { arrayHelpers => (
                                <div>
                                    { values.items && values.items.length ? (
                                        values.items.map((item, index) => (
                                            <div classNamekey={index} >
                                                <div>Item: {index}</div>
                                                <hr class={"w-100"} />
                                                <Field name={`items.${index}.name`} displayname={"Name"} type={"text"} component={CustomInput}/>
                                                <ErrorMessage name={`items.${index}.name`} component={CustomError}/>
                                                <Field name={`items.${index}.quantity`}  displayname={"Quantity"} type={"text"} component={CustomInput}/>
                                                <ErrorMessage name={`items.${index}.quantity`} component={CustomError}/>
                                                <button className={" mb-3 w-100 btn btn-danger"} onClick={() => {
                                                    arrayHelpers.remove(index)
                                                }} >Delete</button>
                                            </div>
                                        ))
                                    ) : null }
                                    <button type={"button"} className={"w-100 btn btn-success"} onClick={ () => arrayHelpers.push({
                                        name: '',
                                        quantity: 0
                                    })} > Add item</button>
                                </div>
                            )}
                        </FieldArray>
                        {/*{errors.password && touched.password ? (
                            <div className={"text-danger"}> {errors.password}</div>
                        ) : null}*/}
                        {/*<Field name={"name"} component={CustomInput}>
                            { ({field, form: {errors, touched}}) => {
                                return (
                                    <div className={"form-group"}>
                                        <label>Name</label>
                                        <input {...field} type={"text"} className={"form-control"}/>
                                    </div>
                                )
                            }}
                        </Field>
                        {errors.name && touched.name ? (
                            <div className={"text-danger"}> {errors.name}</div>
                        ) : null}*/}

                        {/* <div className={"form-group"}>
                            <label>Name</label>
                            <input
                                name={"name"}
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type={"text"}
                                className={"form-control"}/>
                            {errors.name && touched.name ? (
                                <div className={"text-danger"}> {errors.name}</div>
                            ) : null}
                        </div>
                        <div className={"form-group"}>
                            <label>Email</label>
                            <input
                                name={"email"}
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type={"email"}
                                className={"form-control"}/>
                            {errors.email && touched.name ? (
                                <div className={"text-danger"}> {errors.email}</div>
                            ) : null}
                        </div>
                        <div className={"form-group"}>
                            <label>Password</label>
                            <input
                                name={"password"}
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type={"password"}
                                className={"form-control"}/>
                            {errors.password && touched.password ? (
                                <div className={"text-danger"}> {errors.password}</div>
                            ) : null}
                        </div>*/}
                        <button
                            disabled={isSubmitting}
                            type={"submit"}
                            className={"my-3 btn btn-primary"}>Send
                        </button>
                    </form>
                )}
                </Formik>
            </div>
        )
    }
}

render(
    <App/>,
    document.getElementById('root')
);
