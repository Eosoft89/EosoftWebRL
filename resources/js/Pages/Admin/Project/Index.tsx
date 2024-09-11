import React, { JSXElementConstructor } from 'react'
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types';
import { Table } from 'react-bootstrap';
import { Head } from '@inertiajs/react';

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
                <p>{auth.user.name}</p>
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