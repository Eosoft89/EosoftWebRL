import MainLayout from '@/Layouts/MainLayout';
import React from 'react';
import HTMLReactParser from 'html-react-parser';
import { Container, Image } from 'react-bootstrap';

type Props = {
    title: string;
    content: string;
    cover_url:string | undefined;
}

function ProjectDetail({title, content, cover_url}: Props) {
    return (
        <MainLayout>
           <br /> <br /> <br /> <br /> <br />
            <Container>
              <h1>{title}</h1>
              <Image src={cover_url} width={400} className='mt-4'/>
              <div className='mt-4'>
                  {HTMLReactParser(content)}
              </div>
            </Container>
        </MainLayout>
    )
}

export default ProjectDetail