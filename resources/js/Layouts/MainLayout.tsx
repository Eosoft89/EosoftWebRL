import NavLink from '@/Components/Bootstrap/NavLink';
import { Link } from '@inertiajs/react';
import React from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

type Props = {
    children: React.ReactNode;
}

function MainLayout({children}: Props) {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-secondary" fixed="top">
        <Container>
            <Link className='navbar-brand' href={route('home')}><h4>Eosoft</h4></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavLink href={route('home')} active={route().current('home')}><h5 className='mr-2'>Inicio</h5></NavLink>
                <NavLink href={route('projects')} active={route().current('projects')}><h5 className='mr-2'>Proyectos</h5></NavLink>
                <NavLink href={route('projects')} active={route().current('projects')}><h5 className='mr-2'>Artículos</h5></NavLink>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

        <main className='container'>
            <br /><br /><br />
            { children }
        </main>
    </div>
  )
}

export default MainLayout