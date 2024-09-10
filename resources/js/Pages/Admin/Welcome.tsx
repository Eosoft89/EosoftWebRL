import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import React from 'react'

type Props = {}

function Welcome({auth}: PageProps) {
    return (
        <AdminLayout user={auth.user} header={<h2>Bienvenido {auth.user.name}</h2>}>
            <Head title="Welcome" />
            <main>Hola</main>

        </AdminLayout>
    );
}

export default Welcome