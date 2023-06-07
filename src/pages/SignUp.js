import React from 'react';
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Grid, Paper } from '@mui/material';

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
    
    const paperStyle = {
        padding: 20,
        height: '80vh',
        width: 350,
        margin: "20px auto"
    }

    return (
        <>
        <Formik {...formikProps}>
            {({ errors, touched}) => (
            <Form>
                <Grid align='center'>
                    <Paper 
                        elevation={10}
                        style={paperStyle}
                    >
                        <div>
                            <h2> Sign Up </h2>
                            <span>Already have an account? </span>
                            <Link to="/login">Login</Link>
                        </div>
                        <Field
                            as={TextField}
                            label="Username" 
                            name="username"
                            type="text"
                            margin="normal"
                            fullWidth
                            error={errors.username && touched.username}
                            helperText={errors.username && touched.username ? errors.username : null}
                        />

                        <Field
                            as={TextField}
                            label="E-mail" 
                            name="email"
                            type="email"
                            fullWidth
                            margin="normal"
                            error={errors.email && touched.email}
                            helperText={errors.email && touched.email ? errors.email : null}
                        />

                        <Field
                            as={TextField}
                            label="Password"
                            name="password"
                            type="text"
                            margin="normal"
                            fullWidth
                            error={errors.password && touched.password}
                            helperText={errors.password && touched.password ? errors.password : null}
                        />

                        <Field
                            as={TextField}
                            label="Confirm Password" 
                            name="confirm"
                            type="password"
                            margin="normal"
                            fullWidth
                            error={errors.confirm && touched.confirm}
                            helperText={errors.confirm && touched.confirm ? errors.confirm : null}
                        />

                        <Button 
                            type="submit"
                            fullWidth
                            variant="contained"
                        >
                            Sign Up
                        </Button>
                    </Paper> 
                </Grid>
            </Form>
            )}
        </Formik>
        </>
    )
};

export default SignUp;