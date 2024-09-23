import React, { JSXElementConstructor, useState } from 'react'
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types';
import { Button, Image, Table, Toast, ToastContainer } from 'react-bootstrap';
import { Head, Link, usePage } from '@inertiajs/react';
import { truncateHTML } from '@/utils/functions';
import { ProjectProps } from '@/types/types';


interface FlashProps {
    success? : string;
    error? : string;
}

interface Props extends PageProps<{projects: ProjectProps[], flash?: FlashProps}>{

}

function Index ({auth, projects, flash}: Props) {

    const [show, setShow] = useState(false);

    if (flash?.success){
        setShow(true);
    }

    return (
        <AdminLayout user={auth.user} header={<h2>Bienvenido {auth.user.name}</h2>}>
            <Head title="Proyectos" />
            <main>
                <Button onClick={() => setShow(true)}>Toast</Button>
                {flash?.success && (
                <div className="alert alert-success">
                    {flash.success}
                </div>
            )}
                <ToastContainer className='p-3 position-fixed' position='bottom-end' style={{zIndex: 1}}>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} bg='success' autohide>
                        <Toast.Header>
                            <strong className="me-auto"><i className="bi bi-check-all fs-5"/>Éxito</strong>
                        </Toast.Header>
                        <Toast.Body className='text-white'>{flash?.success}</Toast.Body>
                    </Toast>
                </ToastContainer>

                <h2 className='mt-3 mb-3'>Proyectos</h2>

                <Link href={route('project.create')} className='btn btn-primary m-2'>Crear nuevo</Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Portada</th>
                            <th>Título</th>
                            <th>Contenido</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project, index) =>
                            <tr key={project.id}>
                                <td key='index' align='center' className='align-middle'>{index + 1}</td>
                                <td key='cover' align='center' className='align-middle'><Image src={project.cover_url} width={80} /></td>
                                <td key='title' className='align-middle'>{project.title}</td>
                                <td key='content' className='align-middle'>{truncateHTML(project.content, 100)}</td>
                                <td key='edit' align='center' className='align-middle'><Link href={route('project.edit', project.id)} className='btn btn-primary'>Editar</Link></td>
                                <td key='delete' align='center' className='align-middle'><Link href='#' className='btn btn-danger'>Eliminar</Link></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </main>
        </AdminLayout>
    );
}

export default Index