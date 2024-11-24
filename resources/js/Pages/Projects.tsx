import FadeContainer from '@/Components/Bootstrap/FadeContainer';
import NavLink from '@/Components/Bootstrap/NavLink';
import MainLayout from '@/Layouts/MainLayout';
import { ProjectProps } from '@/types/types';
import { truncateHTML } from '@/utils/functions';
import { Head, Link } from '@inertiajs/react';
import React from 'react';
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';

type Props = {
    projects: ProjectProps[];
}

function Projects({projects}: Props) {

    let timeToAppear = 0;

    return (
        <MainLayout>
            <Head title="Proyectos" />
            <br />
            <div className="pt-5">
                <Container>
                    <Row className="mb-4">
                        <Col>
                            <h1 className="display-4 mb-3">Portafolio de Proyectos</h1>
                            <p className="lead text-muted">
                                Explora mi colección de proyectos y desarrollo de software
                            </p>
                        </Col>
                    </Row>

                    <Row className="g-4">
                        {projects.map((project) => {
                            timeToAppear += 120;
                            return(
                            <Col lg={4} md={6} xs={12} key={project.id}>
                            <FadeContainer timeToAppear={timeToAppear += 120} timeout={500}>
                                <Card className="h-100 shadow-sm project-card">
                                    <div className="position-relative">
                                        <Card.Img
                                            variant="top"
                                            src={project.cover_url}
                                            alt={`Portada del proyecto ${project.title}`}
                                            style={{ 
                                                height: '280px',
                                                objectFit: 'cover'
                                            }}
                                        />
                                            {project.tags && (
                                                <div className="position-absolute bottom-0 start-0 p-2 w-100 tech-gradient">
                                                    <div className="d-flex flex-wrap gap-2">
                                                        {project.tags.map((tag, index) => (
                                                            <Badge 
                                                                key={index}
                                                                bg="success" 
                                                                className="rounded-pill px-2 py-1"
                                                            >
                                                                {tag.name}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        
                                        <Card.Body className="d-flex flex-column">
                                            <Card.Title className="h4 mb-3">
                                                {project.title}
                                            </Card.Title>
                                            <Card.Text className="flex-grow-1">
                                                {truncateHTML(project.content, 120)}
                                            </Card.Text>
                                            
                                            <div className="d-flex gap-2 mt-3">
                                                <Link
                                                    href={route('project.detail', project.id)}
                                                    className="btn btn-outline-primary flex-grow-1"
                                                >
                                                    Ver detalles
                                                </Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </FadeContainer>
                            </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        </MainLayout>
    );
}

export default Projects;