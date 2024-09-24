import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types'
import { FlashMessage, ImageProps } from '@/types/types';
import { Head } from '@inertiajs/react';
import React from 'react'

interface FormProps {
    name: string;
    file: File | null;
}

interface Props extends PageProps {
    images: ImageProps[];
    flash: FlashMessage;
}

function Index({auth, images, flash}: Props) {
    return (
        <AdminLayout user={auth.user} flash={flash}>
            <Head title='Imágenes'/>
            <main>
                <h2 className='mt-3 mb-3'>Imágenes</h2>
            </main>
        </AdminLayout>
    )
}

export default Index