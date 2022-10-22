import { MyTextInput } from '../components';

import { Formik, Form } from 'formik';
import * as Yup from 'yup'

import '../styles/styles.css'

interface ValuesForm {
    firstName: string,
    email: string,
    password1: string,
    password2: string,
}

export const RegisterFormikPage = () => {

    const onSubmit = (credentials: ValuesForm) => {
        console.log(credentials)
    }

    return (
        <div>
            <h1>Register formik page</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={onSubmit}
                validationSchema= {
                    Yup.object({
                        firstName: Yup.string()
                            .min(2, 'min 2 characters')
                            .max(15, "max 15 characters")
                            .required("required"),
                        email: Yup.string()
                            .email("Invalid email format")
                            .required("required"),
                        password1: Yup.string()
                            .min(6, 'Min 6 characters')
                            .required('Password is required'),
                        password2: Yup.string()
                            .oneOf([Yup.ref('password1'), null], 'Passwords must match')
                            .required('Password is required'),
                })}
            >
                {
                    ({ handleSubmit, resetForm }) => {
                            return (
                                <Form onSubmit={handleSubmit}>
                                    <MyTextInput
                                        label='First Name'
                                        name='firstName'
                                        placeholder='First Name'
                                    />

                                    <MyTextInput
                                        type="email"
                                        label='Email'
                                        name='email'
                                        placeholder='Email'
                                    />

                                    <MyTextInput
                                        type="password"
                                        label='Passsword'
                                        name='password1'
                                        placeholder='Passsword'
                                    />

                                    <MyTextInput
                                        type="password"
                                        label='Confirm Password'
                                        name='password2'
                                        placeholder='Confirm Password'
                                    />

                                    <button type="submit">Create</button>
                                    <button type="button" onClick={() => resetForm()}>Reset</button>
                                </Form>
                            );
                        }
                }
            </Formik>
        </div>
    )
}
