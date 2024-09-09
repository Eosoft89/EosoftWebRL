import React from 'react'
import { Button, Form} from 'react-bootstrap'
import { Link } from '@inertiajs/react';

type Props = {}

function Login({}: Props) {
    return (

        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center pt-6 bg-light dark:bg-dark">
            
            <Link href='#'>
                <img src="storage/images/eosoft_logo.png" width={300} alt="" />
            </Link>
            
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

        
    );
}

export default Login