import MainLayout from '@/Layouts/MainLayout';
import React from 'react';
import HTMLReactParser from 'html-react-parser';
import { Image } from 'react-bootstrap';

type Props = {
    title: string;
    content: string;
    cover_url:string | undefined;
}

function ProjectDetail({title, content, cover_url}: Props) {
  return (
    <MainLayout>
        <br/>
        <h1>{title}</h1>
        <Image src={cover_url} width={400} className='mt-4'/>
        <div className='mt-4'>
            {HTMLReactParser(content)}
        </div>
    </MainLayout>
  )
}

export default ProjectDetail