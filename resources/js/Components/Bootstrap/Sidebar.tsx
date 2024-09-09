import { useState } from 'react';
import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap';

type Props = {}

function Sidebar({}: Props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      {/* Botón para abrir el menú en dispositivos móviles */}
      <button className="btn btn-primary d-md-none" onClick={handleShow}>
        Menú
      </button>

      {/* Menu lateral Offcanvas */}
      <Offcanvas show={show} onHide={handleClose} responsive="md">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú Lateral</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#profile">Perfil</Nav.Link>
            <Nav.Link href="#settings">Configuraciones</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Menu lateral visible en pantallas más grandes */}
      <div className="d-none d-md-block">
        <Nav className="flex-column bg-light vh-100 p-3">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#profile">Perfil</Nav.Link>
          <Nav.Link href="#settings">Configuraciones</Nav.Link>
        </Nav>
      </div>
    </>
  );
};

export default Sidebar