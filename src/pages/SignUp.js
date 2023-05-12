import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
        ) : null}
        </>
    );
};

const SignUp = () => {
    const formikProps = {
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirm: ''
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .min(8, 'Must be at least 8 characters')
                .required('Required'),
            email: Yup.string()
                .email('Please enter a valid email')
                .required('Required'),
            password: Yup.string()
                .min(8, 'Must be at least 8 characters')
                .required('Required'),
            confirm: Yup.string()
                .required('Required')
                .oneOf([Yup.ref('password')], 'The passwords do not match')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    }
    
    return (
        <Formik {...formikProps}>
            <Form>
                <MyTextInput
                    label="Username" 
                    name="username"
                    type="text"
                />

                <MyTextInput
                    label="E-mail" 
                    name="email"
                    type="email"
                />

                <MyTextInput
                    label="Password" 
                    name="password"
                    type="text"
                />

                <MyTextInput
                    label="Confirm Password" 
                    name="confirm"
                    type="password"
                />

                <button type="submit">Sign Up</button>
            </Form>
        </Formik>
    )
};

