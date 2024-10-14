import MainLayout from '@/Layouts/MainLayout'
import { ArticleProps } from '@/types/types'
import { truncateHTML } from '@/utils/functions'
import { Head, Link } from '@inertiajs/react'
import React from 'react'
import { Badge, Button, Container, ListGroup } from 'react-bootstrap'

type Props = {
    articles: ArticleProps[];
}

function Articles({articles}: Props) {
    return (
        <MainLayout>
            <br /> <br /> <br /> <br /> <br />
            <Head title='Articles'/>
            <Container>
                <h2>Articles</h2>
                <ListGroup as="ol" numbered>
                    {articles.map((article) => 
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                            action
                            href={route('article.detail', article.id)}
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{article.title}</div>
                                {truncateHTML(article.content, 100)}
                            </div>
                            <Link href={route('article.detail', article.id)} className='btn btn-primary' alt='Ver detalles del proyecto'>Ver más</Link>
                            {article.tags.map((tag) => 
                                <Badge bg="primary" pill>{tag.name}</Badge>
                            )}
                        </ListGroup.Item>
                    )}
                    </ListGroup>
            </Container>
        </MainLayout>
    )
}

export default Articles