import React, { JSXElementConstructor } from 'react'
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types';
import { Button, Table } from 'react-bootstrap';
import { Head, Link } from '@inertiajs/react';
import NavLink from '@/Components/Bootstrap/NavLink';

interface Project {
    id: number;
    title: string;
    content: string;
}

interface Props extends PageProps<{projects: Project[]}>{

}

function Index ({auth, projects}: Props) {

    const itemList: JSX.Element[] = [];

    for (let index = 0; index < projects.length; index++) {
        itemList.push(
            <tr>
                <td>{index + 1}</td>
                <td>{projects[index].title}</td>
                <td>{projects[index].content}</td>
            </tr>
        );
    }

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
                        {itemList}
                    </tbody>
                </Table>
            </main>
        </AdminLayout>
    );
}

export default Index