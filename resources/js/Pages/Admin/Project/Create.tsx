import {useState, useRef, FormEventHandler, ChangeEvent, useEffect} from 'react'
import JoditEditor from 'jodit-react';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Accordion, Button, Card, Col, Form, Image, Row } from 'react-bootstrap';
import LoadingButton from '@/Components/Bootstrap/LoadingButton';
import { ProjectProps } from '@/types/types';


interface FormProps {
    title: string;
    content: string;
    file: File | undefined;
}

type Image = {
    url: string;
}
interface Props extends PageProps {
    images: Image[];
    project?: ProjectProps
}

function Create({auth, images, project}: Props) {

    const editor = useRef(null);

    const{data, setData, post, patch, processing, errors } = useForm<FormProps>({
        title: '',
        content: '',
        file: undefined
    });

    useEffect(() => {
        if(project){
            setData({
                title: project.title || '',
                content: project.content || '',
                file: undefined
            });
        }
    }, [project]);

    function handleFile(e: ChangeEvent<HTMLInputElement>) : void {
        if (e.currentTarget.files){
            setData('file', e.currentTarget.files[0]);
        }
    }

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        if(project){
            patch(route('updateProject', project.id));
        }
        else{
            post(route('storeProject'));
        }
        
    }

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            alert('Texto copiado al portapapeles')
        } catch (error) {
            alert('Error: ' + error);
        }
    }

    return (
        <AdminLayout user={auth.user}>
            <Head title='New Project'/>
            <h2 className='mt-3 mb-3'>Nuevo proyecto</h2>

            <div className="p-4 shadow-md rounded-lg">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="TitleInput">
                        <Form.Label>Título</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Nuevo proyecto"
                            id="title"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                        />
                        {errors.title && <div>{errors.title}</div>}
                    </Form.Group>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Portada</Form.Label>
                        <Form.Control 
                            type='file'
                            id='file'
                            onChange={handleFile}/>
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ContentInput">
                        <Form.Label>Contenido</Form.Label>
                        <JoditEditor 
                            ref={editor}
                            value={data.content}
                            onChange={newContent => setData('content', newContent)}
                        />
                        {errors.content && <div>{errors.content}</div>}
                    </Form.Group>
                    <LoadingButton type='submit' disabled={processing}>
                        {project ? 'Actualizar' : 'Registrar'}
                    </LoadingButton>   
                    <Button variant='danger ml-1'>
                        Limpiar
                    </Button>
                </Form>
                <br />
            </div>

            <div className="p-4 shadow-md rounded-lg">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Imágenes del sistema</Accordion.Header>
                        <Accordion.Body>
                            <Row>

                            { images.map(image => 
                                <Col lg={2} md={6} xs={12} className='p-1 d-flex justify-content-center align-items-center'>
                                    <Card style={{ width: '14rem'}}>
                                    <Card.Img variant="top" src={image.url}/>
                                    <Card.Body>
                                        <Card.Text style={{fontSize: 12 }}>
                                            <b>Link: </b>{image.url}
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => copyToClipboard(image.url)}>Copiar link</Button>
                                    </Card.Body>
                                    </Card>
                                </Col>
                            )}
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </AdminLayout>
    )
}

export default Create