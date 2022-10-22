import { useFormik } from 'formik';
import * as Yup from 'yup'

export const FormikBasicPage = () => {
    const {
        handleSubmit,
        getFieldProps,
        touched,
        errors,
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, "max 15 characters")
                .required("required"),
            lastName: Yup.string()
                .max(15, "max 15 characters")
                .required("required"),
            email: Yup.string()
                .email("Invalid email format")
                .required("required"),
        }),
        onSubmit: values => {
            console.log(values)
        },
    });

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" placeholder="FirstName" { ...getFieldProps('firstName') } />
            { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }
            
            <label htmlFor="lastName">Last Name</label>
            <input type="text" placeholder="LastName" { ...getFieldProps('lastName') } />
            { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }
            
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" { ...getFieldProps('email') } />
            { touched.email && errors.email && <span>{ errors.email }</span> }

            <button type="submit">Submit</button>
        </form>
    );
};