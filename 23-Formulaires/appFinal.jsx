import {render} from 'react-dom';
import React, {Component} from 'react';
import {Field, ErrorMessage, FieldArray, withFormik} from "formik";
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
    render() {
        const {values, isSubmitting, handleSubmit} = {...this.props}
        return (
            <div style={{'height': '100vh'}} className={"container-fluid p-5 bg-light d-flex flex-column justify-content-center align-items-center"}>
                <form onSubmit={handleSubmit} className={"bg-white border p-5 d-flex flex-column"}>
                    <Field name={"name"} type={"text"} component={CustomInput}/>
                    <ErrorMessage name={"name"} component={CustomError}/>
                    <Field name={"email"} type={"email"} component={CustomInput}/>
                    <ErrorMessage name={"email"} component={CustomError}/>
                    <Field name={"password"} type={"password"} component={CustomInput}/>
                    <ErrorMessage name={"password"} component={CustomError}/>
                    <FieldArray name={"items"}>
                        {arrayHelpers => (
                            <div>
                                {values.items && values.items.length ? (
                                    values.items.map((item, index) => (
                                        <div className={""} key={index}>
                                            <div>Item: {index}</div>
                                            <hr className={"w-100"}/>
                                            <Field name={`items.${index}.name`} displayname={"Name"} type={"text"}
                                                   component={CustomInput}/>
                                            <ErrorMessage name={`items.${index}.name`} component={CustomError}/>
                                            <Field name={`items.${index}.quantity`} displayname={"Quantity"}
                                                   type={"text"} component={CustomInput}/>
                                            <ErrorMessage name={`items.${index}.quantity`} component={CustomError}/>
                                            <button className={" mb-3 w-100 btn btn-danger"} onClick={() => {
                                                arrayHelpers.remove(index)
                                            }}>Delete
                                            </button>
                                        </div>
                                    ))
                                ) : null}
                                <button type={"button"} className={"w-100 btn btn-success"}
                                        onClick={() => arrayHelpers.push({
                                            name: '',
                                            quantity: 0
                                        })}> Add item
                                </button>
                            </div>
                        )}
                    </FieldArray>
                    <button disabled={isSubmitting} type={"submit"} className={"my-3 btn btn-primary"}>Send</button>
                </form>
            </div>
        )
    }
}

const MyForm = withFormik({
    mapPropsToValues: () => ({name: "", email: "", password: "", items: []}),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'Trop cours !').max(7, 'trop long !').required('Ce Champs est requis!'),
        email: Yup.string().email('Email incorrect !').required('Ce Champs est requis!'),
        password: Yup.string().min(5, 'Trop cours !'),
        items: Yup.array().of(Yup.object().shape({
            name: Yup.string().required('Ce Champs est requis!'),
            quantity: Yup.number().typeError('Doit être un nombre').min(5, 'Trop faible')
        }))
    }),
    handleSubmit: (values, actions) => {
        console.log(values, actions);
        actions.setSubmitting(false);
    }
})(App);

render(
    <MyForm/>,
    document.getElementById('root')
);
