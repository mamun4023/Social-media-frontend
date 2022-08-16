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
import {Login} from '../redux/auth/auth';
import SnackBar from '../components/snackbar';

export default function SignIn(){

    const initialValues = {
        email : "",
        password : ""
    }

    const LoginSchema = Yup.object().shape({
        email : Yup.string().email("Enter valid email").required("Email is required"),
        password : Yup.string().required("Password is required")
    })
    
    const formik = useFormik({
        enableReinitialize : false,
        initialValues,
        validationSchema : LoginSchema,
        onSubmit : values => 

        Login(values)
            .then(res =>{
                const respones = res.data;
            })
            // same shape as initial values
            // console.log(values)
    })

    const {errors, touched, values, isSubmitting, handleSubmit, getFieldProps} = formik;
    return(
        <>
            <SnackBar/>
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