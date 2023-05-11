import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .min(8, 'Must be at least 8 characters')
                .required('Required'),
            password: Yup.string()
                .min(8, 'Must be at least 8 characters')
                .required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <>
        <div>
            <h1> Login </h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
                id="username"
                type="text"
                {...formik.getFieldProps('username')}
            />
            {formik.errors.username && formik.touched.username ? (<div>{formik.errors.username}</div>) : null}

            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                {...formik.getFieldProps('password')}
            />
            {formik.errors.password && formik.touched.password ? (<div>{formik.errors.password}</div>) : null}

            <button type="submit">Submit</button>
        </form>
        </>
    );
};

export default Login;