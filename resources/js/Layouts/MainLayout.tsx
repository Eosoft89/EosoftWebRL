import NavLink from '@/Components/Bootstrap/NavLink';
import { Link } from '@inertiajs/react';
import React from 'react'
import { Nav, Navbar, Container, Form, Button, Image, Stack } from 'react-bootstrap';

type Props = {
    children: React.ReactNode;
}

function MainLayout({children}: Props) {

    const brandUrl = `${window.location.origin}/storage/images/Navbrand.jpg`;

    return (
        <>
            <Navbar expand="lg" className="bg-body-secondary shadow" fixed="top">
            <Container fluid>
                <Link className='navbar-brand ml-8' href={route('home')}> 
                    <Stack direction='horizontal' gap={3}>
                        <Image src={brandUrl} width={60} roundedCircle/> 
                        <h4>Eric Rojas</h4>
                    </Stack>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ml-6">
                        <NavLink href={route('home')} active={route().current('home')}><h5 className='mr-4'>Inicio</h5></NavLink>
                        <NavLink href={route('projects')} active={route().current('projects')}><h5 className='mr-4'>Proyectos</h5></NavLink>
                        <NavLink href={route('articles')} active={route().current('articles')}><h5 className='mr-4'>Artículos</h5></NavLink>
                    
                    </Nav>
                    <Form className="d-flex mx-lg-0 mx-4 mb-lg-0 mb-2">
                        <Form.Control
                        type="search"
                        placeholder="Buscar"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button className='shadow'>Buscar</Button>
                    </Form>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                <Nav className="d-flex flex-row align-items-center gap-3 mx-lg-0 mx-4">
                    {/* Enlaces de redes sociales */}
                    <div className="d-flex gap-3">
                        <a className='fs-4' href='https://github.com/Eosoft89'>
                            <i className="bi bi-github"></i>
                        </a>
                        <a className='fs-4' href='https://www.linkedin.com/in/eric-rojas-montesino'>
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a className='fs-4' href='mailto:ericrojas.ing@gmail.com'>
                            <i className="bi bi-envelope-fill"></i>
                        </a>
                    </div>
                    <div className="vr"></div> {/* Línea vertical separadora */}
                    <NavLink href={route('admin')} active={false} className="d-flex align-items-center">
                        <i className="bi bi-key-fill me-2" />
                    </NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            <main className='bg-light pt-5'>
                {children}
            </main>
            {/*<main className='container'>
                <br /><br /><br /> <br /><br />
                { children }
            </main>*/}
        </>
    )
}

export default MainLayout