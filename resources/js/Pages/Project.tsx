import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import React from 'react';

interface Project {
    id: number;
    title: string;
    content: string;
}

type Props = {
    projects: Project[]
}

function Project({projects}: Props) {

    return (
        <MainLayout>
            <Head title='Project'/>
            <ul>
                {projects.map((project) => 
                    <li key={project.id}>
                        <h4>{project.title}</h4>
                        <p>{project.content}</p>
                    </li>
                )}
            </ul>
        </MainLayout>
    );
}

export default Project;