import Sidebar from '@/Components/Bootstrap/Sidebar';
import { User } from '@/types';
import React, { PropsWithChildren, ReactNode, useState } from 'react'
import { Nav, Navbar, Container, Offcanvas, Button, Col, Row } from 'react-bootstrap';

type Props = {}

function AdminLayout({user, header, children}: PropsWithChildren<{user: User, header?: ReactNode }>) {
    
    return (

        <Container fluid>
            <Row>
                <Col xl={2} md={2} className='full-height bg-gray-300 fixed-top'>
                <Sidebar/>
                </Col>
                <Col className='offset-2'>
                    <main>
                        {children}
                    </main>
                </Col>    
            </Row>
                    
        </Container>
    );
        
}

export default AdminLayout