import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import React from 'react';

type Props = {}

function Home({}: Props) {
    return (
        <MainLayout>
            <Head title='Home'/>
            <p>Hola Eric</p>
        </MainLayout>
    );
}

export default Home