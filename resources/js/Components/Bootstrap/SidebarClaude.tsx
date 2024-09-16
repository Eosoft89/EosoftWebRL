import React, { useState } from 'react';
import { Nav, Button, Offcanvas } from 'react-bootstrap';
import { House, Person, Gear, QuestionCircle } from 'react-bootstrap-icons';

const SidebarClaude = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const NavContent = () => (
    <>
      <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>Menú Principal</span>
      </h5>
      <Nav className="flex-column">
        <Nav.Link href="#" className="d-flex align-items-center">
          <House className="me-2" /> Inicio
        </Nav.Link>
        <Nav.Link href="#" className="d-flex align-items-center">
          <Person className="me-2" /> Perfil
        </Nav.Link>
        <Nav.Link href="#" className="d-flex align-items-center">
          <Gear className="me-2" /> Configuración
        </Nav.Link>
        <Nav.Link href="#" className="d-flex align-items-center">
          <QuestionCircle className="me-2" /> Ayuda
        </Nav.Link>
      </Nav>
    </>
  );

  return (
    <>
      <Button variant="primary" className="d-md-none" onClick={handleShow}>
        Menú
      </Button>

      <Offcanvas show={show} onHide={handleClose} responsive="md">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <NavContent />
        </Offcanvas.Body>
      </Offcanvas>

      <div className="d-none d-md-block bg-light sidebar">
        <NavContent />
      </div>
    </>
  );
};

export default SidebarClaude;