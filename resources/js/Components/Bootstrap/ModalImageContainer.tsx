import { ImageProps } from '@/types/types';
import React, { useState } from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'

type Props = {
    images: ImageProps[];
    handleSelectImage: (image: ImageProps) => void;
}

function ModalImageContainer({images, handleSelectImage}: Props) {

    const [show, setShow] = useState(false);

    return (
        <>
            <Button onClick={() => setShow(true)}>
                Seleccionar imagen
            </Button>
            <Modal show={show} fullscreen onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Imágenes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        {images.map(image => 
                            <Col lg={2} md={6} xs={12} className='p-1 d-flex justify-content-center align-items-center' key={image.id}>
                                <Card style={{ width: '14rem'}}>
                                    <Card.Img variant="top" style={{height: '10rem'}} src={image.url}/>
                                    <Card.Body>
                                        <Button variant="primary" onClick={() => {handleSelectImage(image); setShow(false);} }>Seleccionar</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalImageContainer