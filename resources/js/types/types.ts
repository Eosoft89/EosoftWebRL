export type ProjectProps = {
    id: number;
    title: string;
    content: string;
    cover_url: string | undefined;
}

export type ArticleProps = ProjectProps;

export type FlashMessage = {
    success?: string;
    error?: string;
}

export type ImageProps = {
    id: number;
    name: string;
    url: string;
}
