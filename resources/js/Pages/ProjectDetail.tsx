import MainLayout from '@/Layouts/MainLayout';
import React from 'react';
import HTMLReactParser from 'html-react-parser';
import { Container, Image } from 'react-bootstrap';
import { ProjectProps } from '@/types/types';
import { Head } from '@inertiajs/react';

function ProjectDetail({...project}: ProjectProps) {
    return (
        <MainLayout>
            <Head title='Proyecto'/>    
           <br /> <br /> <br /> <br /> <br />
            <Container>
              <h1>{project.title}</h1>
              <Image src={project.cover_url} width={400} className='mt-4'/>
              <div className='mt-4'>
                  {HTMLReactParser(project.content)}
              </div>
            </Container>
        </MainLayout>
    )
}

export default ProjectDetail