import {useState, useRef, FormEventHandler, ChangeEvent, useEffect, useMemo} from 'react'
import JoditEditor from 'jodit-react';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Accordion, Button, Card, Col, Form, Image, Row } from 'react-bootstrap';
import LoadingButton from '@/Components/Bootstrap/LoadingButton';
import { ArticleProps } from '@/types/types';
import ToastMessage from '@/Components/Bootstrap/ToastMessage';

interface FormProps {
    title: string;
    content: string;
    file: File | null;
}

type Image = {
    id: number;
    url: string;
}
interface Props extends PageProps {
    images: Image[];
    article?: ArticleProps
}

function Create({auth, images, article}: Props) {

    const editor = useRef(null);

    const[showToast, setShowToast] = useState(false);
    const handleHideToast = () => setShowToast(false);

    const{data, setData, post, processing, errors, reset } = useForm<FormProps>({
        title: article?.title || '',
        content: article?.content || '',
        file: null
    });

    const joditConfig = useMemo(
        () => ({
            readonly: false,
            placeholder: article ? '' : 'Contenido...' 
        }),
        []
    );

    useEffect(() => {
        if(article){
            setData({
                title: article.title || '',
                content: article.content || '',
                file: null
            });
        }
    }, [article]);

    function handleFile(e: ChangeEvent<HTMLInputElement>) : void {
        if (e.currentTarget.files){
            setData('file', e.currentTarget.files[0]);
        }
    }

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('content', data.content);
        
        if (data.file) {
            formData.append('file', data.file);
        }

        if(article){
            post(route('article.update', article.id), {
                forceFormData: true,
                preserveState: true,
                preserveScroll: true
            });
        }
        else{
            post(route('article.store'), {
                forceFormData: true
            });
        }
    }

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setShowToast(true);
        } catch (error) {
            alert('Error: ' + error);
        }
    }

    return (
        <AdminLayout user={auth.user}>
            <Head title={ article ? 'Editar artículo' : 'Nuevo artículo'}/>
            <h2 className='mt-3 mb-3'>{ article ? 'Editar artículo' : 'Nuevo artículo'}</h2>

            <div className="p-4 shadow-md rounded-lg">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="TitleInput">
                        <Form.Label>Título</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Nuevo artículo"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                        />
                        {errors.title && <div className='text-danger'>{errors.title}</div>}
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Portada</Form.Label>
                        <Form.Control 
                            type='file'
                            onChange={handleFile}/>
                        {errors.file && <div className="text-danger">{errors.file}</div>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ContentInput">
                        <Form.Label>Contenido</Form.Label>
                        <JoditEditor 
                            ref={editor}
                            value={data.content}
                            onChange={newContent => setData('content', newContent)}
                            config={joditConfig}
                        />
                        {errors.content && <div className='text-danger'>{errors.content}</div>}
                    </Form.Group>
                    <LoadingButton type='submit' disabled={processing}>
                        {article ? 'Actualizar' : 'Registrar'}
                    </LoadingButton>   
                    <Button variant='danger ml-1' onClick={() => reset()}>
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
                                <Col lg={2} md={6} xs={12} className='p-1 d-flex justify-content-center align-items-center' key={image.id}>
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
            <ToastMessage title='Copiado!' showToast={showToast} onClose={handleHideToast}>
                Copiado al portapapes.
            </ToastMessage>
        </AdminLayout>
    )
}

export default Create