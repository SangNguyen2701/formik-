import React from "react";
import './FormValidation.css'
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from 'yup'

const SignUpFormTemplate = () => {

    return (
        <Formik
            initialValues={{
                name: '',
                firtname: '',
                lastname: '',
                email: '',
            }}
            onSubmit={(values) => {
            }}
            validationSchema={Yup.object({
                username: Yup.string().max(15, 'Must be 15').required('User name is required'),
                firstname: Yup.string().max(15, 'Must be 15').required('First name is required'),
                lastname: Yup.string().max(15, 'Must be 15').required('Last name is required'),
                email: Yup.string().max(15, 'Must be 15').required('Email is required'),
            })}

        >
            <div className="form-container">
                <h1 className="form-heading">Sign Up</h1>
                <p className="form-description">
                    Join our community to stay updated with the latest trends.
                </p>
                <Form >
                    <div className="form-field">
                        <label htmlFor="username" className="form-label">
                            User Name
                        </label>
                        <Field name='username' type="text" className="form-input" />
                        <ErrorMessage name="username" component='div' className="form-errors" />
                    </div>

                    <div className="form-field">
                        <label htmlFor="firstname" className="form-label">
                            First Name
                        </label>
                        <Field name='firstname' type="text" className="form-input" />
                        <ErrorMessage name="firstname" component='div' className="form-errors" />
                    </div>

                    <div className="form-field">
                        <label htmlFor="lastname" className="form-label">
                            Last Name
                        </label>
                        <Field name='lastname' type="text" className="form-input" />
                        <ErrorMessage name="lastname" component='div' className="form-errors" />
                    </div>

                    <div className="form-field">
                        <label htmlFor="email" className="form-label">
                            Email Address
                        </label>
                        <Field name='email' type="text" className="form-input" />
                        <ErrorMessage name="email" component='div' className="form-errors" />
                    </div>

                    <button type="submit" className="form-button">
                        Submit
                    </button>
                </Form>
            </div>
        </Formik>
    );
};

export default SignUpFormTemplate;