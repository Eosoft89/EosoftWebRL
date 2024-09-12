import MainLayout from '@/Layouts/MainLayout';
import { truncateHTML } from '@/utils/functions';
import { Head } from '@inertiajs/react';
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

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
            <Head title='Projects'/>
            <h2>Proyectos</h2>
            <Row>
                {projects.map((project) => 
                <Col lg={3} md={6} xs={12} className='bg-success p-1 d-flex justify-content-center align-items-center'>
                    <Card style={{ width: '20rem', height:'32rem' }} >
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>
                                {truncateHTML(project.content, 100)}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                )}
                
            </Row>
        </MainLayout>
    );
}

export default Project;