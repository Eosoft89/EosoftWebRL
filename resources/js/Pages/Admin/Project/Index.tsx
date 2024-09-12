import React, { JSXElementConstructor } from 'react'
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types';
import { Button, Table } from 'react-bootstrap';
import { Head, Link } from '@inertiajs/react';
import { truncateHTML } from '@/utils/functions';

interface Project {
    id: number;
    title: string;
    content: string;
}

interface Props extends PageProps<{projects: Project[]}>{

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
                            <th>title</th>
                            <th>content</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{project.title}</td>
                                <td>{truncateHTML(project.content, 100)}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </main>
        </AdminLayout>
    );
}

export default Index