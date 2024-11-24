import FadeContainer from '@/Components/Bootstrap/FadeContainer'
import MainLayout from '@/Layouts/MainLayout'
import { ArticleProps } from '@/types/types'
import { truncateHTML } from '@/utils/functions'
import { Head, Link } from '@inertiajs/react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { Badge, Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'

type Props = {
    articles: ArticleProps[];
}

function Articles({articles}: Props) {

    let timeToAppear = 100;

    return (
        <MainLayout>
            <Head title="Artículos" />
            <br/>
            <div className='pt-5'>
                <Container>
                <Row className="mb-4">
                    <Col>
                    <h1 className="display-4 mb-3">Artículos</h1>
                    <p className="lead text-muted">
                        Explora mi colección de artículos sobre tecnología, desarrollo y más. Cuando aprendo algo nuevo, disfruto compartir mi conocimiento.
                    </p>
                    </Col>
                </Row>
                
                <Row xs={1} md={2} lg={3} className="g-4">
                    {articles.map((article) => (
                    <Col key={article.id}>
                        <FadeContainer timeToAppear={timeToAppear += 120} timeout={500}>
                        <Card className="h-100 shadow-sm hover-shadow transition-all">
                        {article.cover_url && (
                            <Card.Img
                            variant="top"
                            src={article.cover_url}
                            alt={article.title}
                            className="object-cover h-60"
                            />
                        )}
                        <Card.Body>
                            <div className="mb-2">
                            {article.tags.map((tag) => (
                                <Badge 
                                key={tag.id}
                                bg="dark" 
                                className="me-2 mb-2 rounded-pill px-3 py-2"
                                >
                                {tag.name}
                                </Badge>
                            ))}
                            </div>
                            <Card.Title className="h4 mb-3">
                            {article.title}
                            </Card.Title>
                            <Card.Text>
                            {truncateHTML(article.content, 100)}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="bg-white border-0">
                            <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">
                                {article.created_at && format(new Date(article.created_at), 'dd MMM yyyy', { locale: es })}
                            </small>
                            <Link
                                href={route('article.detail', article.id)}
                                className="btn btn-outline-primary rounded-pill px-4"
                            >
                                Leer más
                            </Link>
                            </div>
                        </Card.Footer>
                        </Card>
                        </FadeContainer>
                    </Col>
                    ))}
                </Row>
                </Container>
            </div>
        </MainLayout>
    )
}

export default Articles