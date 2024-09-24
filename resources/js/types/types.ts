export interface ProjectProps {
    id: number;
    title: string;
    content: string;
    cover_url: string | undefined;
}

export interface ArticleProps extends ProjectProps {}

export interface FlashMessage{
    success?: string;
    error?: string;
}
