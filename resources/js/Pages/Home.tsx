import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import React from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';

type Props = {}

function Home({}: Props) {
    return (
        <MainLayout>

            <Head title='Eric Rojas'/>

             <Container className="d-flex flex-column align-items-center justify-content-center full-min-height">
                <div className='text-center'>
                    <p className='fs-1 fw-bolder mb-1'>Hola! Soy Eric Rojas</p>
                    <p className='fs-3'>Un ingeniero en informática orientado a resultados, con fascinación por la tecnología y motivación por resolver problemas y adquirir nuevos conocimientos.</p>
                    
                    <div className='mt-5'>
                        <Badge className='fs-5 me-1 mb-1 mt-2'>C#</Badge>
                        <Badge className='fs-5 me-1'>.NET</Badge>
                        <Badge className='fs-5 me-1'>PHP</Badge>
                        <Badge className='fs-5 me-1'>Laravel</Badge>
                        <Badge className='fs-5 me-1'>React</Badge>
                        <Badge className='fs-5 me-1'>Bootstrap</Badge>
                        <Badge className='fs-5 me-1'>SQL</Badge>
                        <Badge className='fs-5 me-1'>Y mucho más...</Badge>
                    </div>
                </div>
             </Container>
        
             <Container className="d-flex align-items-center full-min-height">
                <div>
                    <p className='fs-2 fw-bold'>Un poco de mi historia...</p>
                    <p className='fs-5'>Nací en un pequeño pueblo de la Comuna de Colbún, llamado Paso Rari. Desde pequeño siempre tuve una mente muy curiosa, interesándome por muchos temas distintos, la gran mayoría relacionados a las Ciencias.</p>
                </div>
             </Container>

        </MainLayout>
    );
}

export default Home