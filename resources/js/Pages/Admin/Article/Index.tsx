import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps } from '@/types';
import { Image, Table } from 'react-bootstrap';
import { Head, Link } from '@inertiajs/react';
import { truncateHTML } from '@/utils/functions';
import { ArticleProps } from '@/types/types';


interface Props extends PageProps<{articles: ArticleProps[]}>{

}

function Index ({auth, articles}: Props) {

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
                                    <td key='edit' align='center' className='align-middle'><Link href={route('article.edit', article.id)} className='btn btn-primary'>Editar</Link></td>
                                    <td key='delete' align='center' className='align-middle'><Link href='#' className='btn btn-danger'>Eliminar</Link></td>
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