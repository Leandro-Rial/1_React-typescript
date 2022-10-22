import { MyTextInput, MySelect, MyCheckbox } from '../components';

import { Formik, Form } from 'formik';
import * as Yup from 'yup'

export const FormikAbstract = () => {
    return (
        <div>
            <h1>Formik Abstract</h1>
        
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={values => {
                    console.log(values)
                }}
                validationSchema= {
                    Yup.object({
                        firstName: Yup.string()
                            .max(15, "max 15 characters")
                            .required("required"),
                        lastName: Yup.string()
                            .max(15, "max 15 characters")
                            .required("required"),
                        email: Yup.string()
                            .email("Invalid email format")
                            .required("required"),
                        terms: Yup.boolean()
                            .oneOf([true], 'You must accept the terms'),
                        jobType: Yup.string()
                            .notOneOf(['it-jr'], 'This is not allowed')
                            .required('required')
                })}
            >
                {
                    ({ handleSubmit }) => {
                            return (
                                <Form onSubmit={handleSubmit}>
                                    <MyTextInput
                                        label='First Name'
                                        name='firstName'
                                        placeholder='First Name'
                                    />

                                    <MyTextInput
                                        label='Last Name'
                                        name='lastName'
                                        placeholder='Last Name'
                                    />

                                    <MyTextInput
                                        type="email"
                                        label='Email'
                                        name='email'
                                        placeholder='Email'
                                    />
                                    
                                    <MySelect label="Job Type" name="jobType">
                                        <option value="">Pick something</option>
                                        <option value="developer">Developer</option>
                                        <option value="designer">Designer</option>
                                        <option value="it-senior">It Senior</option>
                                        <option value="it-jr">It JR</option>
                                    </MySelect>

                                    <MyCheckbox label='Terms & Conditions' name='terms' />

                                    <button type="submit">Submit</button>
                                </Form>
                            );
                        }
                }
            </Formik>
        </div>
    );
};