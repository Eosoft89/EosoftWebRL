import FadeContainer from '@/Components/Bootstrap/FadeContainer';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import React from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';

type Props = {}

function Home({}: Props) {
    return (
        <MainLayout>

            <Head title='Inicio'/>

             <Container className="d-flex flex-column align-items-center justify-content-center full-min-height">
                <div className='text-center'>
                    <FadeContainer timeToAppear={200}>
                        <p className='fs-1 fw-bolder mb-1'>Hola! Soy Eric Rojas</p>
                    </FadeContainer>
                    
                    <FadeContainer timeToAppear={600}>
                        <p className='fs-3'>Un ingeniero en informática orientado a resultados, con fascinación 
                        por la tecnología y motivación por resolver problemas y adquirir nuevos conocimientos.</p>
                    </FadeContainer>
                    
                    <FadeContainer timeToAppear={1200}>
                        <div className='mt-5'>
                            <Badge className='fs-5 me-1 mb-1 mt-2'>C#</Badge>
                            <Badge className='fs-5 me-1'>.NET</Badge>
                            <Badge className='fs-5 me-1'>PHP</Badge>
                            <Badge className='fs-5 me-1'>Laravel</Badge>
                            <Badge className='fs-5 me-1'>React</Badge>
                            <Badge className='fs-5 me-1'>Bootstrap</Badge>
                            <Badge className='fs-5 me-1'>SQL</Badge>        
                        </div>
                    </FadeContainer>
                    
                    <FadeContainer timeToAppear={2000} timeout={2000} className='mt-1'>
                        <Badge className='fs-5 me-1'>Y mucho más...</Badge>
                    </FadeContainer>

                </div>
             </Container>
        
             <Container className="d-flex align-items-center full-min-height">
                <div>
                    <p className='fs-2 fw-bold'>Perfil...</p>
                    <p className='fs-5'>
                        Soy un profesional con más de diez años de experiencia en diseño y desarrollo Full Stack de software, 
                        además cuento con conocimientos en ciencia de datos. Me considero una persona cordial, responsable, proactiva, 
                        adaptable y comprometida con mi trabajo y profesión, con gran capacidad analítica y habilidad para diseñar y 
                        desarrollar software robusto y escalable. Estoy constantemente mejorando mis conocimientos y cuento con 
                        grandes cualidades para el liderazgo y el trabajo en equipo.
                    </p>
                </div>
             </Container>

        </MainLayout>
    );
}

export default Home