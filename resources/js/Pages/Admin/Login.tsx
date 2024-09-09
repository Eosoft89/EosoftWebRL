import LoadingButton from '@/Components/Bootstrap/LoadingButton';
import LoginLayout from '@/Layouts/LoginLayout';
import { Head, useForm } from '@inertiajs/react';
import React, { FormEventHandler } from 'react'
import { Button, Form, InputGroup} from 'react-bootstrap'

type Props = {
    status?: string;
    canResetPassword: boolean;
}

function Login({ status, canResetPassword }: Props) {
    
    const {data, setData, post, processing, errors, reset} = useForm({
        email: '',
        password: '',
        remember: false,
    });
    
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        
        <LoginLayout>
            <Head title="Log in"/>

            {status && <div className="mb-4 font-weight-medium text-sm text-success">{status}</div>}

            <Form onSubmit={submit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            id="email"
                            value={data.email}
                            autoComplete='username'
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <Form.Control.Feedback type='invalid' tooltip>
                            {errors.email}
                        </Form.Control.Feedback>
                    </InputGroup> 
                    <Form.Text className="text-muted">
                        Nunca compartiremos tu email.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            value={data.password}
                            autoComplete='current-password'
                            onChange={(e) => setData('password', e.target.value)}
                        />
                    </InputGroup>
                    <Form.Control.Feedback type='invalid' tooltip>
                        {errors.password}
                    </Form.Control.Feedback>
                </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                        type="checkbox" 
                        label="Recuérdame"
                        name='remember'
                        checked={data.remember}
                        onChange={(e) => setData('remember', e.target.checked)}
                    />
                </Form.Group>
                <LoadingButton type='submit' disabled={processing}>
                    Ingresar
                </LoadingButton>      
            </Form>
        </LoginLayout>

    );
}

export default Login