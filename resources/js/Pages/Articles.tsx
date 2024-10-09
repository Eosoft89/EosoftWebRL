import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

type Props = {}

function Articles({}: Props) {
    return (
        <MainLayout>
            <Head title='Articles'/>
            <h2>Articles</h2>
            <p>No data</p>
        </MainLayout>
    )
}

export default Articles