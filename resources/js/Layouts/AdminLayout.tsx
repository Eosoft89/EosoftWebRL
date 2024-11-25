import NavLink from '@/Components/Bootstrap/NavLink';
import { User } from '@/types';
import { FlashMessage } from '@/types/types';
import { PropsWithChildren, ReactNode, useEffect, useState } from 'react'
import { Container, Row, ToastContainer, Toast, Image } from 'react-bootstrap';
import logo from '@/assets/images/logo_er.jpeg';


function AdminLayout({children, flash}: PropsWithChildren<{user: User, header?: ReactNode, flash?: FlashMessage}>) {

    const [show, setShow] = useState(false);

    useEffect(() => {
        if (flash?.success){
            setShow(true);
        }
    }, [flash]);

    return (

        <Container fluid className='overflow-hidden'>
            <ToastContainer className='p-3 position-fixed' position='top-end' style={{zIndex: 1}}>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} bg='success' autohide>
                        <Toast.Header>
                            <strong className="me-auto"><i className="bi bi-check-all fs-5"/>Éxito</strong>
                        </Toast.Header>
                        <Toast.Body className='text-white'>{flash?.success}</Toast.Body>
                    </Toast>
            </ToastContainer>
            <Row className='vh-100 overflow-auto'>
                <div className="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 d-flex sticky-top bg-light bg-gradient">
                    <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2">
                        <div className="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                            <div className="d-none d-sm-block"><Image src={logo} fluid width={200} roundedCircle/></div>
                            <div className="d-block d-sm-none"><Image src={logo} width={60} roundedCircle /></div>
                        </div>
                        <ul className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item">
                                <NavLink href={route('admin')} active={route().current('admin')} className="px-sm-0 px-2 text-dark">
                                    <i className="fs-5 bi bi-house"></i><span className="ms-1 d-none d-sm-inline">Inicio</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href={route('admin.projects')} active={route().current('admin.projects')} className="px-sm-0 px-2 text-dark">
                                    <i className="fs-5 bi bi-braces"></i><span className="ms-1 d-none d-sm-inline">Proyectos</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href={route('admin.articles')} active={route().current('admin.articles')} className="px-sm-0 px-2 text-dark">
                                    <i className="fs-5 bi bi-blockquote-left"></i><span className="ms-1 d-none d-sm-inline">Artículos</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href={route('admin.images')} active={route().current('admin.images')} className="px-sm-0 px-2 text-dark">
                                    <i className="fs-5 bi bi-image"></i><span className="ms-1 d-none d-sm-inline">Imágenes</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href={route('home')} active={route().current('home')} className="px-sm-0 px-2 text-dark">
                                    <i className="fs-5 bi bi-globe"></i><span className="ms-1 d-none d-sm-inline">Sitio web</span>
                                </NavLink>
                            </li>

                        </ul>
                        <div className="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
                            <a href="#" className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="d-none d-sm-inline mx-1">Administrador</span>
                            </a>
                            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser1">
                                <li><a className="dropdown-item" href="#">Configuración</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><NavLink className="dropdown-item" active={false} href={route('logout')}>Cerrar sesión</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col d-flex flex-column h-100">
                    <main className="row">
                        <div className="col pt-4">
                            {children}
                        </div>
                    </main>
                    <footer className="row bg-light py-4 mt-auto">
                        <div className="col"> Eric Rojas M. Todos los derechos reservados.  </div>
                    </footer>
                </div>
            </Row>
                    
        </Container>
    );
        
}

export default AdminLayout