import ImageCard from '@/Components/Bootstrap/ImageCard';
import ToastMessage from '@/Components/Bootstrap/ToastMessage';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types'
import { FlashMessage, ImageProps } from '@/types/types';
import { Head, useForm } from '@inertiajs/react';
import React, { useState } from 'react'
import { Button, Card, CardText, CardTitle, Col, Row } from 'react-bootstrap';

interface FormProps {
    name: string;
    file: File | null;
}

interface Props extends PageProps {
    images: ImageProps[];
    flash: FlashMessage;
}

function Index({auth, images, flash}: Props) {

    const {delete: deleteProyect} = useForm();

    const handleDelete = (id: number) => {
        if (confirm("¿Desea eliminar la imagen")){
            deleteProyect(route('image.destroy', id));
        }
    }

    return (
        <AdminLayout user={auth.user} flash={flash}>
            <Head title='Imágenes'/>
            <main>
                <h2 className='mt-3 mb-3'>Imágenes</h2>
                <Row>
                    { images.map(image => 
                        <Col lg={2} md={6} xs={12} className='p-1 d-flex justify-content-center align-items-center' key={image.id}>
                            <ImageCard image={image} canDelete={true} handleDelete={handleDelete}/>
                        </Col>
                    )}
                </Row>
            </main>
        </AdminLayout>
    )
}

export default Index