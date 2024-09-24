import React, { JSXElementConstructor, MouseEvent, MouseEventHandler, useState } from 'react'
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types';
import { Button, Image, Table, Toast, ToastContainer } from 'react-bootstrap';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import { truncateHTML } from '@/utils/functions';
import { FlashMessage, ProjectProps } from '@/types/types';
import axios from 'axios';

interface Props extends PageProps {
    projects: ProjectProps[];
    flash: FlashMessage;
}

function Index ({auth, projects, flash}: Props) {

    const {delete: deleteProyect} = useForm();

    const handleDelete = (id: number) => {
        if(confirm("¿Desea eliminar el proyecto?")) {
            deleteProyect(route('project.destroy', id));
        }
    }
    
    return (
        <AdminLayout user={auth.user} flash={flash} header={<h2>Bienvenido {auth.user.name}</h2>}>
            <Head title="Proyectos" />
            <main>

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
                                <td key='delete' align='center' className='align-middle'><Button onClick={() => handleDelete(project.id)} className='btn btn-danger'>Eliminar</Button></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </main>
        </AdminLayout>
    );
}

export default Index