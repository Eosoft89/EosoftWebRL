export type ProjectProps = {
    id: number;
    title: string;
    content: string;
    cover_url: string | undefined;
    tags: TagProps[];
    created_at: string;
    updated_at: string;
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

export type TagProps = {
    id: number;
    name: string;
}