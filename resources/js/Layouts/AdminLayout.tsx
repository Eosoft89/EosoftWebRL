import { User } from '@/types';
import React, { PropsWithChildren, ReactNode, useState } from 'react'
import { Navbar, Container, Offcanvas, Button } from 'react-bootstrap';

type Props = {}

function AdminLayout({user, header, children}: PropsWithChildren<{user: User, header?: ReactNode }>) {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {user.name}
                </Offcanvas.Body>
            </Offcanvas>

            <main>
                <h2>{header}</h2>
                {children}
            </main>
        </>      
    );
}

export default AdminLayout