import { useFormik, FormikProvider, Form} from 'formik';
import * as Yup from 'yup';
import {
Button,
Card,
TextField,
Stack,
}
from '@mui/material';

import {LoadingButton} from '@mui/lab'

export default function SignIn(){

    const initialValues = {
        name : "",
        email : "",
        password : ""
    }

    const LoginSchema = Yup.object().shape({
        name : Yup.string().required("Name is required"),
        email : Yup.string().email("Enter valid email").required("Email is required"),
        password : Yup.string().required("Password is required")
    })
    
    const formik = useFormik({
        enableReinitialize : false,
        initialValues,
        validationSchema : LoginSchema,
        onSubmit : values => 
            // same shape as initial values
            console.log(values)
    })

    const {errors, touched, values, isSubmitting, handleSubmit, getFieldProps} = formik;
    return(
        <>
            <Card
                sx={{
                    maxWidth : 400,
                    textAlign : "center",
                    margin : 'auto',
                    marginTop : 10,
                    padding : 2
                   
                }}
            >

                <FormikProvider value={formik}>
                    <Form autoComplete='off' encType='multipart/form-data' noValidate  onSubmit={handleSubmit}>  
                        <Stack
                            spacing = {2}
                        > 

                            <TextField 
                                fullWidth
                                label = "Name"
                                {...getFieldProps('name')}
                                error = {Boolean(touched.name && errors.name)}
                                helperText = {touched.name && errors.name}
                            />
                            <TextField 
                                fullWidth
                                label = "Email"
                                {...getFieldProps('email')}
                                error = {Boolean(touched.email && errors.email)}
                                helperText = {touched.email && errors.email}
                            />

                            <TextField
                                fullWidth
                                label = "Password"
                                type = "password"
                                {...getFieldProps('password')}
                                error = {Boolean(touched.password && errors.password)}
                                helperText = {touched.password && errors.password}
                            />
                            <LoadingButton
                                variant='contained'
                                color='primary'
                                size='large'
                                type = "submit"
                                loading = {isSubmitting}
                            >
                                Login
                            </LoadingButton>
                            </Stack>
                        </Form>    
                </FormikProvider>
            </Card>
        </>
    )
}