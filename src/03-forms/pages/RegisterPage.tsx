import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

export const RegisterPage = () => {
    const {
        name,
        email,
        password1,
        password2,
        formData,
        onChange,
        reset
    } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    })

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData)
    }

    return (
        <div>
            <h1>Register page</h1>
            <form onSubmit={onSubmit} noValidate>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={onChange}
                    value={name}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={onChange}
                    value={email}
                />
                <input
                    type="password"
                    name="password1"
                    placeholder="Password"
                    onChange={onChange}
                    value={password1}
                />
                <input
                    type="password"
                    name="password2"
                    placeholder="Repeat Password"
                    onChange={onChange}
                    value={password2}
                />
                <button type="submit">Create</button>
                <button type="button" onClick={reset}>Reset</button>
            </form>
        </div>
    )
}
