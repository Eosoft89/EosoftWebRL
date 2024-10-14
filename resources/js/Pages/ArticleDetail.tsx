import MainLayout from '@/Layouts/MainLayout';
import { ArticleProps } from '@/types/types'
import { Head } from '@inertiajs/react';
import HTMLReactParser from 'html-react-parser/lib/index';
import React, { PropsWithChildren } from 'react'
import { Container, Image } from 'react-bootstrap';


function ArticleDetail({...article}: ArticleProps) {
  return (
    <MainLayout>
        <Head title='Artículo'/>
        <br /> <br /> <br /> <br /> <br />
        <Container>
            <h1>{article.title}</h1>
            <Image src={article.cover_url} width={400} className='mt-4'/>
            <div className='mt-4'>
                {HTMLReactParser(article.content)}
            </div>
        </Container>
    </MainLayout>
  );
}

export default ArticleDetail