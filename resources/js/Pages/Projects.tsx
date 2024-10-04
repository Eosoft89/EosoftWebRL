import FadeContainer from '@/Components/Bootstrap/FadeContainer';
import NavLink from '@/Components/Bootstrap/NavLink';
import MainLayout from '@/Layouts/MainLayout';
import { ProjectProps } from '@/types/types';
import { truncateHTML } from '@/utils/functions';
import { Head, Link } from '@inertiajs/react';
import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

type Props = {
    projects: ProjectProps[];
}

function Projects({projects}: Props) {

    let timeToAppear = 100;

    return (
        <MainLayout>
            
            <Head title='Projects'/>
            <br /> <br /> <br /> <br /> <br />

            <Container>
                <h2>Proyectos</h2>
                <Row>
                {projects.map((project) => 
                    <Col lg={3} md={6} xs={12} className='bg-success p-1 d-flex justify-content-center align-items-center' key={project.id}>     
                        <FadeContainer timeToAppear={timeToAppear += 120} timeout={500}>
                            <Card style={{ width: '20rem', height:'32rem' }} >
                                <Card.Img variant="top" src={project.cover_url} alt={'Portada del proyecto' + project.title}/>
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>
                                        {truncateHTML(project.content, 100)}
                                    </Card.Text>
                                    <Link href={route('project.detail', project.id)} className='btn btn-primary' alt='Ver detalles del proyecto'>Ver más</Link>
                                </Card.Body>
                            </Card>
                        </FadeContainer> 
                    </Col>
                )}
                </Row>
                
            </Container>

        </MainLayout>
    );
}

export default Projects;