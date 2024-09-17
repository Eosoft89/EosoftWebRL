import { useState } from 'react';
import { Container, Image, Navbar, NavDropdown, Offcanvas, Nav, ListGroup, NavItem, NavbarBrand } from 'react-bootstrap';

import NavLink from '../NavLink';
import Home from '@/Pages/Home';
import { usePage } from '@inertiajs/react';
import ResponsiveNavLink from '../ResponsiveNavLink';


type Props = {}

function Sidebar({}: Props) {

    const brandUrl = `${window.location.origin}/storage/images/eosoft_logo.png`;

    return (
        <Navbar className='flex-column'>
            <Navbar.Brand href={route('admin')} className='mb-4'>
                <Image src={brandUrl} roundedCircle width={200}/>
            </Navbar.Brand>
            <NavLink href={route('admin')} active={route().current('admin')} className='fs-5 m-3 fw-bold text-decoration-none text-dark'>
                <i className="bi bi-house"/> <span className='ml-1'>Home</span>
            </NavLink>
            <NavLink href={route('admin.projects')} active={route().current('admin.projects')} className='fs-5 m-3 fw-bold text-decoration-none text-dark'>
              <i className="bi bi-braces"/> <span className='ml-1'>Proyectos</span>
            </NavLink>
            <NavLink href='#' active={false} className='fs-5 m-3 fw-bold text-decoration-none text-dark'>
              <i className="bi bi-blockquote-left"/> <span className='ml-1'>Artículos</span>
            </NavLink>
            <NavLink href={route('home')} active={false} className='fs-5 m-3 fw-bold text-decoration-none text-dark'>
              <i className="bi bi-globe"/> <span className='ml-1'>Website</span>
            </NavLink>
            <NavDropdown title="Administrador" id="navbarScrollingDropdown" className='fs-6 m-3'>
              <NavDropdown.Item href="#action3">Configuración</NavDropdown.Item>
              <NavLink active={false} method='post' href={route('logout')} className='dropdown-item'>
                Cerrar sesión
              </NavLink>
            </NavDropdown>  
        </Navbar>
    );
};

export default Sidebar