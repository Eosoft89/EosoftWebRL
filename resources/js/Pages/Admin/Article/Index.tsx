import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types';
import { Badge, Image, Table } from 'react-bootstrap';
import { Head, Link, useForm } from '@inertiajs/react';
import { truncateHTML } from '@/utils/functions';
import { ArticleProps, FlashMessage } from '@/types/types';


interface Props extends PageProps{
    articles: ArticleProps[];
    flash: FlashMessage;
}

function Index ({auth, articles, flash}: Props) {

    const {delete: deleteArticle} = useForm();

    const handleDelete = (id: number) => {
        if(confirm("¿Desea eliminar el artículo")) {
            deleteArticle(route('article.destroy', id));
        }
    }

    return (
        <AdminLayout user={auth.user} header={<h2>Bienvenido {auth.user.name}</h2>}>
            <Head title="Artículos" />
            <main>

                <h2 className='mt-3 mb-3'>Artículos</h2>

                <Link href={route('article.create')} className='btn btn-primary m-2'>Crear nuevo</Link>

                {articles.length == 0 ? 
                    <p>Sin registros</p>
                    :
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Portada</th>
                                <th>Título</th>
                                <th>Contenido</th>
                                <th>Tags</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.map((article, index) =>
                                <tr key={article.id}>
                                    <td key='index' align='center' className='align-middle'>{index + 1}</td>
                                    <td key='cover' align='center' className='align-middle'><Image src={article.cover_url} width={80} /></td>
                                    <td key='title' className='align-middle'>{article.title}</td>
                                    <td key='content' className='align-middle'>{truncateHTML(article.content, 100)}</td>
                                    <td key='tags' width="10%" align='center' className='align-middle'>{article.tags.map((tag) => 
                                        <Badge key={tag.id} bg="primary" className="me-1 mb-1">
                                            {tag.name}
                                        </Badge>)}
                                    </td>
                                    <td key='edit' align='center' className='align-middle'><Link href={route('article.edit', article.id)} className='btn btn-primary'>Editar</Link></td>
                                    <td key='delete' width='10%' align='center' className='align-middle'><Link href='#' className='btn btn-danger'>Eliminar</Link></td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                }
            </main>
        </AdminLayout>
    );
}

export default Index