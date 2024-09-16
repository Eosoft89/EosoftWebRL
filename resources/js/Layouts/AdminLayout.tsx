import Sidebar from '@/Components/Bootstrap/Sidebar';
import SidebarClaude from '@/Components/Bootstrap/SidebarClaude';
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

        /*<Container fluid>
        <Row>
            <Col md={3} lg={2} className="px-0">
            <SidebarClaude/>
            </Col>
            <Col md={9} lg={10} className="ms-sm-auto px-md-4">
                <main>{children}</main>
            </Col>
        </Row>
        </Container>*/
        
    );
        
}

export default AdminLayout