import { useState } from 'react';
import { Container, Image, Navbar, NavDropdown, Offcanvas, Nav, ListGroup, NavItem, NavbarBrand } from 'react-bootstrap';

import NavLink from '../NavLink';
import Home from '@/Pages/Home';

type Props = {}

function Sidebar({}: Props) {
    return (
        <Navbar className='flex-column'>
            <Navbar.Brand href='#' className='mb-4'>
                <Image src="storage/images/eosoft_logo.png" roundedCircle width={200}/>
            </Navbar.Brand>
            <NavLink href='#' active={false} className='fs-5 m-3 fw-bold text-decoration-none text-dark'>
                <i className="bi bi-house"/> <span className='ml-1'>Home</span>
            </NavLink>
            <NavLink href={route('adminProjects')} active={route().current('adminProjects')} className='fs-5 m-3 fw-bold text-decoration-none text-dark'>
              <i className="bi bi-braces"/> <span className='ml-1'>Proyectos</span>
            </NavLink>
            <NavLink href='#' active={false} className='fs-5 m-3 fw-bold text-decoration-none text-dark'>
              <i className="bi bi-blockquote-left"/> <span className='ml-1'>Artículos</span>
            </NavLink>
            <NavDropdown title="Administrador" id="navbarScrollingDropdown" className='fs-6 m-3'>
              <NavDropdown.Item href="#action3">Configuración</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Cerrar sesión</NavDropdown.Item>
            </NavDropdown>  
        </Navbar>
    );
};

export default Sidebar