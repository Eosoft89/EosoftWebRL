import NavLink from '@/Components/Bootstrap/NavLink';
import { Link } from '@inertiajs/react';
import React from 'react'
import { Nav, Navbar, Container, NavDropdown, Form, Button, Image, Stack } from 'react-bootstrap';

type Props = {
    children: React.ReactNode;
}

function MainLayout({children}: Props) {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-secondary shadow" fixed="top">
        <Container fluid>
            <Link className='navbar-brand ml-8' href={route('home')}> 
                <Stack direction='horizontal' gap={3}>
                    <Image src='storage/images/Navbrand.jpg' width={60} roundedCircle/> 
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
            <Form className="d-flex">
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
                <Nav>
                    <NavLink href={route('admin')} active={false}>
                    <i className="bi bi-gear-fill"></i> Admin 
                    </NavLink>
                </Nav> 
            </Navbar.Collapse>
        </Container>
        </Navbar>

        <main>
            {children}
        </main>
        {/*<main className='container'>
            <br /><br /><br /> <br /><br />
            { children }
        </main>*/}
    </div>
  )
}

export default MainLayout