import {useState, useRef, FormEventHandler, ChangeEvent} from 'react'
import JoditEditor from 'jodit-react';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Button, Form } from 'react-bootstrap';
import LoadingButton from '@/Components/Bootstrap/LoadingButton';


interface FormProps {
    title: string;
    content: string;
    file: File | undefined;
}

function Create({auth}: PageProps) {

    const editor = useRef(null);
    const{data, setData, post, processing, errors } = useForm<FormProps>({
        title: '',
        content: '',
        file: undefined
    });

    function handleFile(e: ChangeEvent<HTMLInputElement>) : void {
        if (e.currentTarget.files){
            setData('file', e.currentTarget.files[0]);
        }
    }

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('storeProject'));
    }

    return (
        <AdminLayout user={auth.user}>
            <Head title='New Project'/>
            <h2 className='mt-3 mb-3'>Nuevo proyecto</h2>

            <div className="p-4 shadow-md rounded-lg">
                <Form onSubmit={submit} method='POST' encType='multipart/form-data'>
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
                        Registrar
                    </LoadingButton>   
                    <Button variant='danger ml-1'>
                        Limpiar
                    </Button>
                </Form>
                <br />
            </div>
            

        </AdminLayout>
    )
}

export default Create