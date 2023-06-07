import React from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import { TextField, Button, Grid, Paper } from "@mui/material";

const Login = () => {
    const formikProps = {
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
    };
    
    const paperStyle = {
        padding: 20,
        height: '80vh',
        width: 350,
        margin: "20px auto"
    }

    return (
        <>
        <Grid align='center'>
            <Paper
                elevation={10}
                style={paperStyle}
            >
                <div>
                <h2> Login </h2>
                <span>Don't have an account? </span>
                <Link to="/signup">Sign Up!</Link>
                </div>
                <Formik {...formikProps}>
                    {({ errors, touched}) => (
                    <Form>
                        <Field
                            as={TextField}
                            id="outlined"
                            label="Username" 
                            name="username"
                            margin="normal"
                            fullWidth
                            required
                        />

                        <Field
                            as={TextField}
                            label="Password" 
                            name="password"
                            type="password"
                            margin="normal"
                            fullWidth
                            required
                        />
                    
                        <Button 
                            type="submit"
                            fullWidth
                            variant="contained"
                        >
                            Sign In
                        </Button>
                    </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
        </>
    );
};

export default Login;