import NavLink from '@/Components/Bootstrap/NavLink';
import MainLayout from '@/Layouts/MainLayout';
import { truncateHTML } from '@/utils/functions';
import { Head, Link } from '@inertiajs/react';
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

interface Project {
    id: number;
    title: string;
    content: string;
    cover_url: string | undefined;
    }

type Props = {
    projects: Project[]
}

function Project({projects}: Props) {

    return (
        <MainLayout>
            <Head title='Projects'/>
            <h2>Proyectos</h2>
            <Row>
                {projects.map((project) => 
                <Col lg={3} md={6} xs={12} className='bg-success p-1 d-flex justify-content-center align-items-center'>
                    <Card style={{ width: '20rem', height:'32rem' }} >
                        <Card.Img variant="top" src={project.cover_url} alt={'Portada del proyecto' + project.title}/>
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>
                                {truncateHTML(project.content, 100)}
                            </Card.Text>
                            <Link href={route('projectDetail', project.id)} className='btn btn-primary'>Ver más</Link>
                        </Card.Body>
                    </Card>
                </Col>
                )}
                
            </Row>
        </MainLayout>
    );
}

export default Project;