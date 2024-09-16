import React, { JSXElementConstructor } from 'react'
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types';
import { Button, Image, Table } from 'react-bootstrap';
import { Head, Link } from '@inertiajs/react';
import { truncateHTML } from '@/utils/functions';
import { ProjectProps } from '@/types/types';


interface Props extends PageProps<{projects: ProjectProps[]}>{

}

function Index ({auth, projects}: Props) {

    return (
        <AdminLayout user={auth.user} header={<h2>Bienvenido {auth.user.name}</h2>}>
            <Head title="Proyectos" />
            <main>

                <h2 className='mt-3 mb-3'>Proyectos</h2>

                <Link href={route('createProject')} className='btn btn-primary m-2'>Crear nuevo</Link>

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
                                <td key='edit' align='center' className='align-middle'><Link href={route('editProject', project.id)} className='btn btn-primary'>Editar</Link></td>
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