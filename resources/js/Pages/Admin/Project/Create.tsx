import React, {useState, useRef, useMemo} from 'react'
import JoditEditor from 'jodit-react';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import { Button, Form } from 'react-bootstrap';
import LoadingButton from '@/Components/Bootstrap/LoadingButton';

type Props = {}

function Create({auth}: PageProps) {

    const editor = useRef(null);
    const [content, setContent] = useState('');

    return (
        <AdminLayout user={auth.user}>
            <Head title='New Project'/>
            <h2 className='mt-3 mb-3'>Nuevo proyecto</h2>

            <div className="p-4 shadow-md rounded-lg">
                <Form>
                    <Form.Group className="mb-3" controlId="TitleInput">
                        <Form.Label>Título</Form.Label>
                        <Form.Control type="text" placeholder="Nuevo proyecto" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ContentInput">
                        <Form.Label>Contenido</Form.Label>
                        <JoditEditor 
                            ref={editor}
                            value={content}
                            onChange={newContent => setContent(newContent)}
                        />

                    </Form.Group>
                    <LoadingButton type='submit' disabled={false}>
                        Registrar
                    </LoadingButton>   
                    <Button variant='danger ml-1'>
                        Limpiar
                    </Button>
                </Form>
            </div>
            

        </AdminLayout>
    )
}

export default Create