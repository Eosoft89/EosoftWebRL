import FadeContainer from '@/Components/Bootstrap/FadeContainer';
import MainLayout from '@/Layouts/MainLayout';
import { ArticleProps } from '@/types/types'
import { Head } from '@inertiajs/react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import HTMLReactParser from 'html-react-parser/lib/index';
import { Badge, Container, Image } from 'react-bootstrap';


function ArticleDetail({...article}: ArticleProps) {
  let timeToAppear = 0;

  return (
    <MainLayout>
    <Head title='Proyecto'/>    
    <br />
    <Container className='pt-5'>
        <FadeContainer timeToAppear={timeToAppear += 120} timeout={500}>
            <div>
                <h1>{article.title}</h1>
                <small className="text-muted">
                    {article.created_at && format(new Date(article.created_at), 'dd MMMM yyyy', { locale: es })}
                </small>
            </div>
        </FadeContainer>
        <FadeContainer timeToAppear={timeToAppear += 120}>
            <Image src={article.cover_url} width={400} className='mt-4'/>
        </FadeContainer>
        
        {article.tags && (
            <div className="d-flex flex-wrap gap-1 mt-2">
                {article.tags.map((tag, index) => {
                    timeToAppear+=100;
                    return(
                        <FadeContainer timeToAppear={timeToAppear}>
                            <Badge 
                                key={index}
                                bg="success" 
                                className="rounded-pill px-2 py-1"
                            >
                                {tag.name}
                            </Badge>
                        </FadeContainer>
                    );
                })}
            </div>
        )}

        <FadeContainer timeToAppear={timeToAppear += 220}>
            <div className='mt-4'>
                {HTMLReactParser(article.content)}
            </div>
        </FadeContainer>                                   
        
    </Container>
</MainLayout>
  );
}

export default ArticleDetail