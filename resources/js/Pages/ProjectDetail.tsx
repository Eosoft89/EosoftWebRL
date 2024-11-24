import MainLayout from '@/Layouts/MainLayout';
import React from 'react';
import HTMLReactParser from 'html-react-parser';
import { Badge, Container, Image } from 'react-bootstrap';
import { ProjectProps } from '@/types/types';
import { Head } from '@inertiajs/react';
import FadeContainer from '@/Components/Bootstrap/FadeContainer';

function ProjectDetail({...project}: ProjectProps) {
    
    let timeToAppear = 0;
    
    return (

        <MainLayout>
            <Head title='Proyecto'/>    
            <br />
            <Container className='pt-5'>
                <FadeContainer timeToAppear={timeToAppear += 120} timeout={500}>
                    <h1>{project.title}</h1>
                </FadeContainer>
                <FadeContainer timeToAppear={timeToAppear += 120}>
                    <Image src={project.cover_url} width={400} className='mt-4'/>
                </FadeContainer>
                
                {project.tags && (
                    <div className="d-flex flex-wrap gap-1 mt-2">
                        {project.tags.map((tag, index) => {
                            timeToAppear+=100;
                            return(
                                <FadeContainer timeToAppear={timeToAppear}>
                                    <Badge 
                                        key={index}
                                        bg="success" 
                                        className="rounded-pill px-2 py-1"
                                    >
                                        {tag.name}
                                    </Badge>
                                </FadeContainer>
                            );
                        })}
                    </div>
                )}

                <FadeContainer timeToAppear={timeToAppear += 220}>
                    <div className='mt-4'>
                        {HTMLReactParser(project.content)}
                    </div>
                </FadeContainer>                                   
                
            </Container>
        </MainLayout>
    )
}

export default ProjectDetail