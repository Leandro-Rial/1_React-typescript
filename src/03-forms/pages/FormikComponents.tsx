import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

export const FormikComponents = () => {
    return (
        <div>
            <h1>Formik Components</h1>
        
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
                    ({
                        handleSubmit,
                        getFieldProps,
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <label htmlFor="firstName">First Name</label>
                            <Field
                                type="text"
                                placeholder="FirstName"
                                { ...getFieldProps('firstName') }
                            />
                            <ErrorMessage name="firstName" component='span' />
                            
                            <label htmlFor="lastName">Last Name</label>
                            <Field
                                type="text"
                                placeholder="LastName"
                                { ...getFieldProps('lastName') }
                            />
                            <ErrorMessage name="lastName" component='span' />
                            
                            <label htmlFor="email">Email</label>
                            <Field
                                type="email"
                                placeholder="Email"
                                { ...getFieldProps('email') }
                            />
                            <ErrorMessage name="email" component='span' />
                            
                            <label htmlFor="jobType">Job type</label>
                            <Field name="jobType" as="select" >
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">It Senior</option>
                                <option value="it-jr">It JR</option>
                            </Field>
                            <ErrorMessage name="jobType" component='span' />
                            
                            <label>
                                <Field type="checkbox" name="terms" />
                                Terms and conditions
                            </label>
                            <ErrorMessage name="terms" component='span' />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
};