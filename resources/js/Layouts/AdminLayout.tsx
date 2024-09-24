import Sidebar from '@/Components/Bootstrap/Sidebar';
import SidebarClaude from '@/Components/Bootstrap/SidebarClaude';
import { User } from '@/types';
import { FlashMessage } from '@/types/types';
import React, { PropsWithChildren, ReactNode, useEffect, useState } from 'react'
import { Nav, Navbar, Container, Offcanvas, Button, Col, Row, ToastContainer, Toast } from 'react-bootstrap';


function AdminLayout({children, flash}: PropsWithChildren<{user: User, header?: ReactNode, flash?: FlashMessage}>) {

    const [show, setShow] = useState(false);

    useEffect(() => {
        if (flash?.success){
            setShow(true);
        }
    }, [flash]);

    return (

        <Container fluid>
            <ToastContainer className='p-3 position-fixed' position='top-end' style={{zIndex: 1}}>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} bg='success' autohide>
                        <Toast.Header>
                            <strong className="me-auto"><i className="bi bi-check-all fs-5"/>Éxito</strong>
                        </Toast.Header>
                        <Toast.Body className='text-white'>{flash?.success}</Toast.Body>
                    </Toast>
            </ToastContainer>
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